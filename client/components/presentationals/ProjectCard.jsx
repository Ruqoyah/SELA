import React from 'react';
import PropTypes from "prop-types";
import TextTruncate from 'react-text-truncate';
import ProgressBar from './ProgressBar';

const ProjectCard = ({
  title,
  description,
  image,
  location,
  progress,
  contractorPicture,
  status,
  budget
}) => (
  <div className="col-sm-6 card-row">
    <div className="project-card">
      <div className="row">
        <div className="col-sm-4">
          <div className="image-wrapper">
            {
              status === "Completed" ?
                <div
                  className="progress"
                  style={{ backgroundColor: "#333333" }}
                >
                  {status}
                </div> : status === "On track to be completed" ? <div
                  className="progress"
                  style={{ backgroundColor: "#828282" }}
                >
                  {status}
                </div> : status === "Defaulted" ? <div
                  className="progress"
                  style={{ backgroundColor: "#EB5757" }}
                >
                  {status}
                </div> : status === "On track to be defaulted" ? <div
                  className="progress"
                  style={{ backgroundColor: "#F2994A" }}
                >
                  {status}
                </div> : status === "Not Initiated" ?
                  <div
                    className="progress"
                    style={{ backgroundColor: "#9B51E0" }}
                  >
                    {status}
                  </div> :
                  <div
                    className="progress"
                    style={{ backgroundColor: "#27AE60" }}
                  >
                    {status}
                  </div>
            }
            <img
              src={image}
              className="image-position"/>
            <ProgressBar
              className="progress-bar"
              percent={progress}
              color="#2D9CDB"/>
            <small
              className="percent">
              {progress}% complete
            </small>
          </div>
        </div>
        <div className="col-sm-8 card-info">
          <h5 className="card-title">{title}</h5>
          <div className="row">
            <div className="col-sm-6">
              <i
                className="fa fa-map-marker address-icon"
                aria-hidden="true"
              />
              <h3 className="font-style">{location}</h3>
            </div>
            <div className="col-sm-6">
              <img
                src="/images/budget.png"
                className="budget-icon"
              />
              <h3 className="font-style">Budget: {budget}</h3>
            </div>
          </div>
          <TextTruncate
            line={4}
            truncateText="…"
            text={description}
            className="card-description"
          />
          <hr/>
          <h5 className="contractors">Contractors</h5>
          {
            contractorPicture.map((picture) => (
              <img
                src={picture.picture}
                key={picture.picture}
                className="contractor-pic"/>
            ))
          }
          <div className="view-more-wrappper">
            <a className="view-more">View more details</a>
            <i className="fa fa-angle-right space" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

ProjectCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  location: PropTypes.string,
  progress: PropTypes.number,
  contractorPicture: PropTypes.array,
  status: PropTypes.string,
  budget: PropTypes.string
};

export default ProjectCard;
