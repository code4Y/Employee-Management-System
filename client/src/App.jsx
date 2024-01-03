import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import RegisterEmployee from './components/RegisterEmployee';
import SearchEmployee from './components/SearchEmployee';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/register" element={<RegisterEmployee />} />
        <Route path="/search" component={<SearchEmployee />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
