import rocketIcon from "@/assets/icons/rocket.svg";
import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center justify-center gap-3 py-8">
      <Image src={rocketIcon} alt="Todo App" className="h-8 w-8"/>
      <h1 className="font-black text-[40px] leading-[48.41px]">
        <span className="text-primary">Todo</span>&nbsp;
        <span className="text-secondary">App</span>
      </h1>
    </div>
  )
}

