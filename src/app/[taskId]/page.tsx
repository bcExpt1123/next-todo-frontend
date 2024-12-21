import {PageContainer} from "@/components/layouts/page-container";
import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/utils/button";
import leftArrow from "@/assets/icons/left-arrow.svg";
import check from "@/assets/icons/check.svg";
import circlePlus from "@/assets/icons/circle-plus.svg";
import {getTask, Task} from "@/app/actions";
import {TaskForm} from "@/components/task-actions/task-form";
import {Label} from "@/components/utils/form/label";
import {Input} from "@/components/utils/form/input";
import {Modal} from "@/components/utils/modal";

const COLORS = [
  "after:bg-app-red", // red
  "after:bg-app-orange", // orange
  "after:bg-app-yellow", // yellow
  "after:bg-app-green", // green
  "after:bg-app-blue", // blue
  "after:bg-app-indigo", // indigo
  "after:bg-app-purple", // purple
  "after:bg-app-pink", // pink
  "after:bg-app-brown", // brown
]

interface TaskFormProps {
  params: {
    taskId: string;
  }
}

export default async function TaskDetail({params}: TaskFormProps) {
  const {taskId} = await params;
  let task: Task | null = null;
  if(taskId !== "new") {
    task  = await getTask(Number(taskId))
  }
  return (
    <PageContainer>
      <TaskForm>
        <div className="space-y-12 pt-[91px]">
          <div>
            <Link
              href="/"
              className="inline-flex p-1.5 hover:bg-primary-gray hover:rounded-lg"
            >
              <Image src={leftArrow} alt="Back"/>
            </Link>
          </div>
          <input type="hidden" name="id" value={taskId}/>
          <div className="space-y-6">
            <div className="flex flex-col space-y-3 -mt-1.5">
              <Label htmlFor="title">
                Title
              </Label>
              <Input
                id="title"
                name="title"
                defaultValue={task?.title}
                placeholder="Ex. Brush your teeth"
                required
              />
            </div>
            <div className="space-y-3">
              <Label>
                Color
              </Label>
              <div className="flex flex-wrap gap-4">
                {
                  COLORS.map((c) => {
                    return <input
                      type="radio"
                      name="color"
                      required={true}
                      defaultChecked={c.split("-").slice(-1)[0] === task?.color}
                      key={c}
                      value={c.split("-").slice(-1)[0]}
                      className={`w-[52px] h-[52px] relative after:cursor-pointer after:absolute after:h-[52px] after:content-[''] after:w-[52px] after:rounded-full checked:after:border-2 checked:after:border-white ${c}`}
                    />
                  })}
              </div>
            </div>
          </div>
          <Button type="submit">
            {
              taskId == 'new'
                ? "Add Task"
                : "Save"
            }
            {
              taskId == 'new'
                ? <Image src={circlePlus} alt="Add Task"/>
                : <Image src={check} alt="Save"/>
            }
          </Button>
        </div>
      </TaskForm>
    </PageContainer>
  )
}
