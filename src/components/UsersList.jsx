import React from 'react';

const UsersList = ({ usersList, selectUser, deleteUser }) => {
  return (
    <>
      
      <div className="container">
        {
          usersList.map((user) => (

            <>
              <div className="card">
                <div className="face face1">
                  <div className="content">
                    <h3> {user.last_name}, {user.first_name}</h3>
                  </div>
                </div>

                <div className="face face2">
                  <div className="content">
                    <div className='p'><b> Email:</b> {user.email}</div>
                    <div className='p'> <b> Birthday:</b> {user.birthday}</div>

                    <div className='info-btn'>
                      <button className='btn select-btn' onClick={() => selectUser(user)}>

                      <i className="fa-solid fa-user-pen"></i>

                      </button>

                      <button className='btn delete-btn' onClick={() => deleteUser(user.id)}>

                      <i className="fa-solid fa-user-xmark"></i>

                      </button>
                    </div>

                  </div>
                </div>

              </div> {/*CARD  */}



            </>
          ))
        }
      </div>
      {/* <ul>
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
        </ul> */}


    </>
  );
};

export default UsersList;