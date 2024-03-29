import React from "react";
import { Link } from "react-router-dom";
import ChairmanImage from "../assets/images/chairperson.jpeg";
import PrimaryButton from "../shared/Button";
import Section from "../layouts/Section";
import Image from "../shared/Image";
import { Slide } from "react-reveal";
const ChairmanMessage = () => {
  const paragraph2 =
    "Consequently, the Grooming Endowment Trust (GET) was incorporated in 2020 at the peak of the Covid-19 pandemic to support, contribute, and promote sustainable social initiatives in education, health, enterprise and community development, as well as humanitarian relief for the most vulnerable, in line with the Sustainable Development Goals. Our primary motivation is ‘Bringing Ideas to Life’ - which we do by providing grants and funding for early-stage innovators and businesses, as we believe the deployment of responsible capital is essential for bringing these oft-overlooked ideas to life. We also provide catalytic inputs for the growth of these businesses that drive our economies, through capacity building, networks, technical assistance, and strategic guidance, creating a multiplier effect with socioeconomic benefits such as employment, and knowledge creation; providing a pathway to end poverty. Our delivery framework rethinks the balance between investment and philanthropy, with a focus on promoting dignity and sustainability in our society.";
  return (
    <Section>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-4'>
            <Slide left>
              <Image
                src={ChairmanImage}
                alt='chairman'
                h={100}
                unit='%'
                rounded
              />
            </Slide>
          </div>
          <div className='col-lg-8'>
            <Slide bottom>
              <h2 className='my-3'>Chairperson's message</h2>
              <p>
                Actions that lead to positive impact and development are
                essential parts of the socio-economic growth of any country.
                However, recent global events have led to unprecedented economic
                challenges with major adverse impacts on development, especially
                for African countries. The United Nations has warned that the
                devastating impact of the COVID-19 pandemic will continue for
                years to come, unless smart investments in economic, societal
                and climate resilience are made to boost the sustainable
                recovery of the global economy.
              </p>
              <p>{paragraph2.slice(0, 800)}...</p>
              <Link to='/chairmans-message'>
                <PrimaryButton title='read more' primary />
              </Link>
            </Slide>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ChairmanMessage;
