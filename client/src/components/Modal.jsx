import { useState } from "react"
import Window from "./Window"

function Modal(){
    const [isOpen, setIsOpen] = useState(false)

    return(
    <div>
        <Window>

        </Window>
    </div>
    )
}

export default Modal