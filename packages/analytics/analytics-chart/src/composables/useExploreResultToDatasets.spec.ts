import { AnalyticsExploreResult } from '@kong-ui-public/analytics-utilities'
import { describe, it, expect } from 'vitest'
import { computed, ComputedRef } from 'vue'
import useExploreResultToDatasets from './useExploreResultToDatasets'

describe('useVitalsExploreDatasets', () => {
  it('can handle empty records', () => {
    const exploreResult: ComputedRef<AnalyticsExploreResult> = computed(() => ({
      records: [],
      meta: {
        start: 1640998862,
        end: 1640998870,
        granularity: 5000,
        dimensions: { dimension: ['dimension'] },
        metricNames: ['metric'],
        queryId: '',
        metricUnits: { metric: 'units' },
        truncated: false,
        limit: 15,
      },
    }))

    const result = useExploreResultToDatasets({ fill: true }, exploreResult)

    expect(result.value).toEqual({ datasets: [], labels: [] })
  })

  it('can handle no meta', () => {
    const exploreResult: ComputedRef = computed(() => ({
      records: [],
      meta: {},
    }))

    const result = useExploreResultToDatasets({ fill: true }, exploreResult)

    expect(result.value).toEqual({ datasets: [], labels: [] })
  })

  it('falls back to metric if single dimension is "organization"', () => {
    const exploreResult: ComputedRef<AnalyticsExploreResult> = computed(() => ({
      records: [
        {
          version: 'v1',
          timestamp: '2022-01-01T01:01:02Z',
          event: {
            metric: 1,
            Organization: 'dimension1',
          },
        },
      ],
      meta: {
        start: 1640998862,
        end: 1640998870,
        granularity: 5000,
        dimensions: { Organization: ['dimension1'] },
        metricNames: ['metric'],
        queryId: '',
        metricUnits: { metric: 'units' },
        truncated: false,
        limit: 15,
      },
    }))
    const result = useExploreResultToDatasets({ fill: true }, exploreResult)

    expect(result.value).toEqual(
      {
        labels: ['metric'],
        datasets: [
          { label: 'metric', backgroundColor: '#a86cd5', data: [1] },
        ],
      },
    )
  })

  it('single dimension result works as normal', () => {
    const exploreResult: ComputedRef<AnalyticsExploreResult> = computed(() => ({
      records: [
        {
          version: 'v1',
          timestamp: '2022-01-01T01:01:02Z',
          event: {
            metric: 1,
            dimension: 'dimension1',
          },
        },
      ],
      meta: {
        start: 1640998862,
        end: 1640998870,
        granularity: 5000,
        dimensions: { dimension: ['dimension1'] },
        metricNames: ['metric'],
        queryId: '',
        metricUnits: { metric: 'units' },
        truncated: false,
        limit: 15,
      },
    }))
    const result = useExploreResultToDatasets({ fill: true }, exploreResult)

    expect(result.value).toEqual(
      {
        labels: ['dimension1'],
        datasets: [
          { label: 'dimension1', backgroundColor: '#a86cd5', data: [1] },
        ],
      },
    )
  })

  it('handles multi dimension query', () => {
    const exploreResult: ComputedRef<AnalyticsExploreResult> = computed(() => ({
      records: [
        {
          version: 'v1',
          timestamp: '2023-02-20T21:00:00.000Z',
          event: {
            GroupBy: 'group-by-1',
            ThenBy: 'then-by-1',
            metric: 100,
          },
        },
        {
          version: 'v1',
          timestamp: '2023-02-20T21:00:00.000Z',
          event: {
            GroupBy: 'group-by-1',
            ThenBy: 'then-by-2',
            metric: 150,
          },
        },
        {
          version: 'v1',
          timestamp: '2023-02-20T21:00:00.000Z',
          event: {
            GroupBy: 'group-by-2',
            ThenBy: 'then-by-3',
            metric: 200,
          },
        },
        {
          version: 'v1',
          timestamp: '2023-02-20T21:00:00.000Z',
          event: {
            GroupBy: 'group-by-2',
            ThenBy: 'then-by-4',
            metric: 250,
          },
        },
      ],
      meta: {
        start: 1669928400,
        end: 1670014800,
        granularity: 86400000,
        metricNames: ['metric'],
        dimensions: {
          GroupBy: ['group-by-1', 'group-by-2'],
          ThenBy: ['then-by-1', 'then-by-2', 'then-by-3', 'then-by-4'],
        },
        queryId: '',
        metricUnits: { metric: 'units' },
        truncated: false,
        limit: 15,
      },
    }))
    const result = useExploreResultToDatasets({ fill: true }, exploreResult)
    console.log(result.value)
    expect(result.value).toEqual(
      {
        labels: ['group-by-1', 'group-by-2'],
        datasets: [
          { label: 'then-by-1', backgroundColor: '#a86cd5', data: [100, 0] },
          { label: 'then-by-2', backgroundColor: '#6a86d2', data: [150, 0] },
          { label: 'then-by-3', backgroundColor: '#00bbf9', data: [0, 200] },
          { label: 'then-by-4', backgroundColor: '#00c4b0', data: [0, 250] },
        ],
      },
    )
  })

})

it('handles no dimension', () => {
  const exploreResult: ComputedRef<AnalyticsExploreResult> = computed(() => ({
    records: [
      {
        version: 'v1',
        timestamp: '2022-01-01T01:01:02Z',
        event: {
          metric: 1,
          dimension: 'dimension1',
        },
      },
    ],
    meta: {
      start: 1640998862,
      end: 1640998870,
      granularity: 5000,
      metricNames: ['metric'],
      queryId: '',
      metricUnits: { metric: 'units' },
      truncated: false,
      limit: 15,
    },
  }))
  const result = useExploreResultToDatasets({ fill: true }, exploreResult)

  expect(result.value).toEqual(
    {
      labels: ['metric'],
      datasets: [
        { label: 'metric', backgroundColor: '#a86cd5', data: [1] },
      ],
    },
  )
})

it('handles empty dimension', () => {
  const exploreResult: ComputedRef<AnalyticsExploreResult> = computed(() => ({
    records: [
      {
        version: 'v1',
        timestamp: '2022-01-01T01:01:02Z',
        event: {
          metric: 1,
          dimension: 'dimension1',
        },
      },
    ],
    meta: {
      start: 1640998862,
      end: 1640998870,
      granularity: 5000,
      metricNames: ['metric'],
      queryId: '',
      metricUnits: { metric: 'units' },
      truncated: false,
      limit: 15,
      dimensions: {},
    },
  }))
  const result = useExploreResultToDatasets({ fill: true }, exploreResult)

  expect(result.value).toEqual(
    {
      labels: ['metric'],
      datasets: [
        { label: 'metric', backgroundColor: '#a86cd5', data: [1] },
      ],
    },
  )
})