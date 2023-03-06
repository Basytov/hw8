import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Card from '../UI/card/Card';


const Users = () => {

    const [users, setUsers]= useState([]);
    const jsonUsers = async ()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
    };
    useEffect(()=>{
     jsonUsers();
    },[])
  return (
    <Card>
        <Userul>
            {users.map((user)=>(
               <ListId key={user.id}>
                <li>{user.name}</li>
                <li>{user.username}</li>
                <li>{user.email}</li>
               
               </ListId>
            ))}
        </Userul>
    </Card>
  )
}

export default Users;

const Userul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;

`;
const ListId = styled.li`
  padding: 10px;
  width: 300px; 
`;
