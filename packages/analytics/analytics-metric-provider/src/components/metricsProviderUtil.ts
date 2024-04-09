import type {
  AnalyticsBridge,
  ExploreFilter,
  QueryableExploreDimensions,
  Timeframe,
} from '@kong-ui-public/analytics-utilities'
import composables from '../composables'
import type { MetricFetcherOptions } from '../types'
import { computed } from 'vue'
import type { InjectionKey, Ref } from 'vue'

interface ProviderData {
  data: {
    [key: string]: any // TODO
  },
  containerTitle?: string,
  description?: string,
  hasTrendAccess: Ref<boolean>,
  longCardTitles: boolean,
}

export const METRICS_PROVIDER_KEY = Symbol('METRICS_PROVIDER_KEY') as InjectionKey<ProviderData>

interface FetcherOptions {
  dimension?: QueryableExploreDimensions
  dimensionFilterValue?: string
  additionalFilter: Ref<ExploreFilter[] | undefined>
  queryReady: Ref<boolean>
  timeframe: Ref<Timeframe>
  tz: Ref<string>
  hasTrendAccess: Ref<boolean>
  refreshInterval: number
  queryFn: AnalyticsBridge['queryFn']
  evaluateFeatureFlagFn: AnalyticsBridge['evaluateFeatureFlagFn']
  abortController?: AbortController
}

export const defaultFetcherDefs = (opts: FetcherOptions) => {
  const {
    dimension,
    dimensionFilterValue,
    additionalFilter,
    queryReady,
    timeframe,
    tz,
    hasTrendAccess,
    refreshInterval,
    abortController,
    queryFn,
    evaluateFeatureFlagFn,
  } = opts

  if (dimensionFilterValue && !dimension) {
    throw new Error('Must provide a dimension if filtering by a value')
  }

  // The feature flag client is guaranteed to be initialized by the time the code gets to this place.
  const queryAverages = evaluateFeatureFlagFn('MA-2527-analytics-sku-config-endpoint', false)

  const singleEntityQuery = !!(dimension && dimensionFilterValue)
  const multiEntityQuery = !!(dimension && !dimensionFilterValue)

  const filter = computed<ExploreFilter[]>(() => {
    const retval: ExploreFilter[] = []

    if (singleEntityQuery) {
      retval.push({
        dimension,
        type: 'in',
        values: [dimensionFilterValue],
      })
    }

    if (additionalFilter.value) {
      retval.push(...additionalFilter.value)
    }

    return retval
  })

  const trafficMetricFetcherOptions: MetricFetcherOptions = {
    metrics: [
      'request_count',
    ],

    // Traffic and error rate cards should only try to query for the dimension if it's going to be used.
    // It isn't used for single entity queries.
    dimensions: [
      ...((dimension && !singleEntityQuery) ? [dimension] : []),
      'status_code_grouped',
    ],

    filter,
    queryReady,
    timeframe,
    tz,

    // Traffic and error rate cards can't query trend if multiple entities are expected.
    withTrend: computed<boolean>(() => hasTrendAccess.value && !multiEntityQuery),

    refreshInterval,
    queryFn,
    abortController,
  }

  const latencyMetricFetcherOptions: MetricFetcherOptions = {
    metrics: [
      queryAverages ? 'response_latency_average' : 'response_latency_p99',
    ],

    // To keep single-entity queries consistent, don't bother querying the dimension for latency
    // in the single-entity case, even though it's possible.
    ...((dimension && !singleEntityQuery) ? { dimensions: [dimension] } : {}),

    filter,
    queryReady,
    timeframe,
    tz,

    // Don't query latency trends in the multi-entity case: it's possible, but wasteful.
    withTrend: computed<boolean>(() => hasTrendAccess.value && !multiEntityQuery),

    refreshInterval,
    queryFn,
    abortController,
  }

  const trafficData = composables.useMetricFetcher(trafficMetricFetcherOptions)
  const latencyData = composables.useMetricFetcher(latencyMetricFetcherOptions)

  return {
    trafficData,
    latencyData,
  }
}
