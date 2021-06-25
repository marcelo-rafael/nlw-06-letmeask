import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './Pages/Home/Home';
import { NewRoom } from './Pages/Home/NewRoom';
import { Room } from './Pages/Room';
import { AdminRoom } from './Pages/AdminRoom';

import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />

          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
