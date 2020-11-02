import React from 'react';
import {NavLink} from "react-router-dom";

const DialogUser = (props) => {
  let path = "/messages/" + props.id;

  return (
    <li className="dialogs__user">
      <NavLink to={path}>
        {props.name}
      </NavLink>
    </li>
  )
}

export default DialogUser;