import { Header } from './components/Header'
import { TasksBox } from './components/TasksBox'

function App() {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <TasksBox />
      </div>
    </div>
  )
}

export default App
