
  
import logo from './logo.svg';
import './App.css';
import Navbars from './components/Navbars';
import Main from './components/Main';
import Section from './components/section';



function App() {

  return (
    <div className=' w-full'>
      <div className=' min-h-[100vh]'>
      <Navbars/>
      </div>
      <div className=' min-h-[100vh]' >
      <Main/>
      </div>
      <div className='min-h-[100vh]'>
        <Section/>
      </div>
      
    </div>
  


  
  )
}

export default App;

  