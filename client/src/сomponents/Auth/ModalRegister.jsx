import React, { useContext } from 'react';
import Register from '../Forms/Register';
import { RegisterContext } from '../../сontexts/register-context';

function ModalRegister(props) {
  const context = useContext(RegisterContext);

  let sendDataToServer = async () => {
    await fetch('/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: context.firstName,
        lastName: context.lastName,
        email: context.email,
        login: context.login,
        password: context.password,
      }),
    }).then(res => {
      if (res.status === 200) {
        window.location.reload();
      }
    });
  };

  return (
    <div id="modal-ter" className={props.classes}>
      <div className="modal-background" onClick={props.modalClose} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Register</p>
          <button
            className="delete"
            aria-label="close"
            onClick={props.modalClose}
          />
        </header>
        <section className="modal-card-body">
          <div className="content">
            <Register />
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={sendDataToServer}>
            Register
          </button>
          <button className="button" onClick={props.modalClose}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
}

export default ModalRegister;
