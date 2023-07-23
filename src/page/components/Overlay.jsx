import { Fragment } from "react";
import { createPortal } from 'react-dom';
import closeIcon from "../../assets/close-red.svg";

// background of modal
function Backdrop({onhideModal,isOpen}){
    return (
        <div className={`backdrop`} onClick={onhideModal}>
        </div>
    );
}

// foreground of modal
function ModalOverlay({children,close}){
    return(
        <div className={`modal`}>
            <img className="close-modal cursor" src={closeIcon} alt="close" onClick={close}/>
            {children}
        </div>
    );
}

export default function Overlay({children,close,open}){
    let portalElement=document.getElementById("overlay");
    return (
        <Fragment>
            {createPortal(<Backdrop onhideModal={close} isOpen={open}/>,portalElement)}
            {createPortal(<ModalOverlay isOpen={open} close={close}>{children}</ModalOverlay>,portalElement)}
        </Fragment>
    );
}