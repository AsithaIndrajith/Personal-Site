import React from 'react';
import PropTypes from 'prop-types';

import Paper from './Publication/Paper';

const Publications = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="experience" />
    <div className="title">
      <h3>Publications</h3>
    </div>
    {data.map((paper) => (
      <Paper
        data={paper}
        key={paper.company}
      />
    ))}
  </div>
);

Publications.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Publications.defaultProps = {
  data: [],
};

export default Publications;
