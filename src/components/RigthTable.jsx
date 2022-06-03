import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import classes from './RigthTable.module.css';
import DogDisplay from "./DogDisplay";
const TABLESIZE=100;
const COLCOUNT=5;
const RigthTable=props=>{
    const dispatch=useDispatch();
    const breeds=useSelector(state=>state.breeds);
    const activeDogs=useSelector(state=>state.activeDogs)
    const displayBreedArr=[];
    useEffect(()=>{
        if(breeds.length){
            const breedPromise=[];
            for(let i=0;i<TABLESIZE;i++){
                const index=Math.floor(Math.random()*breeds.length);
                const breed=breeds[index];
                displayBreedArr.push(breed)
                breedPromise.push(fetch(`https://dog.ceo/api/breed/${breed}/images/random`))
            }
            Promise.all(breedPromise)
            .then(res=>Promise.all(res.map(r=>r.json())))
             .then(data=>dispatch({type:'initActiveDogs',payload:data.map((dog,index)=>{return {url:dog.message,breed:displayBreedArr[index],likes:0,index:index}})}))
        }
       
    },[breeds])
    const dogTable=[];
    for(let i=0;i<activeDogs.length;i+=COLCOUNT){
        const dogRow=[];
        for(let j=i;j<(i+COLCOUNT);j++){
            dogRow.push(<DogDisplay key={activeDogs[j].index} {...activeDogs[j]}/>)
        }
        dogTable.push(<tr key={i}>{dogRow}</tr>)
    }
    return(
        <table className={classes.dogcontainer}>
            <tbody>
              {dogTable}
            </tbody>
           
        </table>
    )
}

export default RigthTable;

