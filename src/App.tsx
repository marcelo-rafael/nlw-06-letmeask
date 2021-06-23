import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './Pages/Home';
import { NewRoom } from './Pages/NewRoom';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" exact component={NewRoom} />
    </BrowserRouter>
  );
}

export default App;
