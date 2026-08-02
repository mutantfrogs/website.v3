function Window({title, helpBtn, closeBtn, content}){
    return(
    <div className="title-bar">
        <div className="title-bar-text">{title}</div>
        <div className="title-bar-controls">
            {helpBtn.show && <button aria-label="Help"></button>}
            {closeBtn.show && <button aria-label="Close"></button>}
        </div>
    </div>
    )
}

export default Window