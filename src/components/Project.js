import Modal from "react-modal";
import { useState } from "react";

const Project = (props) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <article className={"Project"} onClick={openModal}>
        <h2>{props.title}</h2>
        <img src={props.src} alt={props.src} className={"Project-img"} />
      </article>
      <Modal isOpen={showModal} onRequestClose={closeModal} className={"Modal"}>
        <h1>{props.title}</h1>
        <h2>{props.desc}</h2>
        <a href={props.demo} target={"_blank"} rel="noopener noreferrer">
          Demo
        </a>
        <a href={props.git} target={"_blank"} rel="noopener noreferrer">
          Git
        </a>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
};

export default Project;
