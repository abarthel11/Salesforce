export const ErrorHandlingMixin = (Base) =>
  class extends Base {
    normalizeError(error) {
      if (Array.isArray(error?.body)) {
        return error.body.map((e) => e.message).join(", ");
      }
      return error?.body?.message || error?.message || "Unknown error";
    }

    handleError(error) {
      const message = this.normalizeError(error);

      this.error?.("Handled error:", message);
      this.showToast?.({
        title: "Error",
        message,
        variant: "error"
      });

      return message;
    }
  };
