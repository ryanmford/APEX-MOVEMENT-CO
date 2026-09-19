import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppProvider } from './contexts/AppContext';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Coach from './pages/Coach';

export default function App() {
  return (
    <HelmetProvider>
      <AppProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Home />} />
              <Route path="coach" element={<Coach />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </HelmetProvider>
  );
}
