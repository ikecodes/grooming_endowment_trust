import React from 'react';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import colors from '../constants/colors';

const DeleteModal = (props) => {
  return (
    <Modal
      {...props}
      size='sm'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className='d-flex gap-3 flex-wrap flex-md-nowrap'>
          <ContentBox>
            <h5>Are you sure you want to delete this?</h5>
            <div>
              <button className='btn btn-danger'>Yes delete</button>
            </div>
          </ContentBox>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const ContentBox = styled.div`
  color: ${colors.textColor};
  & h5 {
    color: ${colors.primary};
  }
`;

export default DeleteModal;
