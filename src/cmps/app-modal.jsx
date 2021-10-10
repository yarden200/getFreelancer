import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '16%',
        left: '35%',
        right: '35%',
        bottom: '35%',
        // marginRight: '-50%',
        // transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgb(224, 233, 217)',
        padding: '20px'
        
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
