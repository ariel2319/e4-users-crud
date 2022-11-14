import React, { useState } from 'react';
import { Modal, ModalHeader } from 'reactstrap';
import UsersForm from './UsersForm';

const SelectModal = ({  usersList,    getUserList, user }) => {

  const [selectIsOpen, setSelectIsOpen] = useState(false)

  /* const selectBtn = (selectUser) => {
    selectUser(user); 
    setSelectIsOpen(!selectIsOpen);
  }
 */
  return (
    <div>

      {/* <button className='btn select-btn' onClick={() => selectUser(user), () => setSelectIsOpen(!selectIsOpen)}>
        <i className="fa-solid fa-user-pen"></i>
  </button> */}

      <button className='btn select-btn' onClick={()=>setSelectIsOpen(!selectIsOpen)}>

        <i className="fa-solid fa-user-pen"></i>

      </button> 


      <Modal isOpen={selectIsOpen}>

        <ModalHeader>
          Edit User
        </ModalHeader>
        <div className='lineModal' ></div>
        <UsersForm
          usersList={usersList}
          userSelected={user}
          getUserList={getUserList}
        />


        <button className='btn form-btn' onClick={() => setSelectIsOpen(false)}> Cerrar </button>

      </Modal>
    </div>
  );
};

export default SelectModal;