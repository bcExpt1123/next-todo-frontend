import {Badge} from "@/components/utils/badge";

interface TaskCounterProps {
  total: number
  completed: number
}

export function TaskCounter({ total, completed }: TaskCounterProps) {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <span className="text-primary text-sm font-bold">Tasks</span>
        <Badge>{total}</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-secondary text-sm font-bold">Completed</span>
        <Badge>{total > 0 ? `${completed} de ${total}` : 0}</Badge>
      </div>
    </div>
  )
}

