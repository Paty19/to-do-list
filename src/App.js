import './App.css';
import image from './night.jpeg';
import imageTwo from './day.jpeg';
import { Diary } from './Diary';



function App() {

  return (
  
    <div className='app'>
   
      <div className='container'>
    <img  src={image} width='200px' alt='shopping'/>
    </div>
    <div className='container'>
<h1>Список дел</h1>
</div>

<Diary/>

<div className='container'>
    <img  src={imageTwo} width='200px' alt='shopping'/>
    </div>
    
    </div>
   
  )
}

export default App;

