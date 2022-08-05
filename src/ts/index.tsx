import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import DropDown from './modules/dropdown';

ReactDOM.createRoot(document.querySelector("#dropdown")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
        <DropDown />
    </StyledEngineProvider>
  </React.StrictMode>
);