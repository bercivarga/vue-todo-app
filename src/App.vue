<template>
  <h1>
    Home page of the vue todo app
  </h1>
  <TodoList :todos="todos" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoList from '@/components/TodoList.vue';
import data from '@/data/todoList';

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
});
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
