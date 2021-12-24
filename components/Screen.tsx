import { UserIcon } from "@heroicons/react/outline";
import { FC, } from "react";

interface ScreenProps {
}

const Screen: FC<ScreenProps> = () => {

  return (
    <>
      <div className={`
      w-full h-20 sticky shadow-lg top-0 left-0 
      bg-white flex items-center px-5 
      rounded-b-sm overflow-hidden
    `}>
        <h1 className="capitalize tracking-wide text-2xl text-cyan-300 mr-5 h_animation">blog</h1>
        <div className="flex-1 flex items-center justify-end space-x-3 right_animation">
          <span>蓝大牛</span>
          {true ?
            // eslint-disable-next-line @next/next/no-img-element
            <img className="w-10 h-10 object-cover cursor-pointer rounded-full"
              src="./images/203.jpg"
              alt="userImage"
              title="蓝大牛"
            /> :
            <div className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer">
              <UserIcon className="w-6 h-6" />
            </div>
          }
        </div>
      </div>
      <main>
        <img className='w-full h-auto lg:h-screen mt-[-80px] object-cover' src='./images/homepage.jpg' alt='homelog' />
        <div className='h-[1080px]'>
        </div>
      </main>
    </>
  )
}

export default Screen;
