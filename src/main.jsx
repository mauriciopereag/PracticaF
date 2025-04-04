import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './components/Contact.css'
import './components/Navbar.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#044b85',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function StaticApp() {
  return (
    <ThemeProvider theme={theme}>
      {/* Navbar simplificado sin enrutamiento */}
      <AppBar position="static" className="app-bar" color="primary">
        <Toolbar>
          <Typography variant="h6" className="title">
            Seminuevos de Lujo Monterrey
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Typography color="inherit">
            Página de Contacto
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Contenido de Contact */}
      <Box
        className="contact-container"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'calc(100vh - 64px)',
          marginTop: '64px',
          backgroundColor: '#f5f5f5',
        }}
      >
        <Box className="contact-card">
          <Typography variant="h4" component="h1" gutterBottom>
            Contacto
          </Typography>
          <Typography variant="body1" className="contact-info">
            Bienvenido a nuestra agencia de autos seminuevos. Ofrecemos una amplia variedad de vehículos de alta calidad a precios competitivos.
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            Dirección
          </Typography>
          <Typography variant="body1" className="contact-info">
            Av. Garza Sada 1000, Monterrey, 64840, Nuevo León, México
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            Teléfono
          </Typography>
          <Typography variant="body1" className="contact-info">
            +52 (81) 4756-9067
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            Email
          </Typography>
          <Typography variant="body1" className="contact-info">
            contacto@seminuevoslujomty.com
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StaticApp />
  </StrictMode>,
)
