export interface ITask {
  name: string;
  createAt: string;
}

export interface IInitialState {
  allTasks: ITask[];
}

export type NotificationType = "success" | "info" | "warning" | "error";

export interface INotification {
  type: NotificationType;
  message: string;
}
