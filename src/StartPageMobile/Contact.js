import { useRef } from 'react';
import Selected from '../Selected/Selected';
import { links } from '../links';
import './contact.css';

const Contact = ({ isOpen, toggleContact }) => {
  const ref = useRef(null);
  const selectedIconHeight = ref.current?.getBoundingClientRect()?.height;

  return (
    <>
      <div
        className={
          isOpen
            ? 'contact-mobile__title contact-mobile__title--open'
            : 'contact-mobile__title'
        }
        onClick={!isOpen ? toggleContact : null}
        ref={ref}
      >
        Contact
        {isOpen && (
          <div className="contact-mobile__close" onClick={toggleContact}>
            <Selected height={selectedIconHeight} />
          </div>
        )}
      </div>
      {isOpen && (
        <ul className="contact-mobile__wrapper">
          <li className="contact-mobile">
            <a href={`tel:${links.telHref}`}>{links.tel}</a>
          </li>
          <li className="contact-mobile">
            <a href={`mailto:${links.mail}`}>{links.mail}</a>
          </li>
          <li className="contact-mobile">
            <a href={links.maps} target="_blank" rel="noopener noreferrer">
              {links.address}
            </a>
          </li>
        </ul>
      )}
    </>
  );
};

export default Contact;
