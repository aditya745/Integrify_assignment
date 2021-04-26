import React from 'react';
import { Link } from 'react-router-dom';

function Users(props) {
    const renderUser = (user) => {
        let initials = user.name.charAt(0); 
        return (
            <div className='grid' key={user.id}>
                <div className='article'>
                <div className='profileImage'>{initials}</div>
                <div className='text'>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <a href={user.website}>{user.website}</a>
                    <br></br>
                    <br></br>
                    <Link className='button' to={`/${user.id}`}><span>MORE DETAILS</span></Link>
                </div>
                </div>
            </div>
        )
    }
    return (
            <div className='grid'>
                {props.users.map(renderUser)}
            </div>
    )
}

export default Users
