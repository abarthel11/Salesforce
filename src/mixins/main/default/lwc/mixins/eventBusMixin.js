export const EventBusMixin = (Base) =>
  class extends Base {
    emit(eventName, detail = {}) {
      this.dispatchEvent(
        new CustomEvent(eventName, {
          detail,
          bubbles: true,
          composed: true
        })
      );
    }

    on(eventName, handler) {
      this.addEventListener(eventName, handler);
    }

    off(eventName, handler) {
      this.removeEventListener(eventName, handler);
    }
  };
