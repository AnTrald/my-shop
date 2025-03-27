import React from 'react';
import { Card, CardContent, CardMedia, CardHeader, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            <Card sx={{
                width: 345,
                margin: 2,
                background: 'linear-gradient(45deg, #FF5252 0%, #FF4081 20%, #E040FB 40%, #7C4DFF 60%, #536DFE 80%, #448AFF 100%)',
                backgroundSize: '300% 300%',
                animation: 'rainbow 20s ease infinite',
                boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                    boxShadow: '0 8px 30px rgba(0,0,0,0.35)',
                    transform: 'translateY(-5px)'
                },
                '@keyframes rainbow': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' }
                }
            }}
            >
                <CardHeader
                    title={product.title}
                    sx={{
                        height: 90,
                        alignItems: 'flex-start',
                        background: 'rgba(255,255,255,0.75)',
                        position: 'relative',
                        borderBottom: '1px solid rgba(0,0,0,0.1)'
                    }}
                    titleTypographyProps={{
                        sx: {
                            fontWeight: 'bold',
                            color: '#222'
                        }
                    }}
                />
                <CardMedia
                    component="img"
                    height="140"
                    image={`https://cataas.com/cat?test=${product.id}`}
                    alt={product.title}
                    sx={{
                        objectFit: 'cover',
                        borderTop: '2px solid rgba(255,255,255,0.5)',
                        borderBottom: '2px solid rgba(255,255,255,0.5)'
                    }}
                />
                <CardContent sx={{
                    background: 'rgba(255,255,255,0.75)',
                    position: 'relative',
                    borderTop: '1px solid rgba(0,0,0,0.1)'
                }}>
                    <Typography variant="body2" sx={{
                        height: 40,
                        color: '#444',
                        fontWeight: 500
                    }}>
                        {product.description}
                    </Typography>
                    <Typography variant="h5" sx={{
                        my: 1,
                        color: '#111',
                        fontWeight: 'bold'
                    }}>
                        {product.price}$
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => dispatch(addToCart(product))}
                        sx={{
                            background: 'linear-gradient(45deg, #FF1744, #F50057)',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '0.9rem',
                            py: 1,
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            boxShadow: '0 2px 10px rgba(255,23,68,0.4)',
                            '&:hover': {
                                background: 'linear-gradient(45deg, #D50000, #C51162)',
                                boxShadow: '0 4px 14px rgba(213,0,0,0.4)'
                            }
                        }}
                    >
                        В корзину
                    </Button>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default ProductCard;