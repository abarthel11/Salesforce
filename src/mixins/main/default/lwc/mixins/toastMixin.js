import { ShowToastEvent } from "lightning/platformShowToastEvent";

export const ToastMixin = (Base) =>
  class extends Base {
    showToast({ title, message, variant = "info" }) {
      console.log("OUTPUT : ", title);
      const evt = new ShowToastEvent({
        title,
        message,
        variant
      });
      this.dispatchEvent(evt);
    }
  };
