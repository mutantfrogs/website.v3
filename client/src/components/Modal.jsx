//components that utilize modal must keep it's open state
function Modal({isOpen, onClose, children}){
    if(!isOpen) return null

    return(
        <div className="overlay" onClick={onClose}>
            {children}
        </div>
    )
}

export default Modal