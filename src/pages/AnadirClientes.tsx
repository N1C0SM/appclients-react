
import React, { useState } from 'react';

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonButtons,
  IonBackButton,
  IonToast
} from '@ionic/react';

const AnadirClientes: React.FC = () => {

  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');

  const [mostrarToast, setMostrarToast] = useState(false);

  const guardarCliente = () => {

    if (!nombre || !apellidos || !email || !telefono) {
      alert('Por favor, rellena todos los campos obligatorios');
      return;
    }

    const cliente = {
      nombre,
      apellidos,
      email,
      telefono,
      direccion
    };

    console.log('Cliente guardado:', cliente);

    setMostrarToast(true);

    setNombre('');
    setApellidos('');
    setEmail('');
    setTelefono('');
    setDireccion('');
  };

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>

          <IonButtons slot="start">
            <IonBackButton defaultHref="/clientes" />
          </IonButtons>

          <IonTitle>Añadir cliente</IonTitle>

        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <h2>Nuevo cliente</h2>
        <p>Introduce los datos del nuevo cliente.</p>

        <IonItem>
          <IonLabel position="stacked">
            Nombre *
          </IonLabel>
          <IonInput
            value={nombre}
            placeholder="Introduce el nombre"
            onIonInput={(e) => setNombre(e.detail.value ?? '')}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">
            Apellidos *
          </IonLabel>
          <IonInput
            value={apellidos}
            placeholder="Introduce los apellidos"
            onIonInput={(e) => setApellidos(e.detail.value ?? '')}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">
            Correo electrónico *
          </IonLabel>
          <IonInput
            type="email"
            value={email}
            placeholder="ejemplo@gmail.com"
            onIonInput={(e) => setEmail(e.detail.value ?? '')}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">
            Teléfono *
          </IonLabel>
          <IonInput
            type="tel"
            value={telefono}
            placeholder="600123456"
            onIonInput={(e) => setTelefono(e.detail.value ?? '')}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">
            Dirección
          </IonLabel>
          <IonInput
            value={direccion}
            placeholder="Introduce la dirección"
            onIonInput={(e) => setDireccion(e.detail.value ?? '')}
          />
        </IonItem>

        <div className="ion-padding-top">

          <IonButton
            expand="block"
            onClick={guardarCliente}
          >
            Guardar cliente
          </IonButton>

          <IonButton
            expand="block"
            fill="outline"
            color="medium"
            routerLink="/clientes"
          >
            Cancelar
          </IonButton>

        </div>

        <IonToast
          isOpen={mostrarToast}
          message="Cliente guardado correctamente"
          duration={2000}
          color="success"
          onDidDismiss={() => setMostrarToast(false)}
        />

      </IonContent>

    </IonPage>
  );
};

export default AnadirClientes;
