
export function TasksCounter(){
      return(
            <div className="flex justify-between">
                  <div className="flex gap-2">
                        <p className="text-blue text-sm font-bold">Tarefas criadas</p>
                        <p className="text-grey200 text-xs font-bold py-0.5 px-2 bg-grey400 rounded-full">0</p>
                  </div>

                  <div className="flex gap-2">
                        <p className="text-purple text-sm font-bold">Concluídas</p>
                        <p className="text-grey200 text-xs font-bold py-0.5 px-2 bg-grey400 rounded-full">0</p>
                  </div>
            </div>
      )
}