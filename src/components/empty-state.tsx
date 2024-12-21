import Image from "next/image";
import empty from "@/assets/icons/empty.png";

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16">
      <Image src={empty} alt="Empty" width={56} height={56}/>
      <p className="text-disabled-light font-bold">
        You don&apos;t have any tasks registered yet.
      </p>
      <p className="text-disabled-light">
        Create tasks and organize your to-do items.
      </p>
    </div>
  )
}

