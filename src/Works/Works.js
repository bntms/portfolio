import React, { Component } from 'react';
import ContainerDimensions from 'react-container-dimensions';
import { Link } from 'react-router-dom';
import Wrapper from '../Wrapper/Wrapper';
import Selected from '../Selected/Selected';
import { projectsPlaceholder } from './projectsPlaceholder';
import { placeProjectsInGrid } from './utils';
import './works.css';

class Works extends Component {
  constructor() {
    super();
    this.state = {
      hoveredCategory: '',
      friendlyUrlTitle: '',
      projects: projectsPlaceholder
    };
  }

  componentDidMount() {
    this.fetchProjectsForCategory(this.props.category);
  }

  fetchProjectsForCategory(category) {
    fetch(`https://www.benetamas.com/api/category/${category}`)
      .then(res => res.json())
      .then(json =>
        this.setState({ projects: placeProjectsInGrid(json.projects) })
      )
      .catch(console.error);
  }

  handleCategoryMouseOver(e) {
    this.setState({
      hoveredCategory: e.target.innerHTML
        .toString()
        .toLowerCase()
        .split(' ')[0]
    });
  }

  handleProjectMouseOver(e) {
    this.setState({
      friendlyUrlTitle: this.state.projects.find(
        project => project.id === e.target.parentNode.value
      ).urlFriendlyTitle
    });
  }

  handleProjectMouseOut() {
    this.setState({ friendlyUrlTitle: '' });
  }

  handleCategoryClick() {
    this.fetchProjectsForCategory(this.state.hoveredCategory);
  }

  render() {
    const { projects } = this.state;

    return (
      <Wrapper>
        <div className="works-container">
          <div className="works-content">
            <ul className="works-photos">
              {projects.map(e => (
                <li key={e.id} value={e.id}>
                  <img
                    src={e.photo.photoUrl}
                    alt=""
                    onMouseOver={e => this.handleProjectMouseOver(e)}
                    onMouseOut={() => this.handleProjectMouseOut()}
                    className={
                      this.state.friendlyUrlTitle !== '' &&
                      e.urlFriendlyTitle !== this.state.friendlyUrlTitle
                        ? 'hide-project-image'
                        : null
                    }
                  />
                </li>
              ))}
            </ul>
            <div className="works-list">
              <ul className="works-project-list">
                {projects.filter(e => e.photo.photoUrl !== '').map(e => (
                  <li
                    key={e.id}
                    value={e.id}
                    onMouseOver={e => this.handleProjectMouseOver(e)}
                    onMouseOut={() => this.handleProjectMouseOut()}
                    onFocus={e => this.handleProjectMouseOver(e)}
                    onBlur={() => this.handleProjectMouseOut()}
                    className={
                      this.state.friendlyUrlTitle !== '' &&
                      e.urlFriendlyTitle !== this.state.friendlyUrlTitle
                        ? 'hide-project-title'
                        : null
                    }
                  >
                    <Link
                      to={`/${this.props.category}/${
                        this.state.friendlyUrlTitle
                      }`}
                    >
                      {e.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul
                className="works-category-list"
                onMouseOver={e => this.handleCategoryMouseOver(e)}
                onFocus={e => this.handleCategoryMouseOver(e)}
                onClick={() => this.handleCategoryClick()}
              >
                <li className="architecture">
                  <Link to={`/${this.state.hoveredCategory}`}>
                    ARCHITECTURE{' '}
                    {this.props.category === 'architecture' && (
                      <ContainerDimensions>
                        {({ height }) => <Selected height={height} />}
                      </ContainerDimensions>
                    )}
                  </Link>
                </li>
                <li className="installation">
                  <Link to={`/${this.state.hoveredCategory}`}>
                    INSTALLATION{' '}
                    {this.props.category === 'installation' && (
                      <ContainerDimensions>
                        {({ height }) => <Selected height={height} />}
                      </ContainerDimensions>
                    )}
                  </Link>
                </li>
                <li className="object">
                  <Link to={`/${this.state.hoveredCategory}`}>
                    OBJECT{' '}
                    {this.props.category === 'object' && (
                      <ContainerDimensions>
                        {({ height }) => <Selected height={height} />}
                      </ContainerDimensions>
                    )}
                  </Link>
                </li>
                <li className="experiment">
                  <Link to={`/${this.state.hoveredCategory}`}>
                    EXPERIMENT{' '}
                    {this.props.category === 'experiment' && (
                      <ContainerDimensions>
                        {({ height }) => <Selected height={height} />}
                      </ContainerDimensions>
                    )}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <nav>
            <ul className="navigation">
              <li>
                <a href="#/bio">BENETAMAS</a>
              </li>
              <li>
                <a href="#/">BACK</a>
              </li>
            </ul>
          </nav>
        </div>
      </Wrapper>
    );
  }
}

export default Works;
