<template>
  <h1>
    Vue todo
  </h1>
  <TodoList :todos="todos" :addTodo="addTodo" :deleteTodo="deleteTodo" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import TodoList from '@/components/TodoList.vue';
import data, { Todo } from '@/data/todoList';
import getDate from '@/helpers/getDate';

export default defineComponent({
  name: 'App',
  components: {
    TodoList,
  },
  data() {
    return {
      todos: data.data.todos,
    };
  },
  methods: {
    addTodo(todo: string): void {
      if (!todo) return;
      this.todos.push(
        new Todo(uuidv4(), todo, getDate()),
      );
    },
    deleteTodo(id: string): void {
      this.todos = this.todos.filter((t) => {
        return t.id !== id;
      });
    },
  },
});
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
