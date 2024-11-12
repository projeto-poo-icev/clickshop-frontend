import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import CreateCustomer from './pages/CreateCustomer'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> }/>
      <Route path="/createUser" element={ <CreateCustomer />}/>
      <Route path="/home/*" element={ <Home /> }/>
    </Routes>
  )
}

export default App
