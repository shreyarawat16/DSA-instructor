
export enum Sender {
  USER = 'user',
  MODEL = 'model',
}

export interface ChatMessage {
  id: string;
  sender: Sender;
  text: string;
}
