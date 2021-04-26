import React from 'react';
import { useParams } from 'react-router-dom';

function User({users}) {
   const { id } = useParams();
    return (
        <div className='container'>
            <div>
            {users.filter(user => user.id === Number(id)).map((user, index) => (
                <ul key={index}>
                    <li className='dashed'><b>Name: {user.name}</b></li>
                    <li className='dashed'><b>Username: {user.username}</b></li>
                    <li className='dashed'><b>Email: {user.email}</b></li>
                    <li className='dashed'><b>Phone: {user.phone}</b></li>
                    <li className='dashed'><b>Company: {user.company.name}</b></li>
                    <li className='dashed'><b>Website: {user.website}</b></li>
                    <li className='dashed'><b>Address:</b>
                        <ul className="list"> 
                            <li><b>Street: {user.address.street}</b></li>
                            <li><b>Suite: {user.address.suite}</b></li>
                            <li><b>City: {user.address.city}</b></li>
                            <li><b>Zipcode: {user.address.zipcode}</b></li>
                        </ul>
                    </li>
                </ul>
            ))}
            </div>
        </div>
    )
}

export default User
