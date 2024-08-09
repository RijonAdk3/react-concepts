import { useEffect, useState } from 'react';
import './App.css'
import FormComponent from './components/form/FormComponent';
import Navbar from './components/global/Navbar';

// import Navbar from './components/global/Navbar'
// import Footer from './pages/Footer'
// import Home from './pages/Home'
// import Login from './pages/Login'
// import Register from './pages/Register'
// import Welcome from './pages/Welcome'
// import Myvsg from './assets/image/react.svg'
// import Card from './components/Card'
// import Form from './components/form/Form'

function App() {
  const [value, setValue] = useState(0);

  const add = () => {
    setValue(value+1);
  }


  // dependency is value here if dependency is changed then it is called
  // if dependency is empty then it is called after load
  useEffect(()=>{
    console.log("I am here");

  },[value]);


  return (
    <>
      {/* <Navbar title="Navbar-compo"/>
      <Home/>
      <Welcome/>
      <Footer/>
      <Login/>
      <Register/>
      <Card
        path={Myvsg}
        title="React Logo"
        descriptionPlaceholder="Description"
      />
      <Form placeholder='enter name'/> */}

      {/* <button className='p-2 px-4 bg-blue-50' onClick={add}>Add</button>
      <br/>
      <span>value = {value}</span> */}

      <Navbar/>

      <FormComponent title='login' type='login' btnText='login'/>
      <FormComponent title='Sign In' type='register' btnText='Register'/>

    </>
    
  )
}

export default App
