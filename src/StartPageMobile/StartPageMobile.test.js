import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import StartPageMobile from './StartPageMobile';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <StartPageMobile />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
