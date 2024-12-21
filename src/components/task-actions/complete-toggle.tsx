'use client'
import Image from "next/image";
import checked from "@/assets/icons/checked.svg";
import unchecked from "@/assets/icons/unchecked.svg";
import {TaskItemProps} from "@/components/task-item";
import {MouseEventHandler, MouseEvent, useState, useEffect} from "react";
import {changeTaskStatus} from "@/app/actions";

export const CompleteToggle = (props: TaskItemProps) => {
  const [completed, setCompleted] = useState<boolean>(false);
  useEffect(() => {
    setCompleted(props.data.completed);
  }, [props]);
  const onToggleComplete: MouseEventHandler<HTMLButtonElement> = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    changeTaskStatus(props.data.id, !completed).then(task => {
      if(task) setCompleted(task.completed);
    })
  }
  return (
    <button className={`p-1.5 hover:bg-primary-gray hover:rounded-lg`} onClick={onToggleComplete}>
      {
        completed
          ? <Image src={checked} alt="Completed"/>
          : <Image src={unchecked} alt="Not Completed"/>
      }
    </button>
  );
}