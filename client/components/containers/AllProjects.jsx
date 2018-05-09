import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getProjects from '../../actions/projectActions';
import ProjectCard from '../presentationals/ProjectCard';
import Loader from '../presentationals/Loader';

/**
 * @class AllProjects
 *
 * @classdesc Projects page component
 *
 */
export class AllProjects extends Component {
  /**
   * @description constructor - contains the constructor
   *
   * @param  {object} props the properties of the class component
   *
   * @return {void} no return or void
   *
   */
  constructor(props) {
    super(props);
    this.state = {
      loader: false
    };
  }

  /**
   * @description - gets all projects
   *
   * @return {void} no return or void
   */
  componentDidMount() {
    this.setState({
      loader: true
    });
    this.props.actions.getProjects()
      .then(() => {
        this.setState({
          loader: false
        });
      });
  }

  /**
   * @description render - renders projects details
   *
   * @return {object} returns an object
   *
   */
  renderProjects() {
    const allProject = this.props.projects;
    if (allProject.length < 1) {
      return (
        <div className="not-found">
          <h1>No project found </h1>
        </div>
      );
    }
    return (<div className="row">
      {
        allProject.map((project) => (
          <ProjectCard
            title={project.title}
            description={project.description}
            image={project.image}
            location={project.location}
            progress={project.progress}
            contractorPicture={project.contractorPicture}
            status={project.status}
            budget={project.budget}
            id={project._id}
            key={project._id}
          />
        ))
      }
    </div>);
  }

  /**
   * @description render - renders the class component
   *
   * @return {object} returns an object
   */
  render() {
    return (
      <div className="container-fluid projects">
        <div className="row">
          <div className="col-sm-4 title-wrapper">
            <h3 className="title">All Projects</h3>
          </div>
          <div className="col-sm-8">
            <div className="sort-buttons">
              <div
                className="btn-group"
                role="group"
                aria-label="Button group with nested dropdown"
              >
                <h3 className="sort-text">Sort by:</h3>
                <button
                  className="btn btn-sm btn-dropdown button-style"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Budget
                  <i className="fa fa-angle-down space" aria-hidden="true" />
                </button>

                <div
                  className="dropdown-menu show-dropdown"
                  aria-labelledby="btnGroupDrop1">
                  <a className="dropdown-item" href="#">$50,000.00</a>
                  <a className="dropdown-item" href="#">$60,000.00</a>
                  <a className="dropdown-item" href="#">$70,000.00</a>
                  <a className="dropdown-item" href="#">$80,000.00</a>
                </div>
                <div className="btn-group" role="group">
                  <button
                    className="btn btn-sm btn-dropdown button-style"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Start date
                    <i className="fa fa-angle-down space" aria-hidden="true" />
                  </button>
                  <div
                    className="dropdown-menu show-dropdown"
                    aria-labelledby="btnGroupDrop1">
                    <a className="dropdown-item" href="#">January</a>
                    <a className="dropdown-item" href="#">Feburary</a>
                    <a className="dropdown-item" href="#">March</a>
                    <a className="dropdown-item" href="#">April</a>
                  </div>
                </div>
                <div className="btn-group" role="group">
                  <button
                    className="btn btn-sm btn-dropdown button-style"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                  End date
                    <i className="fa fa-angle-down space" aria-hidden="true" />
                  </button>
                  <div
                    className="dropdown-menu show-dropdown"
                    aria-labelledby="btnGroupDrop1">
                    <a className="dropdown-item" href="#">January</a>
                    <a className="dropdown-item" href="#">Feburary</a>
                    <a className="dropdown-item" href="#">March</a>
                    <a className="dropdown-item" href="#">April</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-cards">
          { this.state.loader ?
            <div style={{ marginTop: '80px', textAlign: 'center' }}>
              <Loader/>
            </div> :
            <div>
              {this.renderProjects()}
            </div>
          }
        </div>
        <div className="circles">
          <div className="circle"/>
          <div className="circle"/>
          <div className="circle"/>
          <div className="circle"/>
          <div className="circle"/>
          <div className="circle"/>
        </div>
      </div>);
  }
}

/**
 * @description mapStateToProps - maps state value to props
 *
 * @param  {object} state the store state
 *
 * @return {Object} returns state object
 *
 */
function mapStateToProps(state) {
  return {
    projects: state.projectReducer.projects
  };
}

/**
 * mapDispatchToProps - maps dispatch to props value
 *
 * @param  {Function} dispatch dispatchs function
 *
 * @return {Object} returns an Object
 *
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      getProjects
    }, dispatch)
  };
}

AllProjects.propTypes = {
  projects: PropTypes.array,
  actions: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllProjects);
