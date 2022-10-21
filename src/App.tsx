import { FC } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from 'Home';

const App: FC = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
