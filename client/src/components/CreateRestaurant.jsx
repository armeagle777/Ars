import React,{useState} from 'react'

export default function CreateRestaurant() {
const [nameInputValue, setNameInputValue] = useState('')
const [descInputValue, setDescInputValue] = useState('')

const createRestaurantSubmit = async(ev) =>{
    ev.preventDefault()
    if(nameInputValue && descInputValue){
        try{
            const newRest = {name:nameInputValue,description:descInputValue }
            console.log(newRest );
            fetch(`http://localhost:9000/restaurants`,{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body:JSON.stringify(newRest)
            }).then(res => res.json()).then( data => console.log(data))
        
        }catch(err){
            console.log(err);
        }
    }
    
}
  return (    
    <form onSubmit={createRestaurantSubmit}>
        <input type="text" value={nameInputValue}  onChange={(e)=>setNameInputValue(e.target.value)}/>
        <input type="text" value = {descInputValue} onChange={(e)=>setDescInputValue(e.target.value)} />
        <button type='submit'>Add</button>
    </form>
  )
}
