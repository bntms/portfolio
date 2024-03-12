import { Link } from 'react-router-dom';
import Close from '../components/Close/Close';
import './mobileClose.css';

const MobileClose = ({ height }) => (
  <div className="project-mobile-close">
    <Link to="/">
      <Close height={height} />
    </Link>
  </div>
);

export default MobileClose;
