import React,{useState} from 'react'

const Moviecard = ({Ajoutperson}) => {
    const [nom, setNom] = useState("")
    const [prenom, setprenom] = useState("")
    const [age, setAge] = useState(20)
 const handelsubmit=(e)=>{
     e.preventDefault();
     
     Ajoutperson(nom,prenom,age)
     setNom('')
     setprenom('')
     setAge('')

 }

    return (
        <form onSubmit ={handelsubmit}>
           <input placeholder="nom ..."  value={nom} onChange={(e)=>setNom(e.target.value)}></input> 
           <input placeholder="prenom..." value={prenom} onChange={(e)=>setprenom(e.target.value)}></input>
           <input placeholder="age..." value={age}onChange={(e)=>setAge(e.target.value)} ></input>
           <button onClick={()=>(Ajoutperson)}>add</button>
</form> 

)
}

export default Moviecard
