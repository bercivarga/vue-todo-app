<template>
  <div class="app-container">
    <div class="app-card">
      <h1>
        Vue todo
      </h1>
      <TodoList :todos="todos" :addTodo="addTodo" :deleteTodo="deleteTodo" />
    </div>
  </div>
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

html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

body {
  margin: 0;
}

.app-container {
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: seagreen;
}

.app-card {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 24px 48px;
  box-shadow: 0 0 1px black;
  transition: height 2s linear;
}

@media screen and (min-width: 800px){
  .app-card {
    width: 50%;
  }
}
</style>
