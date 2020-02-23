import React, {useState} from 'react';
import {Layer} from 'grommet';


const Modal = props => {
  // const [open, setOpen] = React.useState(props.open);
  return (
    <>
    {props.open &&
      <Layer
        position="center"
        full
        modal
        margin = {props.margin || { left: "40px", top: "50px", right: "40px", bottom: "50px" }}
        onClickOutside={props.onClose }
        onEsc={props.onClose }
      >
        {props.children}
      </Layer>}
    </>
  )
}

export default Modal;