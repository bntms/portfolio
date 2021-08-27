import './pressLink.css';

const PressLink = ({ title, domain, url }) => (
  <>
    <a
      className="pressLink"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {domain}
    </a>
    <div className="articleTitle">{title}</div>
  </>
);

export default PressLink;
