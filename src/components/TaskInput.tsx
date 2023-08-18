import addIcon from '../assets/addIcon.svg'

export function TaskInput(){
      return (
            <div className="container mx-auto">
                  <form className='flex justify-center gap-2 w-full'>
                        <input 
                              type="text" 
                              name="taskInput" 
                              id="taskInput" 
                              placeholder='Adicione uma nova tarefa'
                              className='bg-grey500 text-grey300 p-4 rounded-lg flex-grow'      
                        />
                        <button 
                              type="submit" 
                              className='bg-blueDark text-grey100 text-sm font-bold flex items-center gap-2 p-4 rounded-lg'
                        >
                              Criar
                              <img src={addIcon} alt="Icone adicionar" />
                        </button>
                  </form>
            </div>
      )
}