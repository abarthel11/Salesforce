import { CAP, composeCapabilities } from "c/capabilities";

import { LightningElement } from "lwc";

const Base = composeCapabilities(LightningElement, [
  CAP.LOGGER,
  CAP.LOADING,
  CAP.TOASTS,
  CAP.ERRORS,
  CAP.EVENTS
]);

export default class FullFeaturedCmp extends Base {
  // LoggerMixin: logPrefix (getter)
  // get logPrefix() {
  //   return "FullFeaturedCmp";
  // }

  connectedCallback() {
    // LoggerMixin: log, warn
    this.log("quick log from connectedCallback");
  }
}
