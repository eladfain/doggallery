import { useSelector } from "react-redux";
import classes from './LeftList.module.css';
import ListItem from "./ListItem";
const LeftList=props=>{
    const activeDogs=useSelector(state=>state.activeDogs);
    const dogList=activeDogs.reduce((a,dog)=>{
        if(!a[dog.breed]){
            const dogData={count:1,likes:dog.likes}
            a[dog.breed]=dogData;
        }else{
            a[dog.breed].count=a[dog.breed].count+1;
            a[dog.breed].likes=a[dog.breed].likes+dog.likes;
        }
        return a;
    },{})
    const breeds=Object.keys(dogList);
    const breedsElement=breeds.map(breed=><ListItem breed={breed} likes={dogList[breed].likes} count={dogList[breed].count}/>)
    return(
        <div className={classes.container}>
            {breedsElement}
        </div>
    )
}

export default LeftList;