// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
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
      new Todo(uuidv4(), 'Clean room', getDate()),
      new Todo(uuidv4(), 'Feed cat', getDate()),
      new Todo(uuidv4(), 'Cook dinner', getDate()),
    ],
  },
};

export default data;
