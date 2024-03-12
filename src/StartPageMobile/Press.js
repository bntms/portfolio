import { useState, useEffect, useRef } from 'react';
import Close from '../components/Close/Close';
import './press.css';

const Press = ({ isOpen, togglePress }) => {
  const [links, setLinks] = useState([]);
  const ref = useRef(null);
  const closeIconHeight = ref.current?.getBoundingClientRect()?.height;

  useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    try {
      const response = await fetch('https://benetamas.com/api/links');
      const data = await response.json();

      setLinks(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div
        className={
          isOpen
            ? 'press-mobile__title link-mobile__title--open'
            : 'press-mobile__title'
        }
        onClick={!isOpen ? togglePress : null}
        ref={ref}
      >
        Press
        {isOpen && (
          <div className="press-mobile__close" onClick={togglePress}>
            <Close height={closeIconHeight} />
          </div>
        )}
      </div>
      {isOpen && (
        <ul className="press-mobile__wrapper">
          {links.map(link => (
            <li className="press-mobile" key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textOverflow: 'ellipsis' }}
              >
                <div>
                  <div className="press-mobile__domain">{link.description}</div>
                  <div className="press-mobile__article-title">
                    {link.title}
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Press;
