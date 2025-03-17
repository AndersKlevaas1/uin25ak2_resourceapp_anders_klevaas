import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Resources from './components/Resources';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="html" element={<Resources category="html" />} />
        <Route path="css" element={<Resources category="css" />} />
        <Route path="javascript" element={<Resources category="javascript" />} />
        <Route path="react" element={<Resources category="react" />} />
        <Route path="sanity" element={<Resources category="Sanity and headless CMS" />} />
      </Route>
    </Routes>
  );
}
