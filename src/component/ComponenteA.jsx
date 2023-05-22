import React from 'react';
import PropTypes from 'prop-types';
import { Contact }  from '../models/Contact.class';
import ComponenteB from './ComponenteB';

const ComponenteA = ({ contact }) => {

  return (
    <div>
      <h2>
        Name: { contact.name }
      </h2>
      <h3>
        Last name: { contact.lastName }
      </h3>
      <h3>
        Email: { contact.email }
      </h3>  
      <ComponenteB estado={contact.conectado} />    
    </div>
  );
};

ComponenteA.propTypes = {
  contact: PropTypes.instanceOf(Contact)
}

export default ComponenteA;