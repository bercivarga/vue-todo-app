<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <button type="button" class="todo" @click="deleteTodo(todo.id)">
        <span>{{ todo.name }}</span>
        <span>{{ todo.time }}</span>
      </button>
    </li>
  </ul>
  <form @submit.prevent="addTodo(currentTodo)">
    <input v-model="currentTodo">
  </form>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Todo } from '@/data/todoList';

export default defineComponent({
  name: 'TodoList',
  data() {
    return {
      currentTodo: '',
    };
  },
  props: {
    todos: {
      type: Array as PropType<Todo[]>,
      required: true,
    },
    addTodo: {
      type: Function as PropType<(todoName: string) => void>,
      required: true,
    },
    deleteTodo: {
      type: Function as PropType<(id: string) => void>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    list-style: none;
  }
}

.todo {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px 32px;
  background-color: white;
  color: black;
  border: none;
  box-shadow: 0 0 1px black;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  transition: background-color .2s, color .2s;
  transition-timing-function: ease-in-out;

  &:hover,
  &:focus,
  {
    background-color: forestgreen;
    color: white;
  }
}
</style>
