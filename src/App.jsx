import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './assets/pages/Login'
import CreateCustomer from './assets/pages/CreateCustomer'
import Home from './assets/pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> }/>
      <Route path="/createUser" element={ <CreateCustomer />}/>
      <Route path="/home" element={ <Home /> }/>
    </Routes>
  )
}

export default App
