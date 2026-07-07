import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { AppRoutes } from './AppRoutes.jsx';

export function render(url) {
  return renderToString(
    <React.StrictMode>
      <ThemeProvider>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </ThemeProvider>
    </React.StrictMode>,
  );
}