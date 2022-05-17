import { createRoot } from 'react-dom/client';
import App from './App';

it('renders without crashing', () => {
  const container = document.createElement('container');
  const root = createRoot(container);

  root.render(<App />);
  root.unmount();
});
