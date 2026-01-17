import REGISTRY from "./registry";
export default function topoSort(tokens) {
  const visiting = new Set();
  const visited = new Set();
  const result = [];

  function visit(token) {
    if (visited.has(token)) return;
    if (visiting.has(token)) {
      throw new Error("Circular capability dependency detected");
    }

    const entry = REGISTRY.get(token);
    if (!entry) throw new Error("Unknown capability token");

    visiting.add(token);
    (entry.requires || []).forEach(visit);
    visiting.delete(token);

    visited.add(token);
    result.push(token);
  }

  tokens.forEach(visit);
  return result;
}
