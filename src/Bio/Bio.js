import { useState } from 'react';
import Wrapper from '../Wrapper/Wrapper';
import { useHistory } from 'react-router-dom';
import useBio from './useBio';
import { useLastLocation } from 'react-router-last-location';
import { links } from '../links';
import 'focus-visible/dist/focus-visible.js';
import './bio.css';

const Bio = ({ language, toggleLanguage }) => {
  const [isBioExpanded, setIsBioExpanded] = useState(false);
  const lastLocation = useLastLocation();
  const history = useHistory();
  const bio = useBio(language);

  const goBack = () => {
    if (lastLocation?.pathname === '/press') {
      history.go(-3);
    } else if (lastLocation) {
      history.goBack();
    } else {
      history.push('/');
    }
  };

  const handleBioClick = () => {
    if (window.getSelection().toString()) return;
    setIsBioExpanded(!isBioExpanded);
  };

  const handleBioKeyPress = e => {
    if (e.key === 'Enter') {
      setIsBioExpanded(!isBioExpanded);
    }
  };

  return (
    <Wrapper>
      <div className="bio-container">
        <div className="contact-bio">
          <ul className="contact">
            <li className="contact-title">
              <a href="#/press">Press</a>
            </li>
            <li className="contact-title">
              <a
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li className="contact-title">
              <a
                href={links.viztorony}
                target="_blank"
                rel="noopener noreferrer"
              >
                Viztorony
              </a>
            </li>
            <li className="contact-title">
              <a href={links.palma} target="_blank" rel="noopener noreferrer">
                Palma
              </a>
            </li>
            <li className="contact-title">
              <a href={links.studiob} target="_blank" rel="noopener noreferrer">
                MOME StudioB
              </a>
            </li>
            <li className="contact-tel">{links.tel}</li>
            <li>
              <a href={`mailto:${links.mail}`}>{links.mail}</a>
            </li>
            <li>
              <a href={links.maps} target="_blank" rel="noopener noreferrer">
                {links.address}
              </a>
            </li>
          </ul>
          <section className={isBioExpanded ? 'bio--expanded' : 'bio'}>
            <div className="bio-title">
              <p>Bio</p>
              <span
                className="bio-language"
                role="button"
                tabIndex="0"
                onClick={toggleLanguage}
                onKeyPress={toggleLanguage}
              >
                {language === 'hu' ? 'en' : 'hu'}
              </span>
            </div>
            <p
              className={isBioExpanded ? 'bio-text--expanded' : 'bio-text'}
              tabIndex="0"
              onClick={handleBioClick}
              onKeyPress={handleBioKeyPress}
            >
              {bio}
            </p>
            {!isBioExpanded && <div className="bio-photo" />}
          </section>
        </div>
        <nav>
          <ul className="navigation">
            <li>
              <span
                role="button"
                tabIndex="0"
                onClick={goBack}
                onKeyPress={goBack}
                className="js-focus-visible"
              >
                Back
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </Wrapper>
  );
};

export default Bio;
