import type {
  BaseFormConfig,
  KongManagerBaseFormConfig,
  KonnectBaseFormConfig,
} from '@kong-ui-public/entities-shared'
import type { RouteLocationRaw } from 'vue-router'
import type { Methods, Method } from './method-badge'

export enum RouterFlavor {
  TRADITIONAL = 'traditional', // includes traditional_compatible
  EXPRESSIONS = 'expressions',
}

export interface RouterFlavors {
  traditional?: boolean;
  expressions?: boolean;
}

export interface BaseRouteFormConfig
  extends Omit<BaseFormConfig, 'cancelRoute'> {
  /** Route to return to if canceling create/edit a Route form */
  cancelRoute: RouteLocationRaw;
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

/** This interface should only be used for FE form models. */
export interface BaseRouteStateFields {
  name: string;
  protocols: string;
  https_redirect_status_code: number;
  strip_path: boolean;
  preserve_host: boolean;
  request_buffering: boolean;
  response_buffering: boolean;
  tags: string;
  service_id: string;
  snis?: string[];
}

export interface TraditionalRouteStateFields {
  // Below are traditional router-only fields
  // They should be left empty when setting an Expressions route.
  methods?: MethodsFields;
  hosts?: string[];
  paths?: string[];
  headers?: HeaderFields[];
  regex_priority?: number;
  path_handling: PathHandlingVersion;
  sources?: Sources[];
  destinations?: Destinations[];
}

/**
 * This interface extends the BasicRouteStateFields to add Expressions router-only fields.
 * They should be left empty when setting a traditional route.
 */
export interface ExpressionsRouteStateFields {
  expression: string; // Expressions only. Not required now, as described in Kong/kong#12667
  /**
   * @type
   * @default 0
   */
  priority: number;
}

export interface RouteState<F extends BaseRouteStateFields> {
  routerFlavors: RouterFlavors;
  fields: F;
  isReadonly: boolean;
  errorMessage: string;
}

export const stateHasTraditionalFlavor = (
  state: RouteState<BaseRouteStateFields>,
): state is RouteState<BaseRouteStateFields & TraditionalRouteStateFields> =>
  state.routerFlavors.traditional === true

export const stateHasExpressionsFlavor = (
  state: RouteState<BaseRouteStateFields>,
): state is RouteState<BaseRouteStateFields & ExpressionsRouteStateFields> =>
  state.routerFlavors.expressions === true

export interface Headers {
  [key: string]: string[];
}

export interface BaseRoutePayload {
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
  snis?: string[] | null;
}

export interface TraditionalRoutePayload {
  methods?: Array<Method | string> | null;
  hosts?: string[] | null;
  paths?: string[] | null;
  headers?: Headers | null;
  regex_priority: number;
  path_handling: PathHandlingVersion;
  sources?: Sources[] | null;
  destinations?: Destinations[] | null;
}

export interface ExpressionsRoutePayload {
  expression?: string; // Expressions only. Not required now, as described in Kong/kong#12667
  priority: number; // Expressions only.
}
