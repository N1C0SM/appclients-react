/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ClientsService } from '../services/ClientService';

export default function NewClientPage() {
  const navigate = useNavigate();

  const [client, setClient] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const save = async () => {
    try {
      await ClientsService.addClient(client);
      navigate('/clients');
    } catch (error) {
      console.error('Error al guardar el cliente:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Nuevo Cliente</h2>

      <input
        className="form-control mb-2"
        placeholder="Nombre"
        value={client.name}
        onChange={(e) =>
          setClient({
            ...client,
            name: e.target.value
          })
        }
      />

      <input
        className="form-control mb-2"
        type="email"
        placeholder="Email"
        value={client.email}
        onChange={(e) =>
          setClient({
            ...client,
            email: e.target.value
          })
        }
      />

      <input
        className="form-control mb-2"
        placeholder="Teléfono"
        value={client.phone}
        onChange={(e) =>
          setClient({
            ...client,
            phone: e.target.value
          })
        }
      />

      <button
        className="btn btn-success"
        onClick={save}
      >
        Guardar
      </button>
    </div>
  );
}
