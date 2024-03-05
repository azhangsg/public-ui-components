import type {
  BaseFormConfig,
  KongManagerBaseFormConfig,
  KonnectBaseFormConfig,
} from '@kong-ui-public/entities-shared'
import type { RouteLocationRaw } from 'vue-router'
import type { Methods, Method } from './method-badge'

export type RouterFlavor = 'traditional' | 'expressions'

export interface BaseRouteFormConfig
  extends Omit<BaseFormConfig, 'cancelRoute'> {
  /** Route to return to if canceling create/edit a Route form */
  cancelRoute: RouteLocationRaw;
  routerFlavor?: RouterFlavor; // Will use 'traditional' if not specified
}

/** Konnect Route form config */
export interface KonnectRouteFormConfig
  extends Omit<KonnectBaseFormConfig, 'cancelRoute'>,
  BaseRouteFormConfig {}

/** Kong Manager Route form config */
export interface KongManagerRouteFormConfig
  extends Omit<KongManagerBaseFormConfig, 'cancelRoute'>,
  BaseRouteFormConfig {}

export enum RoutingRulesEntities {
  PATHS = 'paths',
  SNIS = 'snis',
  HOSTS = 'hosts',
  METHODS = 'methods',
  HEADERS = 'headers',
  SOURCES = 'sources',
  DESTINATIONS = 'destinations',
  CUSTOM_METHOD = 'custom-method',
}

export type RoutingRuleEntity = Exclude<
  `${RoutingRulesEntities}`,
'custom-method'
>;

export type PathHandlingVersion = 'v0' | 'v1';

export type Protocol =
  | 'grpc'
  | 'grpcs'
  | 'http'
  | 'https'
  | 'tcp'
  | 'tls'
  | 'tls_passthrough'
  | 'udp'
  | 'ws'
  | 'wss';

export interface HeaderFields {
  header: string;
  values: string;
}

export type MethodsFields = {
  [key in Methods | string]: boolean;
};

export interface SourcesDestinationsFields {
  ip: string;
  port: number;
}

export interface Sources extends SourcesDestinationsFields {}

export interface Destinations extends SourcesDestinationsFields {}

export interface RouteStateFieldsTraditional {
  service_id: string;
  name: string;
  tags: string;
  regex_priority: number;
  path_handling: PathHandlingVersion;
  preserve_host: boolean;
  https_redirect_status_code: number;
  protocols: string;
  request_buffering: boolean;
  response_buffering: boolean;
  strip_path: boolean;
  paths?: string[];
  snis?: string[];
  hosts?: string[];
  methods?: MethodsFields;
  headers?: HeaderFields[];
  sources?: Sources[];
  destinations?: Destinations[];
}

export interface RouteStateFieldsExpressions {
  name: string;
  protocols: string;
  https_redirect_status_code: number;
  strip_path: boolean;
  preserve_host: boolean;
  request_buffering: boolean;
  response_buffering: boolean;
  tags: string;
  service_id: string;
  expression: string;
  priority: number;
}

export type RouteStateFields<F extends RouterFlavor | undefined> = F extends 'expressions'
  ? RouteStateFieldsExpressions
  : RouteStateFieldsTraditional;

export interface RouteState<F extends RouterFlavor | undefined> {
  fields: RouteStateFields<F>;
  isReadonly: boolean;
  errorMessage: string;
}

// This function is meaningless. Only for better Intellisense for developer tools.
export const narrowDownFields = <RF extends RouterFlavor>(
  fields: RouteStateFieldsTraditional | RouteStateFieldsExpressions,
  testFlavor: RouterFlavor | undefined,
  expectedFlavor: RF,
): fields is RouteStateFields<RF> => testFlavor === expectedFlavor

export interface Headers {
  [key: string]: string[];
}

export interface RoutePayloadTraditional {
  id?: string;
  service: { id: string } | null;
  name?: string | null;
  tags: string[];
  regex_priority: number;
  path_handling: PathHandlingVersion;
  preserve_host: boolean;
  https_redirect_status_code: number;
  protocols: Protocol[];
  request_buffering: boolean;
  response_buffering: boolean;
  strip_path?: boolean | null;
  paths?: string[] | null;
  snis?: string[] | null;
  hosts?: string[] | null;
  methods?: Array<Method | string> | null;
  headers?: Headers | null;
  sources?: Sources[] | null;
  destinations?: Destinations[] | null;
}

export interface RoutePayloadExpressions {
  id?: string;
  name?: string | null;
  protocols: Protocol[];
  https_redirect_status_code: number;
  strip_path?: boolean | null;
  preserve_host: boolean;
  request_buffering: boolean;
  response_buffering: boolean;
  tags: string[];
  service: { id: string } | null;
  expression: string
  priority: number;
}

export type RoutePayload<F extends RouterFlavor | undefined> = F extends 'expressions'
  ? RoutePayloadExpressions
  : RoutePayloadTraditional
