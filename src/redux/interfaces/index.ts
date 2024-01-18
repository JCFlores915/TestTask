

export interface IInitialState {
  allTasks: IDataType[];
}

export type NotificationType = "success" | "info" | "warning" | "error";

export interface INotification {
  type: NotificationType;
  message: string;
}


export interface IDataType {
  id: string;
  name: string;
  createdAt?: string;
  avatar: string;
  username?: string;
  password?: string;
}

export interface IProps {
  data: IDataType[];
  loading?: boolean;
  getListData: () => void;
  hasMore?: boolean;
}