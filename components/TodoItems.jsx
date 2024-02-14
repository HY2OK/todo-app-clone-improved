import { MdOutlineDeleteOutline } from 'react-icons/md'
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from 'react-icons/ri'

function TodoItems() {
  return (
    <li className="w-full flex justify-between items-center text-lg px-3 text-slate-600">
      <span className="flex justify-center items-center gap-2">
        <RiCheckboxBlankCircleLine className="text-xl" />
        오늘의 할일
      </span>
      <MdOutlineDeleteOutline className="text-xl hover:text-red-400 hover:cursor-pointer" />
    </li>
  )
}

export default TodoItems
