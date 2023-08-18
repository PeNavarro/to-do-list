import listIcon from '../assets/listIcon.png'

export function TasksList(){
      return(
            <div className='mt-16 flex flex-col items-center'>
                  <img src={listIcon} alt="Icone de Lista" />
                  <p className='text-grey300 font-bold mt-4'>Você ainda não tem tarefas cadastradas</p>
                  <p className='text-grey300'>Crie tarefas e organize seus itens a fazer</p> 
            </div>
      )
}