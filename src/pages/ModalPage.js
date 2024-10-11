import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);
 
  const handleClose = () => {
    setShowModal(false)
  }

  const handleClick = ()=>{
    setShowModal(true)
  }

  const actionBar =
  <div>
    <Button primary onClick={handleClose}>I accept</Button>
  </div>

  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <p>
      Here is an important message for you to accept.
    </p>
  </Modal>

return (
  <div>
       <Button onClick={handleClick} primary>
      Show Modal
    </Button>
    {showModal && modal}
  
  </div>
  )
}

export default ModalPage;