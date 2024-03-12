import { useState, useEffect } from 'react';
import PressLink from './PressLink';
import Wrapper from '../components/Wrapper/Wrapper';

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
        <footer>
          <a href="#/bio">Back</a>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Press;
