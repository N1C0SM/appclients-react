import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton
} from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mi aplicación</IonTitle>

          <IonButtons slot="end">
            <IonButton routerLink="/clientes">
              Ver clientes
            </IonButton>

            <IonButton routerLink="/anadir-clientes">
              Añadir clientes
            </IonButton>

            <IonButton routerLink="/about">
              About
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;