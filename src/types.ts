export interface Message {
  _id: string;
  author: string;
  message: string;
  datetime: string;
}

export interface MessageMutation {
  author: string;
  message: string;
}
