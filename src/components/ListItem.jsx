import classes from './ListItem.module.css'
const ListItem=props=>{
    return(
        <div className={classes.breed}><h3>{props.breed}</h3><span className={classes.data}>likes:{props.likes}</span>
    <span className={classes.data}>count:{props.count}</span></div>
    )
}

export default ListItem;