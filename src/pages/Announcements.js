import React from 'react'
import { useState } from 'react';
import one from '../assets/one.png';
import two from '../assets/two.png';

function Announcements(props) {

    const [ newForm, setNewForm ] = useState({
        name: '',
        date:'',
        type:'',
        desciption:'',
        file:'',
    });

      const loaded = () => {
        return props.announcement.map(announcements => (
          <div className='announcements' key={announcements._id}>
            <h1>
              {announcements.name}
              {announcements.date}
            </h1>
          </div>
        ));
      };
      const loading = () => {
        return (
<div className='announcements'>
<img 
            src={one} 
            alt='mori'
            className="pimg"
            />
        <img 
            src={two} 
            alt='mori'
            className="pimg"
          />

</div>        )
      };

      const handleChange = (e) => {
        setNewForm({
            ...newForm,
            [e.target.name]: e.target.value
        });
      };


      const handleSubmit = () => {

      };

      return(
        <section className='addannoun'>
          { props.announcement ? loaded() : loading() }
          <form>
            <label>
              Church Name:
              <br/>
              <input type="text" 
                placeholder='Your Church Name'
                value={newForm.name}
                onChange={handleChange}
                name='name'
                 />
            </label>
            <br/>
            <label>
              Event Date:
              <br/>
              <input type='date' 
                placeholder='Your Church Name'
                value={newForm.date}
                onChange={handleChange}
                name='date'
                 />
                </label>
                <br/>
                <label>
              Type:
              <br/>
              <input type='text' 
                placeholder='Church Event Type'
                value={newForm.type}
                onChange={handleChange}
                name='type'
                 />
                </label>
                <br/>
            <label>
              Event Description:
              <br/>
              <input className='text' type="text" 
                placeholder='Event Details Here'
                value={newForm.desciption}
                onChange={handleChange}
                name='description'
                 />
                </label>
                <br/>
                <br/>
                <br/>
                <input type="submit" 
                value='submit'
                onChange={handleSubmit}

                />
            <br/>
            <br/>
          </form>
        </section>
      )
}

export default Announcements;
