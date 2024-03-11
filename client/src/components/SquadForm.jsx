import React, {useState} from "react"


function SquadForm({addSquad}){

   const [name, setName] = useState("")
   const [description, setDescription] = useState("")
   const [image, setImage] = useState("")
   
   // THIS NEEDS TO BE TURNED INTO A POST TO THE BACKEND
   function handleForm(e){
      e.preventDefault()
      let newSquad = {
         name: name,
         description: description,
         image: image
      }
      addSquad(newSquad)
      setName("")
      setImage("")
      setDescription("")
   }

   return (
      <div className="formContainer">
         <h2>Add A New Squad</h2>
         <form className="squadForm" onSubmit={handleForm}>
            <div>
               <label>Name: </label>
               <br />
               <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
               <label>Image URL: </label>
            <br />
               <input type="text" id="image" value={image}  onChange={(e)=>setImage(e.target.value)} />
            </div>
            <div>
               <label>Description: </label>
            <br />
               <input type="text" id="description" value={description} onChange={(e)=>setDescription(e.target.value)} />
            </div>
            <div>
               <button type="submit">Submit</button>
            </div>
         </form>
      </div>
   )  
}


export default SquadForm;