import React from 'react';
import './App.css';

function Modal ({ handleClose, show, source, name, index, status, date}) {
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
              <p>Status: {status}</p>
              <p>{date}</p>
            </div>
          </div>
        <button onClick={handleClose} className="closeButton">close</button>
      </section>
    </div>
  );
};

export default Modal;

