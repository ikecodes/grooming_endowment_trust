import React from "react";
import { deleteDocWithImage } from "../firebase";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import styled from "styled-components";
import colors from "../constants/colors";
import Button from "../shared/Button";
import Image from "../shared/Image";
import { Fade } from "react-reveal";
import { MdHealthAndSafety, MdSchool } from "react-icons/md";
import { GiLovers } from "react-icons/gi";
import { AiTwotonePieChart } from "react-icons/ai";
import { FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

const GrantsCard = ({
  id,
  title,
  slug,
  description,
  image,
  imageRef,
  programSlug,
}) => {
  const admin = localStorage.getItem("admin");
  const handleDelete = async () => {
    deleteDocWithImage(imageRef, "grants", id);
  };

  const IconType = {
    health: <MdHealthAndSafety size={30} color='#C386C0' />,
    education: <MdSchool size={30} color='#C386C0' />,
    "humanitarian-works": <GiLovers size={30} color='#C386C0' />,
    "enterprise-and-community-development": (
      <AiTwotonePieChart size={30} color='#C386C0' />
    ),
    "social-entrepreneurship": <FaChartLine size={30} color='#C386C0' />,
  };

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className='row my-5 flex-md-row-reverse bg-light  position-relative justify-content-between'
    >
      <IconContainer className='bg-light shadow'>
        {IconType[programSlug]}
      </IconContainer>
      <Fade left>
        <div className='col-lg-4 p-0'>
          <Image src={image} alt='family' h={100} unit='%' />
        </div>
        <div className='col-lg-8'>
          <TextContainer>
            <h2 className='my-3 text-capitalize'>{title}</h2>
            {description}
            <div className='mt-3'>
              <Link to={`/grants/${slug}`} state={id}>
                <Button title='learn more' primary />
              </Link>
            </div>
          </TextContainer>
          {admin && (
            <FaRegTrashAlt
              role='button'
              className='mt-3 text-danger'
              size={25}
              onClick={handleDelete}
            />
          )}
        </div>
      </Fade>
    </motion.div>
  );
};

const TextContainer = styled.div`
  position: relative;
  padding-left: 1.5rem;
`;
const IconContainer = styled.span`
  display: inline;
  position: absolute;
  display: grid;
  place-content: center;
  z-index: 100;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  bottom: 0;
  border-bottom: 1px solid ${colors.primary};
  left: 0;

  @media (max-width: 576px) {
    left: 80%;
    right: 0;
  }
`;
export default GrantsCard;
