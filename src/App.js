import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home/Home';
import Booking from './components/Booking';
import Page404 from './components/Page404';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} exact >
          <Route index element={<Home />} />
          <Route path="booking" element={<Booking />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
