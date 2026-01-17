import { LightningElement } from "lwc";
import { fromContext } from "@lwc/state";
import todoManager from "c/smTodo";

export default class AddTodo extends LightningElement {
  manager = fromContext(todoManager);
  handleAddTodo() {
    console.log("this.refs.todoItem.value", this.refs.todoItem.value);
    this.manager.value.addTodo(this.refs.todoItem.value);
    this.refs.todoItem.value = "";
  }
}
