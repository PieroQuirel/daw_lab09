import React, { useEffect, useState } from 'react';

const Clientes = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    // API
    fetch('https://www.elalamohospedaje.com/services/clients.php')
      .then((response) => response.json())
      .then((data) => setClientes(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h3>Clientes</h3>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Fecha de nacimiento</th>
            <th>Celular</th>
            <th>Email</th>
            <th>Estado civil</th>
            <th>Dirección</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.name}</td>
              <td>{cliente.lastname}</td>
              <td>{cliente.date_of_birth}</td>
              <td>{cliente.phone}</td>
              <td>{cliente.email}</td>
              <td>{cliente.civil_status}</td>
              <td>{cliente.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Clientes;