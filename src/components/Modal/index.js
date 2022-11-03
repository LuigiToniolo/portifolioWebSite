import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect } from "react";

const portalRoot = document.getElementById('portal-root')

export const UIModal = ({children, isOpen, onClickClose}) => {


    // useEffect(() => {
    //     const closeOnEscapeKey = e => e.key === "Escape" ? onClickClose() : null;
    //     document.body.addEventListener("keydown", closeOnEscapeKey);
    //     return () => {
    //       document.body.removeEventListener("keydown", closeOnEscapeKey);
    //     };
    //   }, [onClickClose]);

    if(!isOpen) {
        return null;
    }

        return ReactDOM.createPortal(
            <div className='ui-modal-overlay'>
                <div className='ui-modal'>
                    <button type='button' className='ui-modal__close-button' onClick={onClickClose}>X</button>
                    {children}
                </div>
            </div>,
            portalRoot
        );

};