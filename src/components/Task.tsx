import trashIcon from '../assets/trashIcon.svg'
import checkIcon from '../assets/checkIcon.svg'

interface Tasks{
      id: string,
      toDo: string,
      isDone: boolean,
      onCompleteTask: (taskId: string) => void
      onDeleteTask: (taskId: string) => void
}



export function Task({id, toDo, isDone, onCompleteTask, onDeleteTask}: Tasks){
      function handleCompleteTask(){
            onCompleteTask(id)
      }

      function handleDeleteTask(){
            onDeleteTask(id)
      }

      return(
            <div className="bg-grey500 p-4 flex gap-3 w-full">
                  <button 
                        className={`${isDone ? 'bg-blue' : ''} w-5 h-5 rounded-full border-blue border-[3px]`}
                        onClick={handleCompleteTask}
                  >   
                        <img src={checkIcon} alt="Concluído" className={`hidden ${isDone ? '!block' : ''} mx-auto`} />
                  </button>
                  {isDone ? 
                        <del className="text-grey300 flex-grow">
                              <p className="text-grey300 text-sm">{toDo}</p>
                        </del>
                  :
                        <p className="text-grey100 text-sm flex-grow">{toDo}</p>
                  }
                  <button onClick={handleDeleteTask}>
                        <img src={trashIcon} alt="Excluir" />
                  </button>
            </div>
      )
}