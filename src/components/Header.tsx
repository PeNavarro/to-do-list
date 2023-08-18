import logo from '../assets/logo.svg'
import { TaskInput } from './TaskInput'

export function Header(){
      return(
            <header className='py-20 bg-grey700 w-full relative'>
                  <img src={logo} alt="Logo To Do List" className='mx-auto' />
                  <div className="w-full absolute translate-y-1/2 bottom-0">
                        <TaskInput />
                  </div>
                  
            </header>
      )
}