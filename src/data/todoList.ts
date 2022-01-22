import getDate from '@/helpers/getDate';

export class Todo {
  id: string

  name: string

  time: string

  constructor(id: string, name: string, time: string) {
    this.id = id;
    this.name = name;
    this.time = time;
  }
}

const data = {
  data: {
    todos: [
      new Todo(new Date().toDateString(), 'Clean room', getDate()),
      new Todo(new Date().toDateString(), 'Feed cat', getDate()),
      new Todo(new Date().toDateString(), 'Cook dinner', getDate()),
    ],
  },
};

export default data;
