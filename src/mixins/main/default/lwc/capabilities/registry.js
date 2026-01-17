import {
  ErrorHandlingMixin,
  EventBusMixin,
  LoadingMixin,
  LoggerMixin,
  ToastMixin
} from "c/mixins";

import CAP from "./tokens";

const REGISTRY = new Map([
  [CAP.LOGGER, { mixin: LoggerMixin }],
  [CAP.LOADING, { mixin: LoadingMixin, requires: [CAP.LOGGER] }],
  [CAP.TOASTS, { mixin: ToastMixin }],
  [
    CAP.ERRORS,
    { mixin: ErrorHandlingMixin, requires: [CAP.LOGGER, CAP.TOASTS] }
  ],
  [CAP.EVENTS, { mixin: EventBusMixin }]
]);

export default REGISTRY;
