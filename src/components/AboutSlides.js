import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import Section from "../layouts/Section";
import ProfileImg from "../assets/images/profile.jpg";
import colors from "../constants/colors";

const AboutSlides = () => {
  return (
    <Section>
      <SliderContainer>
        <SliderBox>
          <Carousel style={{ maxWidth: "100%", width: "100%" }}>
            <Carousel.Item interval={1000}>
              <Avatar src={ProfileImg} alt='User 1' />
              <figure className='position-relative'>
                {/* <div className='text-start'>
                  <QuoteSymbol>&ldquo;</QuoteSymbol>
                </div> */}
                <Quote className='my-1'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam fugiat autem mollitia maiores ex fugit recusandae
                  illum. Totam minus facilis, aperiam recusandae velit molestias
                  mollitia quas voluptas dignissimos eaque doloribus?
                </Quote>
                {/* <div className='text-end'>
                  <QuoteSymbol>&rdquo;</QuoteSymbol>
                </div> */}
                <figcaption>
                  <div className='text-uppercase'>
                    <p className='text-capitalize mt-4'>John Williams</p>
                    <p>marketing head</p>
                    <p>&nbsp;</p>
                  </div>
                </figcaption>
              </figure>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <Avatar src={ProfileImg} alt='User 1' />
              <figure className='position-relative'>
                {/* <div className='text-start'>
                  <QuoteSymbol>&ldquo;</QuoteSymbol>
                </div> */}
                <Quote className='my-1'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam fugiat autem mollitia maiores ex fugit recusandae
                  illum. Totam minus facilis, aperiam recusandae velit molestias
                  mollitia quas voluptas dignissimos eaque doloribus?
                </Quote>
                {/* <div className='text-end'>
                  <QuoteSymbol>&rdquo;</QuoteSymbol>
                </div> */}
                <figcaption>
                  <div className='text-uppercase'>
                    <p className='text-capitalize mt-4'>John Williams</p>
                    <p>marketing head</p>
                    <p>&nbsp;</p>
                  </div>
                </figcaption>
              </figure>
            </Carousel.Item>
            <Carousel.Item>
              <Avatar src={ProfileImg} alt='User 1' />
              <figure className='position-relative'>
                {/* <div className='text-start'>
                  <QuoteSymbol>&ldquo;</QuoteSymbol>
                </div> */}
                <Quote className='my-1'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam fugiat autem mollitia maiores ex fugit recusandae
                  illum. Totam minus facilis, aperiam recusandae velit molestias
                  mollitia quas voluptas dignissimos eaque doloribus?
                </Quote>
                {/* <div className='text-end'>
                  <QuoteSymbol>&rdquo;</QuoteSymbol>
                </div> */}
                <figcaption>
                  <div className='text-uppercase'>
                    <p className='text-capitalize mt-4'>John Williams</p>
                    <p>marketing head</p>
                    <p>&nbsp;</p>
                  </div>
                </figcaption>
              </figure>
            </Carousel.Item>
          </Carousel>
        </SliderBox>
      </SliderContainer>
    </Section>
  );
};
const SliderContainer = styled.div`
  color: ${colors.white};
`;
const SliderBox = styled.div`
  background-color: ${colors.tertiary};
  text-align: center;
  padding: 2rem 2rem;
  /* border-radius: 2rem; */
`;

const Quote = styled.blockquote`
  z-index: 200;
`;
// const QuoteSymbol = styled.span`
//   color: ${colors.primary};
//   font-size: 2rem;
// `;

const Avatar = styled.img`
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
`;
export default AboutSlides;
