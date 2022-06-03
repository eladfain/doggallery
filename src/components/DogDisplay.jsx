import classes from './DogDisplay.module.css';
import { useDispatch } from 'react-redux';
const DogDisplay=props=>{
    const dispatch=useDispatch();
    const dogClickHandler=()=>{
        dispatch({type:'like',payload:props.index})
    }
    return(
        <td onClick={dogClickHandler} className={classes.dogContainer}>
            <span className={classes.likes}>likes:{props.likes}</span>
            <img className={classes.dogpic} src={props.url}/>
        </td>
    )
}

export default DogDisplay;