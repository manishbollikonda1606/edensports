import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Congrats3D from './components/Congrats3D';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/celebrate" element={<Congrats3D />} />
    </Routes>
  );
}

export default App;
