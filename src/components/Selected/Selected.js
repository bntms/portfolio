import './selected.css';

const Selected = ({ height }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" height={height}>
    <path className="selected" d="M 0,10 L 10,0" />
  </svg>
);

export default Selected;
