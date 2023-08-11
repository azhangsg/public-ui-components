import useAxios from './useAxios'
import useDebouncedFilter from './useDebouncedFilter'
import useDeleteUrlBuilder from './useDeleteUrlBuilder'
import useErrors from './useErrors'
import useFetcher from './useFetcher'
import useFetchUrlBuilder from './useFetchUrlBuilder'
import useStringHelpers from './useStringHelpers'
import useI18n from './useI18n'
import useGatewayFeatureSupported from './useGatewayFeatureSupported'

// All composables must be exported as part of the default object for Cypress test stubs
export default {
  useAxios,
  useDebouncedFilter,
  useDeleteUrlBuilder,
  useErrors,
  useFetcher,
  useFetchUrlBuilder,
  useStringHelpers,
  useI18n,
  useGatewayFeatureSupported,
}