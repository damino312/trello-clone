import Link from "next/link";

import { Button } from "@/components/ui/button";
export default function MarketingPage() {
  return (
    <div className="flex items-center justify-center flex-col pt-32">
      <div className=" bg-amber-100 p-3 rounded-md font-bold text-sm text-orange-800 mb-4 ">
        Лучший менеджер задач в мире
      </div>
      <div className=" font-bold text-3xl mb-4 sm:text-4xl ">
        Easify помогает команде двигать
      </div>
      <div className=" text-white p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold text-3xl sm:text-4xl rounded-lg mb-4">
        работу вперед.
      </div>
      <div className=" w-3/4 sm:w-2/4  text-center mb-4 text-gray-500 text-sm">
        Сотрудничайте, управляйте проектами и реагируйте на новые пики
        производительности. От высокие потолки в домашнем офисе, уникальный
        подход к работе вашей команды - выполняйте все это Easify
      </div>
      <Button size={"lg"} asChild>
        <Link href={"/sign-up"}>Попробовать Easify бесплатно</Link>
      </Button>
    </div>
  );
}
