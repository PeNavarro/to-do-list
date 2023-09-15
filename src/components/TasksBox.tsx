import { useState, useEffect } from 'react'
import { TasksCounter } from './TasksCounter'
import { Task } from './Task'
import listIcon from '../assets/listIcon.png'
import { v4 as uuidv4 } from 'uuid';

interface Task{
      id: string,
      toDo: string,
      isDone: boolean
}

interface Tasks{
      onCreateTask: string
}

export function TasksBox({onCreateTask}: Tasks){
      const [newTaskList, setNewTaskList] = useState<Task[]>([])

      useEffect(() => {
            if(onCreateTask != ''){
                  handleCreateTask(onCreateTask)
            }
      }, [onCreateTask])

      function handleCreateTask(newToDo: string){
            const newTask: Task = {
              id: uuidv4(),
              toDo: newToDo,
              isDone: false
            }
        
            setNewTaskList([...newTaskList, newTask])
      }

      function handleOnCompleteTask(taskId: string){
            const taskArray = newTaskList
        
            const taskListWithCompletedOne = taskArray.filter((taskToComplete, taskIndex) => {
            
              if(taskToComplete.id == taskId){
                taskArray[taskIndex].isDone = ! taskArray[taskIndex].isDone
              }
        
              return taskArray
            })
        
            setNewTaskList(taskListWithCompletedOne)
          }

      function handleOnDeleteTask(taskId: string){
            const taskArray = newTaskList

            const taskListWithoutDeletedOne = taskArray.filter(taskToDelete => {
                  return taskToDelete.id != taskId
            })

            setNewTaskList(taskListWithoutDeletedOne)
      }

      return(
            <div className="flex flex-col gap-6 pt-24">
                  <TasksCounter tasks={newTaskList} />
                  <div className='mt-16 flex flex-col items-center'>
                        {newTaskList.length > 0 ?     
                              newTaskList.map((task: Task) => (
                                    <Task
                                          key={task.id}
                                          id={task.id}
                                          toDo={task.toDo}
                                          isDone={task.isDone}
                                          onCompleteTask={handleOnCompleteTask}
                                          onDeleteTask={handleOnDeleteTask}
                                    />
                              ))
                        :
                              <div>
                                    <img src={listIcon} alt="Icone de Lista" className='mx-auto' />
                                    <p className='text-grey300 font-bold mt-4'>Você ainda não tem tarefas cadastradas</p>
                                    <p className='text-grey300'>Crie tarefas e organize seus itens a fazer</p> 
                              </div>
                        }
                        
                  </div>
            </div>
      )
}