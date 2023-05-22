import React from 'react';
import PropTypes from 'prop-types';
import { Contact }  from '../models/Contact.class';

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
      <h2>
        State: { contact.conectado ? 'Contacto En Linea' : 'Contacto No Disponible'}
      </h2>    
    </div>
  );
};

ComponenteA.propTypes = {
  contact: PropTypes.instanceOf(Contact)
}

export default ComponenteA;