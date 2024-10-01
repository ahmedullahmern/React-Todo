import { useState } from 'react'


function App() {
  const [todos, setTodos] = useState([{ value: "Ahmed" }, { value: "Basit" }])
  const [value, setValue] = useState("")

  const handelAdd = () => {
    setTodos([...todos, { value }])
    setValue("")
  }

  const deltodo = (i) => {
    const oldTods = [...todos];
    oldTods.splice(i, 1)
    setTodos(oldTods)
  }
  const delAll = () => {
    setTodos([])
  }

  return (
    <>


      <div className="flex items-center max-w-lg mx-auto mt-10">
        <h1 className="text-5xl font-semibold dark:text-white">React Todo</h1>
      </div>
      <div className="flex items-center max-w-lg mx-auto mt-10">
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            id="voice-search"
            className="border border-gray-300 text-black text-sm rounded-lg 
             block w-full ps-10 p-2.5  dark:bg-black dark:border-black dark:placeholder-gray-400 dark:text-white" placeholder="Enter Task"
            required=""
          />
        </div>
        <button
          onClick={handelAdd}
          type="submit"
          className="inline-flex items-center py-2.5  px-5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-black "
        >
          AddTodo
        </button>
        <button
          onClick={delAll}
          className="inline-flex items-center py-2.5  px-5 ms-2 text-sm font-medium text-white bg-red-700 rounded-lg border border-black "
        >
          DeleteAll
        </button>
      </div>

      <div className="flex items-center max-w-lg mx-auto mt-10">
        <ul className="max-w-md space-y-1 text-black list-disc list-inside dark:text-black">
          {todos.map((v, i) => <li>{v.value}   <button
            onClick={() => deltodo(i)}
            className="inline-flex items-center py-2  px-7 ms-2 text-sm font-small text-white bg-red-700 rounded-lg border border-black "
          >
            Del
          </button></li>)}
        </ul>
      </div>




    </>
  )
}

export default App
