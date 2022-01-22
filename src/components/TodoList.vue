<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <div class="todo">
        <span>{{ todo.name }}</span>
        <span>{{ todo.time }}</span>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Todo } from '@/data/todoList';

export default defineComponent({
  name: 'TodoList',
  props: {
    todos: {
      type: Array as PropType<Todo[]>,
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
  padding: 16px 32px;
  background: white;
  color: black;
  box-shadow: 0 0 1px black;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
}
</style>
