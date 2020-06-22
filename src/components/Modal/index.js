import React from 'react';


const Modal = props => {
  // const [open, setOpen] = React.useState(props.open);
  return (
    <>
    {props.open &&
      <div
        position="center"
        full
        modal
        margin = {props.margin || { left: "40px", top: "50px", right: "40px", bottom: "50px" }}
        onClickOutside={props.onClose }
        onEsc={props.onClose }
      >
        {props.children}
      </div>}
    </>
  )
}

export default Modal;