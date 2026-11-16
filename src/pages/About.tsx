
import React from 'react';

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
  IonItem,
  IonLabel
} from '@ionic/react';

import {
  peopleOutline,
  personAddOutline,
  informationCircleOutline,
  codeSlashOutline
} from 'ionicons/icons';

const About: React.FC = () => {

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>

          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>

          <IonTitle>About</IonTitle>

        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <div style={{ textAlign: 'center', padding: '25px 0' }}>

          <IonIcon
            icon={peopleOutline}
            style={{
              fontSize: '80px',
              color: 'var(--ion-color-primary)'
            }}
          />

          <h1>Gestión de Clientes</h1>

          <p>
            Aplicación para gestionar y administrar clientes
            de forma sencilla.
          </p>

        </div>

        <IonCard>

          <IonCardHeader>
            <IonCardSubtitle>Sobre nosotros</IonCardSubtitle>
            <IonCardTitle>¿Qué es esta aplicación?</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Esta aplicación permite consultar clientes,
            añadir nuevos registros y organizar su información
            de manera fácil y rápida.
          </IonCardContent>

        </IonCard>

        <IonCard>

          <IonCardHeader>
            <IonCardTitle>Funcionalidades</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>

            <IonItem lines="none">
              <IonIcon
                icon={peopleOutline}
                slot="start"
                color="primary"
              />
              <IonLabel>
                <h2>Ver clientes</h2>
                <p>Consultar la lista de clientes.</p>
              </IonLabel>
            </IonItem>

            <IonItem lines="none">
              <IonIcon
                icon={personAddOutline}
                slot="start"
                color="primary"
              />
              <IonLabel>
                <h2>Añadir clientes</h2>
                <p>Registrar nuevos clientes.</p>
              </IonLabel>
            </IonItem>

            <IonItem lines="none">
              <IonIcon
                icon={informationCircleOutline}
                slot="start"
                color="primary"
              />
              <IonLabel>
                <h2>Información</h2>
                <p>Conocer más sobre la aplicación.</p>
              </IonLabel>
            </IonItem>

          </IonCardContent>

        </IonCard>

        <IonCard>

          <IonCardHeader>
            <IonCardTitle>
              <IonIcon icon={codeSlashOutline} />
              Tecnología
            </IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Desarrollada utilizando React, TypeScript e Ionic.
          </IonCardContent>

        </IonCard>

        <p style={{
          textAlign: 'center',
          color: 'var(--ion-color-medium)',
          marginTop: '25px'
        }}>
          Gestión de Clientes - Versión 1.0
        </p>

      </IonContent>

    </IonPage>
  );
};

export default About;
