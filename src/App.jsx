import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './assets/pages/Login'
import CreateCustomer from './assets/pages/CreateCustomer'

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> }/>
      <Route path="/createUser" element={ <CreateCustomer />}/>
    </Routes>
  )
}

export default App
