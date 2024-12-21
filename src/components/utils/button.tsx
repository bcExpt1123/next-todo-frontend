import React, {MouseEventHandler} from "react";

export const Button = (props: {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  danger?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  const className = `w-full 
    ${props.danger
    ? " bg-red-500 hover:bg-red-400 "
    : " bg-success hover:bg-primary "}
       transition-all ease-in-out duration-300 rounded-lg text-sm font-bold 
        ${props.size === "small"
    ? "py-2"
    : props.size === "large"
      ? "py-5"
      : "py-4"}
        text-primary-light`
  return (
    <button type={props.type} className={className} onClick={props.onClick}>
      <span className="justify-center flex gap-2">
          {props.children}
      </span>
    </button>
  );
}