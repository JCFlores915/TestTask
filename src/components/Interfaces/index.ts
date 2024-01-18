export interface ICustomButtonProps {
  type:
    | "warning"
    | "success"
    | "danger"
    | "primary"
    | "secondary"
    | "info"
    | "light"
    | "dark"
    | "link";
  text: string;
  onClick?: () => void;
  htmlType?: "button" | "submit" | "reset";
  block?: string
}
