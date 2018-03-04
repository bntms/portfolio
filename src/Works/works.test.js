import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import Works from './Works';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Works />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
