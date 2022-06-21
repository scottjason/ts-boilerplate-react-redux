export {};

declare global {
  interface Todo {
    id: string;
    text: string;
    isEditing: boolean;
    createdAt: string;
  }
}
