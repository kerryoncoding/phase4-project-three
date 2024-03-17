import React, {useState} from "react"


function SquadForm({addSquad}){

   const [name, setName] = useState("")
   const [description, setDescription] = useState("")
   const [image, setImage] = useState("")
   
   function handleSubmit(e) {
      e.preventDefault();
      let newSquad={
            name: name,
            image: image,
            description: description,
         }
         addSquad(newSquad)
         setName("")
         setImage("")
         setDescription("")
   }


   return (
      <div className="formContainer">
         <h2>Add A New Squad</h2>
         <form className="squadForm" onSubmit={handleSubmit}>
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