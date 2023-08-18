import { TasksCounter } from './TasksCounter'
import { TasksList } from './TasksList'

export function TasksBox(){
      return(
            <div className="flex flex-col gap-6 mt-24">
                  <TasksCounter />
                  <TasksList />
            </div>
      )
}