import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import { BlogIndex, BlogPost } from './pages/Blog';
import Cv from './pages/Cv';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<BlogIndex />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="cv" element={<Cv />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
