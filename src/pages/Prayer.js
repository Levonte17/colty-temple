import React from 'react'
import { useState } from 'react'


function Prayer(props) {
    const [ newForm, setNewForm ] = useState ({
        church:'',
        number:'',
        email:'',
        message:'',
    });
    
const loaded = () => {
    return props announcements.map(event => (
        <div> className=</div>
    ))
}

  return (
    <section className='pray'>
      <form>
        <label>
            Name: 
        </label>
        <input type="text"
                name='name'
                value={newForm.name}
                onchange={handleChange}
                placeholder="Enter Your Name"
        />
      </form>
    </section>
  )
}

export default Prayer
