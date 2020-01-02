import React from 'react';

const Logout = props => {
  let logout = () => {
    fetch('/auth/logout', {
      method: 'POST',
    });
    window.location.reload();
  };

  return (
    <a className={'navbar-item is-vcentered ' + props.classes} onClick={logout}>
      Logout
    </a>
  );
};

export default Logout;
