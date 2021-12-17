import { ArrowUpIcon } from "@heroicons/react/outline";
import { FC } from "react";

interface FloorButtonProps {
  isShow: boolean
}

const FloorButton: FC<FloorButtonProps> = ({ isShow }) => {

  function scrollTo() {
    window.scrollTo(0, 0)
  }

  return (
    <div className={`
      fixed bottom-5 right-5 bg-blue-500
      p-3 rounded-full text-white shadow-xl
      cursor-pointer show ${!isShow && 'hide'}
      `}
      onClick={scrollTo}
    >
      <ArrowUpIcon className="h-5 w-5" />
    </div>
  )
}

export default FloorButton;
