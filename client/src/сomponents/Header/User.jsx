import React from 'react';

const User = props => (
  <p className={"navbar-item is-vcentered is-flex " + props.classes}>
    {props.login}
  </p>
);

export default User;
