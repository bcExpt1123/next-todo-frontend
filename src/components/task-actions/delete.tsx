'use client'
import Image from "next/image";
import trash from "@/assets/icons/trash.svg";
import {MouseEventHandler, MouseEvent} from "react";
import {TaskItemProps} from "@/components/task-item";
import {deleteTask} from "@/app/actions";
import {useModal} from "@/providers/confirmation-provider";

export const Delete = (props: TaskItemProps) => {
  const {openModal} = useModal();
  const onDelete: MouseEventHandler<HTMLButtonElement> = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    openModal("Delete Task", "Are you sure you want to delete this task?").then((result: boolean) => {
      if (result) {
        deleteTask(props.data.id)
      }
    });
  }
  return (
    <button className="p-1.5 hover:bg-primary-gray hover:rounded-lg" onClick={onDelete}>
      <Image src={trash} alt="Trash" height={16}/>
    </button>
  );
}