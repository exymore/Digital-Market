import React from 'react';

const ButtonDefault = props => (
  <div className="control">
    <a
      href={props.href}
      className={'button ' + props.classes}
      data-target={props.dataTarget}
      onClick={props.onClick}
    >
      {props.label}
    </a>
  </div>
);

export default ButtonDefault;
