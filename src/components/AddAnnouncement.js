import React from 'react'

function AddAnnouncement(props) {
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
              Church:
              <input type="text" 
                name='church'
                />
            </label>
          </form>
        </section>
      )
}

export default AddAnnouncement;
