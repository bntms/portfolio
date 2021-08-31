import { useRef } from 'react';
import { useRect } from '@reach/rect';
import Selected from '../Selected/Selected';
import { links } from '../Press/links';
import './press.css';

const Press = ({ isOpen, togglePress }) => {
  const ref = useRef();
  const rect = useRect(ref);

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
            <Selected height={rect && rect.height} />
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
                  <div className="press-mobile__domain">{link.domain}</div>
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
