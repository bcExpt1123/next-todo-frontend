import {ReactNode} from "react";

export const Label = (props: {
  children: ReactNode;
  htmlFor?: string;
}) => {
  return <label htmlFor={props.htmlFor} className="text-sm font-bold text-primary">
    {props.children}
  </label>
}