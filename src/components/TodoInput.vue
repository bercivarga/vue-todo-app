<template>
  <form @submit.prevent="addTodo(currentTodo)">
    <input v-model="currentTodo" placeholder="Enter your todo here...">
    <button type="button" @click.prevent="currentTodo = ''" v-show="currentTodo">
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z"
        />
      </svg>
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'TodoInput',
  data() {
    return {
      currentTodo: '',
    };
  },
  props: {
    addTodo: {
      type: Function as PropType<(todoName: string) => void>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
form {
  position: relative;
  margin-top: 16px;
  width: 100%;
}

input {
  border: none;
  box-sizing: border-box;
  padding: 12px 46px 12px 8px;
  font-size: 18px;
  width: 100%;
  box-shadow: 0px -2px 0px seagreen inset;
  transition: box-shadow .2s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0px -4px 0px seagreen inset;
  }
}

button {
  background-color: darkred;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-45%);
  transition: background-color .2s;
  cursor: pointer;

  &:hover {
    background-color: red;
  }

  svg {
    width: 16px;
    height: 16px;
  }
}
</style>
