import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../features/cartSlice';
import {Card, CardContent, Typography, Button, List, ListItem, ListItemText, Link, Box} from
        '@mui/material';
import { motion } from 'framer-motion';
const Cart = () => {
    const dispatch = useDispatch();
    const { items, total } = useSelector((state) => state.cart);
    return (
        <Card sx={{ maxWidth: 345, margin: 2 }}>
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
                                    border: '1px solid rgba(0,0,0,0.12)',
                                    borderRadius: 1,
                                    mb: 1,
                                    background: 'white',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                                    '&:hover': {
                                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                                    }
                                }}
                            >
                                <ListItemText
                                    primary={item.title}
                                    secondary={`${item.quantity} x ${item.price}$`}
                                    sx = {{margin: 2}}
                                />
                                <Button onClick={() =>
                                    dispatch(removeFromCart(item))}>Удалить</Button>
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