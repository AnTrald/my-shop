import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../features/cartSlice';
import {Card, CardContent, Typography, Button, List, ListItem, ListItemText, Link, Box, useTheme} from
        '@mui/material';
import { motion } from 'framer-motion';
const Cart = () => {
    const dispatch = useDispatch();
    const { items, total } = useSelector((state) => state.cart);
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    return (
        <Card sx={{ maxWidth: 345, minWidth: {xs: 345, sm: 100}, margin: 2 }}>
            <CardContent>
                <Typography variant="h6">Корзина</Typography>
                <List>
                    {items.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <ListItem
                                sx={{
                                    border: `1px solid ${theme.palette.divider}`,
                                    borderRadius: 1,
                                    mb: 1,
                                    backgroundColor: theme.palette.background.default,
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                                    '&:hover': {
                                        boxShadow: theme.shadows[2] // Тень при наведении
                                    }
                                }}
                            >
                                <ListItemText
                                    primary={item.title}
                                    secondary={`${item.quantity} x ${item.price}$`}
                                    sx = {{margin: 2}}
                                />
                                <Button
                                    onClick={() => dispatch(removeFromCart(item))}
                                    variant="contained"
                                    sx={{
                                        backgroundColor: isDarkMode ? '#9c27b0' : undefined,
                                        '&:hover': {
                                            backgroundColor: isDarkMode ? '#7b1fa2' : undefined,
                                        }
                                    }}
                                >Удалить</Button>
                            </ListItem>
                        </motion.div>
                    ))}
                </List>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2, // отступ между элементами
                    mt: 2 // отступ сверху
                }}>
                    <Typography variant="h6">Общая стоимость: {total}$</Typography>
                    <Button
                        onClick={() => dispatch(clearCart())}
                        variant="contained"
                        color="error"
                        sx={{ width: '100%', maxWidth: 200 }} // фиксированная ширина кнопки
                    >
                        Очистить корзину
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};
export default Cart;