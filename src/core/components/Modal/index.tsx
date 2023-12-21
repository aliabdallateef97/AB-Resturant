import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import classes from './style.module.css';
import {useTheme} from '@mui/material'

// Define a type for Overlay props
type OverlayProps = {
  onClose: () => void;
};

const Overlay: React.FC<OverlayProps> = (props) => (
  <div className={classes.overlay} onClick={props.onClose}></div>
);

// Define a type for ModalOverlay props
type ModalOverlayProps = {
  children: ReactNode;
};

const ModalOverlay: React.FC<ModalOverlayProps> = (props) => {
  const theme=useTheme()
  return(
  <div className={classes.Modal} style={{backgroundColor:theme.palette.primary.light}}>{props.children}</div>
)};

// Define a type for Modal props
type ModalProps = {
  onClose: () => void;
  children: ReactNode;
};

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Overlay onClose={props.onClose} />, document.getElementById('overlay'))}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('modal'))}
    </React.Fragment>
  );
};

export default Modal;