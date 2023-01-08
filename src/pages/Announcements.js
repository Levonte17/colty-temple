import React from 'react'

function Announcements(props) {
      const loaded = () => {
        return props.announcement.map(announcements => (
          <div className='announcements' key={announcements._id}>
            <h1>
              {announcements.church}
              {announcements.date}
            </h1>
          </div>
        ));
      };
      const loading = () => {
        return <h1>Loading...</h1>;
      };
      return(
        <section className='addannoun'>
          { props.people ? loaded() : loading() }
          <form>
            <label>
              Church Name:
              <br/>
              <input type="text" 
                name='church'
                placeholder='Your Church Name'
                />
            </label>
            <br/>
            <label>
              Event Date:
              <br/>
              <input type='date' 
                name='date'
                placeholder='Your Church Name'
                />
                </label>
                <br/>
                <label>
              Type:
              <br/>
              <input type='' 
                name='type'
                placeholder='Church Event Type'
                />
                </label>
                <br/>
            <label>
              Event Description
              <br/>
              <input className='text' type="text" 
                name='description'
                placeholder='Event Details Here'
                />
                </label>
                <br/>
            <label>
              Flyer
              <br/>
              <input type="file" 
                name='flyer'
                placeholder='Event Details Here'
                />
                </label>
                <br/>
                <br/>
                <input type="submit" 
                value='submit'
                />
            <br/>
            <br/>
          </form>
        </section>
      )
}

export default Announcements;
