import CAP from "./tokens";
import REGISTRY from "./registry";
import topoSort from "./topoSort";

function composeCapabilities(Base, tokens = []) {
  const ordered = topoSort([...new Set(tokens)]);
  return ordered.reduce((Cls, token) => {
    return REGISTRY.get(token).mixin(Cls);
  }, Base);
}

export { CAP, composeCapabilities };
