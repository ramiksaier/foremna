import React from 'react'
import Moviecard from './Component/Moviecard'
import {useState,useEffect} from 'react'

const MovieList = () => {
    const [person, setPerson] = useState([{nom:"",prenom:"",age:""}])
  
        
    
    const Ajoutperson=(nom,prenom,age)=>{
        setPerson([...person,{nom,prenom,age}])
    }
    return (
        <div>

           <Moviecard Ajoutperson={Ajoutperson}/> 
           <ul>
           {person.map((e,i)=>(
              <div>
           <h1>{e.nom}</h1>
           <h2>{e.prenom}</h2>
           <h3>{e.age}</h3>
           </div>))}
</ul>
        </div>
    )
}

export default MovieList
