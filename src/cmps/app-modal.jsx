import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height:'500px',
        background:'white',
        borderRadius: '5px',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#Root');

export class ModalApp extends React.Component {

    render() {

        return (
            <div className="modal-app">
                <Modal
                    isOpen={this.props.showModal}
                    onRequestClose={this.props.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    {this.props.children}
                </Modal>
            </div>
        );
    }
}
