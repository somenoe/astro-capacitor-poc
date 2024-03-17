import { Preferences } from "@capacitor/preferences";
import Alpine from "alpinejs";
import { faker } from "@faker-js/faker";

const TODO_KEY = "todo";

const setTodo = async (value: string) => {
  await Preferences.set({
    key: TODO_KEY,
    value,
  });
};

const getTodo = async () => {
  const { value } = await Preferences.get({ key: TODO_KEY });

  return value;
};

interface Todo {
  id: string;
  task: string;
  detail: string;
}

Alpine.data("xtodo", () => ({
  todos: [] as Todo[],
  newTask: faker.lorem.words({ min: 1, max: 4 }),
  newDetail: faker.lorem.paragraph(),
  async init() {
    const todos = await getTodo();
    this.todos = todos ? JSON.parse(todos) : [];

    this.$watch("todos", (todos) => setTodo(JSON.stringify(todos)));
  },
  addTodo() {
    this.todos.push({
      id: Math.random().toFixed(8).slice(2).toString(),
      task: this.newTask,
      detail: this.newDetail,
    });
    (this.newTask = faker.lorem.words({ min: 1, max: 4 })),
      (this.newDetail = faker.lorem.paragraph());
  },
  deleteTodo(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  },
}));
