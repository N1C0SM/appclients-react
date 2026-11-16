
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Clientes from './pages/Clientes';
import AnadirClientes from './pages/AnadirClientes';
import About from './pages/About';

/* Core CSS */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';


/* Dark mode */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>

    
        <Route
          exact
          path="/home"
          element={<Home />}
        />


        <Route
          exact
          path="/clientes"
          element={<Clientes />}
        />


        <Route
          exact
          path="/anadir-clientes"
          element={<AnadirClientes />}
        />

  
        <Route
          exact
          path="/about"
          element={<About />}
        />


        <Route
          exact
          path="/"
          element={<Navigate to="/home" replace />}
        />

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
