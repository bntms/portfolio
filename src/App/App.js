import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import StartPage from '../StartPage/StartPage';
import Bio from '../Bio/Bio';
import Works from '../Works/Works';
import Project from '../Project/Project';
import StartPageMobile from '../StartPageMobile/StartPageMobile';
import ProjectMobile from '../ProjectMobile/ProjectMobile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'hu',
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  toggleLanguage = () => {
    const language = this.state.language === 'hu' ? 'en' : 'hu';

    this.setState({ language });
  };

  render() {
    const { width, height } = this.state;
    const isMobile = width <= 500 || height <= 500;

    if (isMobile) {
      return (
        <Router>
          <Switch>
            <Route exact path="/" render={() => <StartPageMobile />} />
            <Route
              exact
              path="/:category/:projectTitle"
              render={({ match }) => (
                <ProjectMobile
                  category={match.params.category}
                  projectTitle={match.params.projectTitle}
                  toggleLanguage={this.toggleLanguage}
                  language={this.state.language}
                />
              )}
            />
            <Route exact path="/*" render={() => <StartPageMobile />} />
          </Switch>
        </Router>
      );
    } else {
      return (
        <Router>
          <Switch>
            <Route exact path="/" render={() => <StartPage />} />
            <Route
              exact
              path="/bio"
              render={({ match }) => (
                <Bio
                  toggleLanguage={this.toggleLanguage}
                  language={this.state.language}
                />
              )}
            />
            <Route
              exact
              path="/:category"
              render={({ match }) => <Works category={match.params.category} />}
            />
            <Route
              exact
              path="/:category/:projectTitle"
              render={({ match }) => (
                <Project
                  category={match.params.category}
                  projectTitle={match.params.projectTitle}
                  toggleLanguage={this.toggleLanguage}
                  language={this.state.language}
                />
              )}
            />
            <Route exact path="/*" render={() => <StartPage />} />
          </Switch>
        </Router>
      );
    }
  }
}

export default App;
