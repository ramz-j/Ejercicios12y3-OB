import React, {stateUse} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/Contact.class';

const ComponenteB = ({ estado }) => {
  return (
    <div>
      <h5>
        This task is: { estado ? 'COMPLETED' : 'PENDING' }
      </h5>
    </div>
  );
};

ComponenteB.propTypes = {
  estado: PropTypes.bool,
}

export default ComponenteB;
