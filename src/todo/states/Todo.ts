import { atom } from "recoil";

export interface Todo {
  content: string;
  isDone: boolean;
}

export const todosState = atom<Array<Todo>>({
  key: "todos",
  default: [],
});
