import { Header } from './components/Header'
import { TasksBox } from './components/TasksBox'
import { TaskInput } from './components/TaskInput'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

interface Tasks{
  id: string,
  toDo: string,
  isDone: boolean
}

const tasks: Tasks[] = [
  {
        id: uuidv4(),
        toDo: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
        isDone: false
  },
  {
        id: uuidv4(),
        toDo: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
        isDone: false
  },
  {
        id: uuidv4(),
        toDo: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
        isDone: true
  },
]

function App() {
  const [newTaskList, setNewTaskList] = useState<Tasks[]>(tasks)

  function handleCreateTask(newToDo: string){
    const newTask: Tasks = {
      id: uuidv4(),
      toDo: newToDo,
      isDone: false
    }

    setNewTaskList([...newTaskList, newTask])
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto relative">
        <div className="w-full absolute -translate-y-1/2 top-0 left-0 right-0 px-40">
          <TaskInput onCreateTask={handleCreateTask} />
        </div>
        <TasksBox tasks={newTaskList} />
      </div>
    </div>
  )
}

export default App
