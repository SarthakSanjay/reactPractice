import './App.css'
import Project1 from './components/Project1'
import Project2 from './components/Project2'

function App() {

  return (
    <div className="App">
    <h1 
     // style={{position:"absolute",top:"20px"}}
    >Project 1</h1>
      <Project1 />
      <Project2 />
    </div>
  )
}

export default App
