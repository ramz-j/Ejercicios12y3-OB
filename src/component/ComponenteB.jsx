import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/Contact.class';

const ComponenteB = ({ estado }) => {

  const [conectado, setConectado] = useState(estado);

  const manejarConexion = () => {
    setConectado(!conectado)
  }

  return (
    <div>
      <h2>
        State: { conectado ? 'Contacto En Linea' : 'Contacto No Disponible'}
      </h2>
      <button onClick={manejarConexion}>{ conectado ? "Desconectar" : "Conectar" }</button>
    </div>
  );
};

ComponenteB.propTypes = {
  estado: PropTypes.bool,
}

export default ComponenteB;

    