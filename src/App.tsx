import { Header } from './components/Header'
import { TasksBox } from './components/TasksBox'
import { TaskInput } from './components/TaskInput'
import { useState } from 'react'

function App() {
  const [newToDo, setNewToDo] = useState('')

  function handleCreateTask(newToDo: string){
    setNewToDo(newToDo)
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto relative">
        <div className="w-full absolute -translate-y-1/2 top-0 left-0 right-0 px-40">
          <TaskInput onCreateTask={handleCreateTask} />
        </div>
        <TasksBox onCreateTask={newToDo}/>
      </div>
    </div>
  )
}

export default App
