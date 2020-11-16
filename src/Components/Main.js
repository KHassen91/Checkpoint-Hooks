import React from 'react'
import Cards from './Cards'

const Main = (props) => {
    return (
        <div style={{display:"flex" , flexWrap:"wrap" , justifyContent:"center" , marginTop:20}}>
            {props.Movies.filter(el=>el.rate>=props.Rate && el.title.toUpperCase().includes(props.Title.toUpperCase())).map(el=> <Cards Movie={el}/>)}
        </div>
    );
}

export default Main;