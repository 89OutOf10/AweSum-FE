import React from 'react';
import ModalFrame from '../common/ModalFrame';

const SummaryModal = ({ _handleModal }) => {
    return (
        <ModalFrame _handleModal={_handleModal}>
            <h1>Summary</h1>
        </ModalFrame>
    );
};

export default SummaryModal;