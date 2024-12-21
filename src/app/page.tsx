import {TaskCounter} from "@/components/task-counter"
import {EmptyState} from "@/components/empty-state"
import {TaskItem} from "@/components/task-item"
import {Button} from "@/components/utils/button";
import {PageContainer} from "@/components/layouts/page-container";
import Image from "next/image";
import circlePlus from "@/assets/icons/circle-plus.svg";
import Link from "next/link";
import {getTaskCount, getTasks} from "@/app/actions";
import {Modal} from "@/components/utils/modal";

export default async function Home() {
  const tasks = await getTasks();
  const count = await getTaskCount();
  return (
    <PageContainer>
      <div className="-translate-y-1/2">
        <Link href="/new">
          <Button>
          <span>
            Create Task
          </span>
            <Image src={circlePlus} alt="Create task"/>
          </Button>
        </Link>
      </div>
      <div className="mt-[39px]">
        <TaskCounter total={count.total} completed={count.completed}/>
      </div>
      <div className={`flex flex-col mt-6 gap-3 ${tasks.length === 0 ? ' border-t border-t-secondary-gray rounded-lg' : ''}`}>
        {
          tasks.length === 0
            ? <EmptyState/>
            :
            <>
            {
              tasks.map((item) => (
                <TaskItem data={item} key={item.id}/>
              ))
            }
            </>
        }
      </div>
    </PageContainer>
  )
}
