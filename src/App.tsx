import { Route, Routes } from 'react-router-dom';
import { Home, NotFound } from './pages';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-2">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
