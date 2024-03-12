import { useRef } from 'react';
import Close from '../components/Close/Close';
import useBio from '../Bio/useBio';
import './bio.css';

const Bio = ({ isOpen, toggleBio, language, toggleLanguage }) => {
  const bio = useBio(language);
  const ref = useRef(null);
  const closeIconHeight = ref.current?.getBoundingClientRect()?.height;

  return (
    <>
      <div
        className="bio-mobile__title"
        onClick={!isOpen ? toggleBio : null}
        ref={ref}
      >
        BENETAMAS
        {isOpen && (
          <div className="bio-mobile__close" onClick={toggleBio}>
            <Close height={closeIconHeight} />
          </div>
        )}
      </div>
      {isOpen && (
        <>
          <div className="bio-mobile__language">
            <span onClick={toggleLanguage}>
              {language === 'hu' ? 'en' : 'hu'}
            </span>
          </div>
          <p className="bio-mobile__text">{bio}</p>
        </>
      )}
    </>
  );
};

export default Bio;
