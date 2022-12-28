import { useState, useEffect,  } from 'react';
import { Routes, Route } from 'react-router-dom';
///////PAGES//////////////////////////////////////////
import Hours from '../pages/Hours';
import Announcements from '../pages/Announcements';
import ShowAnnouncements from '../pages/ShowAnnouncements';
import Homepage from '../pages/Homepage';

function Main(props) {

    const [announcements, setAnnouncements] = useState(null);
    const API_URL = 'http://localhost:4003/api/announcements/';
    //const API_URL = 'https://dih-api.adaptable.app/api/announcement';

const getData = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setAnnouncements(data);
    } catch (error) {
        console.log(error)
    }
}

const createAnnouncements = async (person) => {
    try {
        await fetch(API_URL, {
            method: 'POST',
            headers:{
                'content-type': 'Application/json'
            }, 
            body: JSON.stringify(person)
    }); 
    getData();

    } catch (error) {
        
    }
}

const deletePeople = async (id) => {
    try {
        await fetch(API_URL + id, {
            method: 'DELETE'
        });
        getData();
    } catch (error) {
        console.log(error);
      
    }
}

const updateAnnouncements = async (updatedAnnouncements, id) => {
    try {
        await fetch(API_URL + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(updatedAnnouncements)
        });
        
        getData();

    } catch (error) {
        console.log(error)
        // TODO: add additional logic to alert a user 
        // in case something goes wrong
    }
}


useEffect(() => {
    getData();
}, []);


    return(

<main>

<Routes>
    <Route path="/" element={
        <Homepage 
             
        />
    } />
    
    <Route path="/hours" element={
        <Hours 
             
        />
    } />
    
    <Route path="/announcements" element={
        <Announcements            
            announcements={announcements} 
            createAnnouncements={createAnnouncements} 
        />
    } />
    
    <Route path="/announcements/:id" element={
        <ShowAnnouncements 
            announcements={announcements}
            deletePeople={deletePeople}
            updateAnnouncements={updateAnnouncements} 
        />
    } />
</Routes>
</main>

    )
};

export default Main;