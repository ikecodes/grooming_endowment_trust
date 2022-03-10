import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import EventImg from '../assets/images/event.jpg';
import colors from '../constants/colors';

const BlogCard = () => {
  return (
    <div className='col-lg-4 col-md-6 mb-3'>
      <CardContainer>
        <Card className='border-0 bg-transparent'>
          <Card.Title className='my-3 text-capitalize fw-bolder fs-6'>
            new targets
          </Card.Title>
          <Card.Text className='border-bottom pb-3 text-capitalize'>
            june 19th, 2020
          </Card.Text>
          <CardImage alt='event' src={EventImg} />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardContainer>
    </div>
  );
};

const CardContainer = styled.div`
  background-color: ${colors.grey};
  padding: 1rem 1rem;
`;
const CardImage = styled.img`
  /* border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem; */
`;

export default BlogCard;