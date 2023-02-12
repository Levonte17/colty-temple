import React from 'react'
import { useState } from 'react';

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
  <h1> 
    Saturday, March 4
  </h1>
<p>
  Deacon Appreciation Day
  <br/>
  Start Time: 7:30pm
</p>
  <h1> 
    Saturday, March 8 - 9
  </h1>
<p>
  Beaufort Church Spring Revival (In House)
  <br/>
  Start Time: 7:30pm
</p>

  <h1> 
    Saturday, March 18
  </h1>
<p>
  Family And Friends Night
  <br/>
  Start Time: 7:30pm
</p>

  <h1> 
    Saturday, March 22 - 25
  </h1>
<p>
  Biship 21st Anniversary
  <br/>
  Start Time: 7:30pm
</p>

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
