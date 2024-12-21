import {Button} from "@/components/utils/button";
import {MouseEventHandler} from "react";

export const Modal = (props: {
  title: string;
  description: string;
  onClose: () => void;
  onPass: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div className="fixed left-0 top-0 h-screen w-screen flex items-center justify-center" onClick={props.onClose}>
      <div className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] p-4" onClick={(e) => e.stopPropagation()}>
        <div className="grid gap-4 border p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg bg-[#1a1a1a] border-gray-800">
          <div className="text-secondary-light relative">
            {props.title}
            <span
              className="absolute right-0 -top-2 text-lg block hover:text-white px-1.5 cursor-pointer"
              onClick={props.onClose}
            >
            &times;
          </span>
          </div>
          <div className="text-disabled-light">
            {props.description}
          </div>
          <div className="flex">
            <Button danger size="small" onClick={props.onPass}>Delete</Button>
          </div>
        </div>
      </div>
    </div>
  );
}