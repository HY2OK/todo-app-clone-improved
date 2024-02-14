import TodoItems from './TodoItems'
import { CiCirclePlus } from 'react-icons/ci'

function todoSection() {
  return (
    <section className="h-full flex justify-center items-center bg-slate-300">
      <div className="w-1/2 h-2/3 flex flex-col gap-3 bg-white p-10 rounded-lg">
        <h1 className="text-4xl font-bold mb-1 text-green-600">TODO</h1>
        <div className="relative">
          <form action="">
            <input
              type="text"
              className="w-full h-12 text-xl border rounded px-5 placeholder:text-slate-400 outline-none focus:border-green-500"
              placeholder="오늘의 할일"
            />
            <button>
              <CiCirclePlus className="absolute top-1/2 right-3 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-green-600 z-10" />
            </button>
          </form>
        </div>
        <ul className="flex flex-col items-center gap-4 mt-3 overflow-scroll">
          <TodoItems />
          <TodoItems />
          <TodoItems />
          <TodoItems />
          <TodoItems />
          <TodoItems />
          <TodoItems />
          <TodoItems />
          <TodoItems />
          <TodoItems />
        </ul>
      </div>
    </section>
  )
}

export default todoSection
