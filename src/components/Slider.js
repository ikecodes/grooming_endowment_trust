import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot, where } from "firebase/firestore";
import { db } from "../firebase";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import NavLg from "../layouts/NavLg";
import NavSm from "../layouts/NavSm";
import DesktopImg from "../assets/images/desktop/2.jpeg";
const Slider = () => {
  const [articles, setArticles] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setLoading(true);
    const articlesRef = collection(db, "articles");
    const q = query(articlesRef, where("isFeatured", "==", true));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setArticles(articles);
      // setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  console.log(articles);
  return (
    <div className='position-relative slider_container'>
      <NavSm />
      <NavLg />
      <Carousel>
        <Carousel.Item className='position-relative' interval={10000}>
          <div className='slider_image_box'>
            <div className='slider_overlay'></div>
            <img className='slider_image' src={DesktopImg} alt='First slide' />
          </div>
          <Caption>
            <Carousel.Caption>
              <h1 className='text-start'>Grooming Endowment Trust</h1>
              <p className='text-start'>
                Promoting sustainable social initiatives in education, health,
                enterprise and community development
              </p>
            </Carousel.Caption>
          </Caption>
        </Carousel.Item>
        {articles.length > 0 &&
          articles.map((article) => (
            <Carousel.Item interval={10000} key={article?.id}>
              <div className='slider_image_box'>
                <div className='slider_overlay'></div>
                <img
                  className='slider_image'
                  src={article?.imageUrl}
                  alt='Second slide'
                />
              </div>
              <Caption>
                <Carousel.Caption>
                  <h1 className='text-start'>{article?.title}</h1>
                  <p className='text-start'>{article?.description}</p>
                </Carousel.Caption>
              </Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
};

const Caption = styled.div`
  & h1 {
    font-size: 3rem;
    font-weight: 600;
    text-transform: capitalize;
  }
`;

export default Slider;
