import {createRoot} from 'react-dom/client';

import App from './components/app/App';

import {ThemeProvider} from 'styled-components';

import {defaultTheme} from './components/thems/default';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
  <ThemeProvider theme={defaultTheme}>
    <App />
  </ThemeProvider>
);
