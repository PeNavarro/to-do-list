import logo from '../assets/logo.svg'

export function Header(){
      return(
            <header className='py-20 bg-grey700 w-full relative'>
                  <img src={logo} alt="Logo To Do List" className='mx-auto' />
            </header>
      )
}