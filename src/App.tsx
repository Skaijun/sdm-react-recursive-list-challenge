
import './App.css'
import Topics from './components/Topics.tsx'
import { topics } from "../data/topics.ts"

function App() {
  console.log(topics)
  return (
    <>
      <h1>Recursive List Challenge</h1>
      <Topics topics={topics} />
    </>
  )
}

export default App
