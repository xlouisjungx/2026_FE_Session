import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ModeSwitcher from './pages/ModeSwitcher';
import FocusPage from './pages/FocusPage';
import RestPage from './pages/RestPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ModeSwitcher />} />
        <Route path="focus" element={<FocusPage />} />
        <Route path="rest" element={<RestPage />} />
      </Route>
    </Routes>
  );
}
