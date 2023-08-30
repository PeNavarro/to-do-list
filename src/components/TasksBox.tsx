import { TasksCounter } from './TasksCounter'
import { Task } from './Task'
import listIcon from '../assets/listIcon.png'

interface Task{
      id: string,
      toDo: string,
      isDone: boolean
}

interface Tasks{
      tasks: Task[]
}

export function TasksBox({tasks}: Tasks){
      return(
            <div className="flex flex-col gap-6 pt-24">
                  <TasksCounter />
                  <div className='mt-16 flex flex-col items-center'>
                        {tasks.length > 0 ?     
                              tasks.map((task: Task) => (
                                    <Task
                                          key={task.id}
                                          toDo={task.toDo}
                                          isDone={task.isDone}
                                    />
                              ))
                        :
                              <div>
                                    <img src={listIcon} alt="Icone de Lista" />
                                    <p className='text-grey300 font-bold mt-4'>Você ainda não tem tarefas cadastradas</p>
                                    <p className='text-grey300'>Crie tarefas e organize seus itens a fazer</p> 
                              </div>
                        }
                        
                  </div>
            </div>
      )
}