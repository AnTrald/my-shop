import React, { useContext } from 'react';
import {Container, Typography, Grid, IconButton, useTheme, Box} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { ThemeContext } from './context/ThemeContext';
function App() {
    const theme = useTheme();
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <Container>
            <Box
                sx={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    display: { xs: 'none', sm: 'block'},
                    textAlign: 'center',
                    gap: 1
                }}
            >
                <img
                    src="https://i.pinimg.com/736x/07/01/1e/07011eccd1f3c45d149441de527aa693.jpg"
                    height="80"
                    width="80"
                    alt="Лого"
                    style={{
                        border: '#888888 1px solid',
                        borderRadius: '3px',
                        display: 'block',
                        margin: '0 auto'
                    }}
                />
                <Typography variant="h6" sx={{ mt: 1 }}>Котенок</Typography>
            </Box>
            <Typography variant="h3" component="h1" align="center" sx={{ my: 4 }}>
                Интернет-магазин
            </Typography>
            <IconButton onClick={toggleTheme} sx={{ position: 'absolute', top: 16, right:
                    16 }}>
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <Grid container spacing={2}>
                <Grid item xs={12} md={9}>
                    <ProductList />
                </Grid>
                <Grid item xs={12} md={3} sx={{justifyItems: {xs: 'center', md: 'flex-start'}, width: '100%' }}>
                    <Cart />
                </Grid>
            </Grid>
        </Container>
    );
}
export default App;