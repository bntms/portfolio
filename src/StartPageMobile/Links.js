import { useRef } from 'react';
import Selected from '../Selected/Selected';
import { links } from '../links';
import './links.css';

const Links = ({ isOpen, toggleLinks }) => {
  const ref = useRef(null);
  const selectedIconHeight = ref.current?.getBoundingClientRect()?.height;

  return (
    <>
      <div
        className={
          isOpen
            ? 'link-mobile__title link-mobile__title--open'
            : 'link-mobile__title'
        }
        onClick={!isOpen ? toggleLinks : null}
        ref={ref}
      >
        Links
        {isOpen && (
          <div className="link-mobile__close" onClick={toggleLinks}>
            <Selected height={selectedIconHeight} />
          </div>
        )}
      </div>
      {isOpen && (
        <ul className="link-mobile__wrapper">
          <li className="link-mobile">
            <a href={links.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li className="link-mobile">
            <a href={links.viztorony} target="_blank" rel="noopener noreferrer">
              Viztorony
            </a>
          </li>
          <li className="link-mobile">
            <a href={links.palma} target="_blank" rel="noopener noreferrer">
              Palma
            </a>
          </li>
          <li className="link-mobile">
            <a href={links.studiob} target="_blank" rel="noopener noreferrer">
              MOME StudioB
            </a>
          </li>
        </ul>
      )}
    </>
  );
};

export default Links;
