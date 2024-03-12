import './close.css';

const Close = ({ height }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" height={height}>
    <path className="close" d="M 0,0 L 10,10 M 0,10 L 10,0" />
  </svg>
);

export default Close;
