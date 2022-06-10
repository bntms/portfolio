import { useState, useEffect } from 'react';
import PressLink from './PressLink';
import Wrapper from '../Wrapper/Wrapper';

import './press.css';

const Press = () => {
  const [links, setLinks] = useState([]);

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
    <Wrapper>
      <div className="press-container">
        <div className="press">
          <ul>
            {links.map(link => (
              <li key={link.url}>
                <PressLink
                  domain={link.description}
                  title={link.title}
                  url={link.url}
                />
              </li>
            ))}
          </ul>
        </div>
        <nav>
          <ul className="navigation">
            <li>
              <a href="#/bio">Back</a>
            </li>
          </ul>
        </nav>
      </div>
    </Wrapper>
  );
};

export default Press;
