import Button from "../components/Button";
import {useState} from "react";
import Modal from "../components/Modal";

function ModalPage() {
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const actionBar = <Button primary onClick={handleClose}>I Accept</Button>
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Accept the terms & conditions</p>
    </Modal>

    // const randomText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis consequat augue, in ultrices mi ullamcorper eget. Cras convallis neque id tortor dapibus, eu ultricies elit dapibus. Sed accumsan orci at malesuada sollicitudin. Phasellus in hendrerit sem, vitae interdum odio. Sed ullamcorper facilisis neque ac aliquet. Morbi tempor massa ac enim aliquam, non commodo arcu malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras tincidunt tempor ex, a vestibulum risus consequat in.'

    return (
        <div className={'relative'}>
            <Button primary onClick={handleClick}>Show Modal</Button>
            {showModal && modal}
            {/*<p>{randomText}</p>*/}
            {/*<p>{randomText}</p>*/}
            {/*<p>{randomText}</p>*/}
            {/*<p>{randomText}</p>*/}
            {/*<p>{randomText}</p>*/}
        </div>
    )
}

export default ModalPage