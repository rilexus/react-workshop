import React, {useEffect, useState} from 'react';
import {fetchUsers} from "./fetchUsers";

const FetchUserListSolution = ({children, authToken}) => {
  const [us, setUsers] = useState([])

  useEffect(() => {
    fetchUsers().then((users) => {
      setUsers(users)
    })
  }, [])
  return children(us)
};
export const UsersList = () => {
  return (
    <FetchUserListSolution authToken={'usersAuthToken'}>
      {(users) => {
        return <ul>
          {users.map((user) => {
            return <li key={user.id}>{user.first_name}</li>
          })}
        </ul>
      }}
    </FetchUserListSolution>
  )
}