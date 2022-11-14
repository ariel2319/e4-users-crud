import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react'
import UsersForm from './components/UsersForm'
import './style.css'
import UsersList from './components/UsersList'
import DigitalClock from './components/DigitalClock'
import AddModal from './components/AddModal';

function App() {

  const [usersList, setUsersList] = useState([])

  const [userSelected, setUserSelected] = useState(null)

  useEffect(() => {
    axios
      .get(`https://users-crud1.herokuapp.com/users/`)
      .then(res => setUsersList(res.data))
  }, [])



  const getUserList = () => {
    /* alert("leyendo...") */
    axios
      .get(`https://users-crud1.herokuapp.com/users/`)
      .then(res => setUsersList(res.data))
  }

  const selectUser = (user) => {
    /* alert("seleccionando....") */
    setUserSelected(user)
  }
  const deselectUser = () => setUserSelected(null)

  const deleteUser = (id) => {
    /* alert("eliminando...") */
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUserList())
      .catch(error => console.log(error.response?.id))
  }

  //console.log("usersList", usersList)
  return (
    <div className="App">
      <div className='title'>
        <h1 style={{ textAlign: "left", fontWeight: "600" }}> Users </h1>
        {/* <button className='btn add-btn' onClick={toggleModal()}>
          <i className="fa-solid fa-user-plus"></i>
        </button> */}
        <AddModal
          getUserList={getUserList}
          userSelected={userSelected}
          deselectUser={deselectUser}
        />
        
      </div>
      <div className='line'></div>
      {/* <DigitalClock/> */}

     {/*  <UsersForm
        getUserList={getUserList}
        userSelected={userSelected}
        deselectUser={deselectUser}
      /> */}


      <UsersList
        usersList={usersList}
        selectUser={selectUser}
        deleteUser={deleteUser}
      />


    </div>
  )
}

export default App
