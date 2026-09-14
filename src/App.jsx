import {useState} from 'react'
import './App.css'

function App() {
  const [todoList, setTodoList] = useState([])
  const [todoInputText, setTodoInputText] = useState('')

  const handleInputText = (e) => {
    setTodoInputText(e.target.value)
  }

  const addTodoList = (e) => {
    e.preventDefault()
    setTodoList([todoInputText, ...todoList])
    setTodoInputText('')
  }

  const removeTodo = (indexToDelete) => {
    const updateArray = todoList.filter((todo, index) => {
      if (index != indexToDelete){
        return todo
      }
    })
    setTodoList(updateArray)
  }

  return (
  <div className="min-h-screen bg-gray-100 px-4 py-10">
    <div className="mx-auto max-w-xl">

      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
        This is App
      </h1>

      <form onSubmit={addTodoList}>
        <div className="flex w-full justify-center gap-3">
          <input
            type="text"
            name="query"
            placeholder="Enter your Todo"
            onChange={handleInputText}
            className="flex-1 rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            value={todoInputText}
          />

          <button
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      </form>

      <div className="mt-6 space-y-3">
        {todoList.map((todo, index) => {
          return (
            <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-md">
              <div>
                <p className="text-lg text-gray-700">
                  {todo}
                </p>
              </div>

              <button
                onClick={() => {
                  removeTodo(index)
                }}
                className="rounded-lg bg-red-500 px-4 py-2 font-medium text-white transition hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          )
        })}
      </div>

    </div>
  </div>
)

}

export default App;