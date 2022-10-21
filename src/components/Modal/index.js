import React from 'react';
import ReactDOM from 'react-dom';

const portalRoot = document.getElementById('portal-root')

export const UIModal = ({children, isOpen, onClickClose}) => {
    if(!isOpen) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className='ui-modal-overlay'>
            <div className='ui-modal'>
                <button type='button' className='ui-modal-close-button' onClick={onClickClose}>X</button>
                {children}
            </div>
        </div>,
        portalRoot
    );
};