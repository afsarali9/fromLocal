import './App.css'
import MyAge from './components/MyAge'
import MyName from './components/MyName'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyName />
      <MyAge />
    </>
  )
}

export default App
