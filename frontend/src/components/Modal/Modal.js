import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import {motion} from "framer-motion";
const ModalContext = React.createContext();


export function ModalProvider({children}) {
    const modalRef = useRef();
    const [value, setValue] = useState();
}

const Modal = () => {
  return (
    <div>Modal</div>
  )
}

export default Modal
