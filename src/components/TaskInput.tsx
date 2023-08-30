import addIcon from '../assets/addIcon.svg'
import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react'

interface CreateTask{
      onCreateTask: (newTask: string) => void
}

export function TaskInput({onCreateTask}: CreateTask){

      const [newTask, setNewTask] = useState('')

      function handleCreateTask(event: FormEvent){
            event.preventDefault()
            onCreateTask(newTask)
            setNewTask('');
      }

      function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
            event.target.setCustomValidity('')
            setNewTask(event.target.value)
      }

      function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
            event.target.setCustomValidity('Opa! Você precisa preencher aqui primeiro')
      }

      return (
            <form method='post' onSubmit={handleCreateTask} className='flex justify-center gap-2 w-full'>
                  <input 
                        type="text" 
                        name="taskInput" 
                        id="taskInput" 
                        placeholder='Adicione uma nova tarefa'
                        className='bg-grey500 text-grey300 p-4 rounded-lg flex-grow' 
                        onChange={handleNewTaskChange}
                        onInvalid={handleNewTaskInvalid}
                        value={newTask}     
                        required
                  />
                  <button 
                        type="submit" 
                        className='bg-blueDark text-grey100 text-sm font-bold flex items-center gap-2 p-4 rounded-lg'
                  >
                        Criar
                        <img src={addIcon} alt="Icone adicionar" />
                  </button>
            </form>
      )
}