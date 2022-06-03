import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import RigthTable from './components/RigthTable'
import LeftList from './components/LeftList';
import Header from './components/Header';
function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    fetch('https://dog.ceo/api/breeds/list/all').then(res=>res.json())
    .then(data=>{
      const message=data.message;
      const dogBreeds=Object.keys(message);
      dispatch({type:"initDogs",payload:dogBreeds})    
    })
  }
  ,[])
  return (
    <div className="App">
      <Header/>
      <div className='container'>
      <LeftList/>
      <RigthTable/> 
      </div>
    
    </div>
  );
}

export default App;
