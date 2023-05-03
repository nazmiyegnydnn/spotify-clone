import React, { useEffect } from 'react';
import "./Modal.scss"
import { useSelector ,useDispatch} from 'react-redux';
import {deleteFilter } from "../../dataSlice";

const Modal = ({setModal, setButtonName, buttonName} ) => {
    const {addList} = useSelector(state => state.data)
    const dispatch = useDispatch()
    const closeClick = () =>{
      setModal(false)
    }

    useEffect(() => {
      if (addList.length === 0) {
        setModal(false);
      }
    }, [addList]);

    const deleteButtonFocus = (el) => {
      dispatch(deleteFilter(el.id))
      setButtonName(buttonName.splice(el.name ,0))
    }

    
  return (
    <div className='modal'>
        <h2>Çalma Listesi</h2>
    {
       addList.map((el) =>
       <div className='playList'>
           <p className='playListText'>{el.name}</p>
           <button className='playListClose' onClick={() => (deleteButtonFocus(el))}>X</button>
       </div>
        )
    }
    <button className='close' onClick={closeClick}>X</button>
    </div>
  )
}

export default Modal