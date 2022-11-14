import React from 'react';

const UsersList = ({ usersList, selectUser, deleteUser }) => {
  return (
    <>
      <h1 style={{textAlign: "center"}}>Usuarios</h1>
      <ul>
        {
          usersList.map((user) => (
            <li key={user.id} className='card-container'>
              <h3> <b> {user.last_name}, {user.first_name}</b></h3>
              <hr />
              <div className='info-container'>
                
                <div className='info-target'>
                  <div><b>Email:</b> {user.email}</div>
                  <div> <b> Birthday:</b> {user.birthday}</div>
                </div>



                <div className='info-btn'>
                  <button className='btn select-btn' onClick={() => selectUser(user)}>
                    ✔️
                  </button>

                  <button className='btn delete-btn' onClick={() => deleteUser(user.id)}>
                    ❌
                  </button>
                </div>



              </div>
            </li>
          ))
        }
      </ul>
    </>
  );
};

export default UsersList;