import React from 'react'
import "./Modal.scss"
import { useSelector } from 'react-redux';

const Modal = ({setModal}) => {
    const {addList} = useSelector(state => state.data)
    const closeClick = () =>{
      setModal(false)
    }
  return (
    <div className='modal'>
        <h2>Çalma Listesi</h2>
    { 
        addList.map((el) =>
        <p className='playList'>{el.name}</p>
        )
    }
    <button className='close' onClick={closeClick}>X</button>
    </div>
  )
}

export default Modal