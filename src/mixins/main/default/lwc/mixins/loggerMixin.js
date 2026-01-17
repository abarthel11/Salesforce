export const LoggerMixin = (Base) =>
  class extends Base {
    get logPrefix() {
      return this.constructor.name;
    }

    log(...args) {
      console.log(`[${this.logPrefix}]`, ...args);
    }

    warn(...args) {
      console.warn(`[${this.logPrefix}]`, ...args);
    }

    error(...args) {
      console.error(`[${this.logPrefix}]`, ...args);
    }
  };
