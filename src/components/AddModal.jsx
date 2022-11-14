import React, { useState } from 'react';
import { Modal, ModalHeader } from 'reactstrap';
import UsersForm from './UsersForm';

const AddModal = ({ getUserList, userSelected, deselectUser }) => {

  
  const [modalIsOpen, setModalIsOpen] = useState(false)


  return (
    <div>
      <div className='page-container'>
        <button className='btn add-btn' onClick={() => setModalIsOpen(!modalIsOpen)} >
          <i className="fa-solid fa-user-plus"></i>
        </button>
      </div>


      <Modal isOpen={modalIsOpen} className='modal-container'>

        <ModalHeader>
          ADD User
        </ModalHeader>
        <div className='lineModal' ></div>

        
        <UsersForm
          getUserList={getUserList}
          userSelected={userSelected}
          deselectUser={deselectUser}
        />
        
        <button className='btn form-btn' onClick={()=>setModalIsOpen(false)}> Decline </button>

      </Modal>
    </div>
  );
};

export default AddModal;