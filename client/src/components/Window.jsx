function Window({className, title, helpBtn, closeBtn, children}){

    return(
    <div className={className}>
        <div className="window">
            <div className="title-bar">
                <div className="title-bar-text">{title}</div>
                <div className="title-bar-controls">
                    {helpBtn && <button aria-label="Help" onClick={helpBtn}></button>}
                    {closeBtn && <button aria-label="Close" onClick={closeBtn}></button>}
                </div>
            </div>
            {children}
        </div>
    </div>
    )
}

export default Window