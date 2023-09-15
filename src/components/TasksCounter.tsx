interface Task{
      id: string,
      toDo: string,
      isDone: boolean
}

interface Tasks{
      tasks: Task[],
}

export function TasksCounter(tasks: Tasks){
      const tasksCompletedLength = tasks.tasks.filter((task) => {
            return task.isDone == true
      }).length

      return(
            <div className="flex flex-col gap-4 items-start md:justify-between md:flex-row md:items-center">
                  <div className="flex gap-2">
                        <p className="text-blue text-sm font-bold">Tarefas criadas</p>
                        <p className="text-grey200 text-xs font-bold py-0.5 px-2 bg-grey400 rounded-full">{tasks.tasks.length}</p>
                  </div>

                  <div className="flex gap-2">
                        <p className="text-purple text-sm font-bold">Concluídas</p>
                        <p className="text-grey200 text-xs font-bold py-0.5 px-2 bg-grey400 rounded-full">
                              {tasksCompletedLength} de {tasks.tasks.length}
                        </p>
                  </div>
            </div>
      )
}