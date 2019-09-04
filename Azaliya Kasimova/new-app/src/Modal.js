import React from 'react';
import './App.css';

const Modal = ({ handleClose, show, source, name, index}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
         <div className="content">
            <img
              src = {source}
              alt = {name}/>
            <div className="contentText">
              <p>Name: {name}</p>
              <p>id: {index}</p>
            </div>
          </div>
        <button onClick={handleClose} className="closeButton">close</button>
      </section>
    </div>
  );
};

export default Modal;

