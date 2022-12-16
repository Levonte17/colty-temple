import { Link } from 'react-router-dom';
import { useState } from 'react';

function Index(props) {

    const [ newForm, setNewForm ] = useState({
        name: '',
        title: '',
        createdAt: '',
    });
    
    const loaded = () => {
        return props.people.map(person => (
            <div className="person" key={person._id}>
                <h2>
                    <Link to={`/people/${person._id}`}>
                        {person.name}
                    </Link>
                </h2>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading ...</h1>;
    };

    const handleChange = (e) => {
        setNewForm({
            ...newForm,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!newForm.image) delete newForm.image
        props.createPeople(newForm); // lifting up state
        setNewForm({
            name: '',
            title: '',
        });
    };

    return (
        <section>
                                <br/><br/>
            { props.people ? loaded() : loading() }
            <form onSubmit={handleSubmit}>
                <label>Name:
                <br/>
                    <input 
                        type="text"
                        value={newForm.name} 
                        onChange={handleChange}
                        placeholder="LeVonte Larry"
                        name="name"
                    />
                </label>
                <br/><br/>
                <label>Cut Type:
                <br/>
                    <input 
                        type="text"
                        value={newForm.title} 
                        onChange={handleChange}
                        placeholder="Bald Fade & Face"
                        name="title"
                        />
                </label>
                    <br/><br/>
                <input className="inp" type="submit" value="Finish" />
            </form>
        </section>
    )
    
}

export default Index;