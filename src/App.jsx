import { MantineProvider } from '@mantine/core';
import { RouterProvider } from "react-router-dom"
import AppRouter from './routes';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const {appTheme, toggleTheme} = useContext(ThemeContext)
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: appTheme }}>
      <RouterProvider router={AppRouter} />
    </MantineProvider>
  )
}

export default App
