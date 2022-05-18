import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Selected from '../Selected/Selected';
import './works.css';

const Works = ({ projects, category, isOpen, toggleCategory }) => {
  const ref = useRef(null);
  const selectedIconHeight = ref.current?.getBoundingClientRect()?.height;

  return (
    <>
      <div
        className={
          isOpen
            ? 'works-mobile__title works-mobile__title--open'
            : 'works-mobile__title'
        }
        onClick={!isOpen ? toggleCategory : null}
        ref={ref}
      >
        {category}
        {isOpen && (
          <div className="works-mobile__close" onClick={toggleCategory}>
            <Selected height={selectedIconHeight} />
          </div>
        )}
      </div>
      {isOpen && (
        <ul className="works-mobile__wrapper">
          {projects[category].map(project => (
            <li key={project.id} className="works-mobile">
              <Link to={`/${category}/${project.friendlyUrlTitle}`}>
                {project.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Works;
