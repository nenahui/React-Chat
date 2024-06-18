import ReactDOM from 'react-dom/client';
import { App } from './App';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Theme appearance={'dark'}>
    <App />
  </Theme>
);
