export const LoadingMixin = (Base) =>
  class extends Base {
    isLoading = false;

    startLoading() {
      this.isLoading = true;
    }

    stopLoading() {
      this.isLoading = false;
    }

    async withLoading(fn) {
      this.startLoading();
      try {
        return await fn();
      } finally {
        this.stopLoading();
      }
    }
  };
