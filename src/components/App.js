import { Routes, Route } from 'react-router-dom';
import Home from '../Routes/Home';
import Calculator from '../Routes/Calculator';
import Quote from '../Routes/Quote';
import NoMatch from '../Routes/NoMatch';
import LayOut from './LayOut';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
        <Route path="*" element={<NoMatch />} />
      </Route>

    </Routes>
  );
}

export default App;
