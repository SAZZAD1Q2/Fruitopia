import React, { useState } from 'react'

const Form = () => {
      const [name, setName] = useState({firstName: "", lastName: ""});
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name)
      }
    
  return (
    <div>
      {name.firstName} - {name.lastName}
      <form>
            <input type='text' onChange={(e) => {setName({...name, firstName: e.target.value})}} value={name.firstName}/>
            <input type='text' onChange={(e) => {setName({...name,lastName: e.target.value})}} value={name.lastName} />
            <button onClick={(e) => handleSubmit(e)}>Add</button>
      </form>
    </div>
  )
}

export default Form
