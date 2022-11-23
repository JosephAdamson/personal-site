import Modal from 'react-modal';
import { useState } from 'react';
import ProjectCard from './ProjectCard';

function ProjectModal(props) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <button
            className="w-full rounded-lg project-btn"
            onClick={openModal}>
                <ProjectCard
                imgMin={props?.imgMin}
                title={props.title}
                onClick={openModal}
                />
            </button>
            <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className="flex h-screen w-screen justify-center items-center border-2"
            > 
                <div className="flex flex-col w-2/3 h-5/6 project-modal justify-center 
                items-center gap-2 p-4 rounded-lg">
                    <div className="w-5/6 py-2">
                        <button onClick={closeModal}>close</button>
                    </div>
                    <img className="object-fit md:h-2/3 rounded-lg" src={props.img} alt={props.title}/>
                    <div className="flex w-2/3 gap-4 underline">
                        <a href={props.github} target="_blank" rel="noreferrer">source</a>
                        <a href={props.live} target="_blank" rel="noreferrer">live</a>
                    </div>
                    <p className="md:w-2/3">
                        {props.description}
                    </p>
                </div>

            </Modal>
        </div>
    )
}

export default ProjectModal;