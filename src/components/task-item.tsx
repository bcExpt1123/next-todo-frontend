import Link from "next/link";
import {CompleteToggle} from "@/components/task-actions/complete-toggle";
import {Delete} from "@/components/task-actions/delete";
import {Task} from "@/app/actions";

export interface TaskItemProps {
  data: Task;
}

export function TaskItem(props: TaskItemProps) {
  const {completed} = props.data;
  return (
    <Link href={`/${props.data.id}`}>
      <div
        className={`flex text-sm items-center gap-3 rounded-lg p-4 bg-primary-gray transition-colors hover:bg-secondary-gray border ${completed ? 'border-primary-gray' : 'border-secondary-gray'}`}>
        <CompleteToggle data={props.data}/>
        <span
          className={`flex-1 leading-5 max-h-10 text-ellipsis overflow-hidden ${completed ? "line-through text-disabled-light" : "text-primary-light"}`}
        >
        {props.data.title}
      </span>
        <Delete data={props.data}/>
      </div>
    </Link>
  )
}

