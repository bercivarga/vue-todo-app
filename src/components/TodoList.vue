<template>
  <ul>
    <transition-group name="t-li">
      <li v-for="todo in todos" :key="todo.id">
          <button type="button" class="todo" @click="deleteTodo(todo.id)">
            <span>{{ todo.name }}</span>
            <span>{{ todo.time }}</span>
          </button>
      </li>
    </transition-group>
    <TodoInput :add-todo="addTodo" />
  </ul>

</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Todo } from '@/data/todoList';
import TodoInput from '@/components/TodoInput.vue';

export default defineComponent({
  name: 'TodoList',
  components: { TodoInput },
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
  methods: {
    isInTodos(todoId: string): boolean {
      const isInArr = this.todos.find((t) => t.id === todoId);
      console.log(!!isInArr);
      return !!isInArr;
    },
  },
});
</script>

<style lang="scss" scoped>
ul {
  padding: 0;

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

.t-li-enter-active,
.t-li-leave-active {
  transition: opacity .3s ease;
}

.t-li-enter-from,
.t-li-leave-to {
  opacity: 0;
}
</style>
