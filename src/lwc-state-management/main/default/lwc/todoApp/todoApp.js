import { LightningElement } from "lwc";
import todoManager from "c/smTodo";

export default class TodoApp extends LightningElement {
  manager = todoManager();
  get todoItems() {
    return this.manager.value.items || [];
  }

  get stateDump() {
    return JSON.stringify(this.manager.value, null, 2);
  }
}
