import trashIcon from '../assets/trashIcon.svg'

interface Tasks{
      toDo: string,
      isDone: boolean
}

export function Task({toDo, isDone}: Tasks){
      return(
            <div className="bg-grey500 p-4 flex gap-3 w-full">
                  <button 
                        className="w-5 h-5 rounded-full border-blue border-[3px]"
                  >   
                  </button>
                  {isDone ? 
                        <del className="text-grey300 flex-grow">
                              <p className="text-grey300 text-sm">{toDo}</p>
                        </del>
                  :
                        <p className="text-grey100 text-sm flex-grow">{toDo}</p>
                  }
                  <button>
                        <img src={trashIcon} alt="Excluir" />
                  </button>
            </div>
      )
}