import React, {stateUse} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/Contact.class';

const ComponenteB = ({ estado }) => {
  return (
    <div>
      <h2>
        State: { estado ? 'Contacto En Linea' : 'Contacto No Disponible'}
      </h2>
      <button>{ estado ? "Desconectar" : "Conectar" }</button>
    </div>
  );
};

ComponenteB.propTypes = {
  estado: PropTypes.bool,
}

export default ComponenteB;

    