
import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonButton,
  IonIcon,
  IonButtons,
  IonSearchbar
} from '@ionic/react';

import { personAddOutline } from 'ionicons/icons';

const Clientes: React.FC = () => {

  const clientes = [
    {
      id: 1,
      nombre: 'Juan García',
      email: 'juan@gmail.com',
      telefono: '600123456'
    },
    {
      id: 2,
      nombre: 'María López',
      email: 'maria@gmail.com',
      telefono: '611234567'
    },
    {
      id: 3,
      nombre: 'Pedro Sánchez',
      email: 'pedro@gmail.com',
      telefono: '622345678'
    }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ver clientes</IonTitle>

          <IonButtons slot="end">
            <IonButton routerLink="/anadir-clientes">
              <IonIcon icon={personAddOutline} slot="start" />
              Añadir
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <IonSearchbar
          placeholder="Buscar clientes..."
        />

        <IonList>
          {clientes.map((cliente) => (
            <IonItem key={cliente.id}>
              <IonAvatar slot="start">
                <img
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                  alt="Avatar"
                />
              </IonAvatar>

              <IonLabel>
                <h2>{cliente.nombre}</h2>
                <p>{cliente.email}</p>
                <p>Teléfono: {cliente.telefono}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Clientes;
