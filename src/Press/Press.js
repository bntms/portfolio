import React from 'react';
import PressLink from './PressLink';

import Wrapper from '../Wrapper/Wrapper';
import { links } from './links';

import './press.css';

const Press = () => (
  <Wrapper>
    <div className="press-container">
      <div className="press">
        <ul>
          {links.map(link => (
            <li key={link.url}>
              <PressLink
                domain={link.domain}
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

export default Press;
