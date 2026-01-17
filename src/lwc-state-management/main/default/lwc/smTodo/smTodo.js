import { defineState } from "@lwc/state";

export const todoManager = defineState(({ atom, computed, setAtom }) => {
  const items = atom([]); // [{ id, text, completed }]

  const completedCount = computed(
    [items],
    (v) => v.filter((t) => t.completed).length
  );
  const remainingCount = computed(
    [items],
    (v) => v.filter((t) => !t.completed).length
  );
  const totalCount = computed([items], (v) => v.length);

  const addTodo = (text) => {
    console.log("text:", text);
    const trimmed = (text ?? "").trim();
    if (!trimmed) return;

    setAtom(items, [
      ...items.value,
      { id: crypto.randomUUID(), text: trimmed, completed: false }
    ]);
  };

  const completeTodo = (id) => {
    setAtom(
      items,
      items.value.map((t) => (t.id === id ? { ...t, completed: true } : t))
    );
  };

  const toggleTodo = (id) => {
    setAtom(
      items,
      // eslint-disable-next-line no-confusing-arrow
      items.value.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = (id) => {
    setAtom(
      items,
      items.value.filter((t) => t.id !== id)
    );
  };

  const clearCompleted = () => {
    setAtom(
      items,
      items.value.filter((t) => !t.completed)
    );
  };

  return {
    items,
    completedCount,
    remainingCount,
    totalCount,
    addTodo,
    completeTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted
  };
});
export default todoManager;
