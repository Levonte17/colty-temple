import {useState} from 'react';
import { Link } from 'react-router-dom';

function Announcements(props) {
    const [ newForm, setNewForm ] = useState({
        church: '',
        date: '',
        time: '',
        event: '',
        createdAt: '',

    });


    const loaded = () => {
        return props.announcements.map(event => (
            <div className="event" key={event._id}>

                <h1>
                    <Link to={`/announcements/${event._id}`} className="showlink">
                        {event.name}
                        <br/>
                        {event.date}
                    </Link>
                </h1>
            </div>
        ));
    };

const loading = () => {
    return <h1>loading...</h1>;
    
};

const handleChange = (e) => {
    setNewForm({
        ...newForm,
        [e.target.church]: e.target.value
    });
};
const handleSubmit = (e) => {
    e.preventDefault();
    if(!newForm.church) delete newForm.church
    props.createAnnouncements(newForm);
    setNewForm({
        church: '',
        date: '',
        time: '',
        event: '',
    });
};
return(
    
<div className='pbg'>
    <div className='announ'>
    <section>
        { props.workout ? loaded() : loading() }
        <form onSubmit={handleSubmit}>
            <label> Church:
                <br/>
                <input type="text" 
                value={newForm.church}
                onChange={handleChange}
                placeholder="Name Of Church"
                name="church" 
                />
            </label>
            <br/><br/>
            <label> Date:
                <br/>
                <input type="text" 
                value={newForm.date}
                onChange={handleChange}
                placeholder="Event Date"
                name="date" 
                />
            </label>
                <br/><br/>
            <label> Time:
                <br/>
                <input type="text" 
                value={newForm.time}
                onChange={handleChange}
                placeholder="Event Time"
                name="time" 
                />
            </label>
                <br/><br/>
            <label> Event:
            <br/>
                <input type="text" 
                value={newForm.event}
                onChange={handleChange}
                placeholder="Describe This Event"
                name="event" 
                />

            </label>
                <br/>
                <br/>
                <input type="submit" 
                    value="Submit" 
                    className='submit' 
                />
        </form>
    </section>
    </div>
</div>
    );
};
export default Announcements;