'use client'
import {useActionState} from "react";
import {upsertTask} from "@/app/actions";

export const TaskForm = (props: {
  children: React.ReactNode;
}) => {
  const [state, formAction] = useActionState(upsertTask, undefined)

  return (
    <form action={formAction} className="relative">
      {
        state?.error
          ? <div className="absolute top-4 w-full text-red-500 p-3 border border-red-400 rounded-lg">
            {state.error}
          </div>
          : <></>
      }
      {props.children}
    </form>
  );
}