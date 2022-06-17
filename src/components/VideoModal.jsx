import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';


const VideoModal = () => {
  const { isModal, toggleIsModal, modal} = useContext(GlobalContext);

  const videoSrc = `https://www.youtube.com/embed/${modal.id}`;

    return (
<Modal isOpen={isModal} size="xl">
<ModalHeader>{modal.title}</ModalHeader>
<ModalBody>

  <iframe  style={{"width":"100%", "height": "55vh"}} src={videoSrc} allowFullScreen title="Video player" />

</ModalBody>
<ModalFooter>
  <Button color="secondary" 
  onClick={() => toggleIsModal()}
  >Zamknij</Button>
</ModalFooter>
</Modal>
    )
}

export default VideoModal