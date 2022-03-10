import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import colors from '../constants/colors';
import Logo from '../assets/images/Logo.png';
import Button from '../shared/Button';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <Container>
      <div className='container'>
        <div className='row gap-4 gap-md-0'>
          <div className='col-lg-3'>
            <ImageBox src={Logo} />
            <p className='pt-4'>
              No. 45 plot no be my area na klock area be this.
            </p>
          </div>
          <div className='col-lg-3'>
            <ul className='text-capitalize'>
              <Link to='/about'>
                <li className='mb-2'>about us</li>
              </Link>
              <Link to='/contact-us'>
                <li className='my-2'>contact</li>
              </Link>
              <li className='my-2'>terms & condition</li>
            </ul>
          </div>
          <div className='col-lg-3'>
            <ul className='text-capitalize'>
              <li className='mb-2 d-flex gap-3 align-items-center'>
                <FaFacebook size={20} />
                <span>facebook</span>
              </li>
              <li className='my-2 d-flex gap-3 align-items-center'>
                <FaTwitter size={20} />
                <span>twitter</span>
              </li>
              <li className='my-2 d-flex gap-3 align-items-center'>
                <FaInstagram size={20} />
                <span>instagram</span>
              </li>
            </ul>
          </div>
          <div className='col-lg-3'>
            <p className='p-0'>Subscribe to our newsletter</p>
            <div className='d-flex'>
              <Form.Control
                type='email'
                placeholder='Email'
                className='rounded-0'
                aria-describedby='Input your email'
              />
              <Button title='subscribe' primary norounded />
            </div>
          </div>
        </div>
      </div>
      <div className='text-center text-capitalize'>
        <p className='m-0 pt-5 pb-2 text-capitalize'>
          &copy;2022 grooming trust endownment.
        </p>
      </div>
    </Container>
  );
};

const Container = styled.footer`
  margin-top: 4rem;
  padding-top: 5rem;
  color: ${colors.white};
  background-color: ${colors.tertiary};

  & a,
  a:link {
    color: ${colors.white};
    text-decoration: none;
  }
  & a:hover,
  a:active {
    color: ${colors.primary};
  }
`;

const ImageBox = styled.img`
  width: 12rem;
  height: auto;
  background-size: cover;
`;

export default Footer;