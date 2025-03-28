import React from 'react';
import { Button, ButtonGroup, useTheme } from '@mui/material';

const FilterPanel = ({ onFilterChange }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    const categories = [
        { value: 'Все', label: 'Все' },
        { value: 'electronics', label: 'Электроника' },
        { value: 'clothing', label: 'Одежда' },
        { value: 'books', label: 'Книги' }
    ];

    return (
        <ButtonGroup variant="contained" sx={{ my: 2 }}>
            {categories.map((category) => (
                <Button
                    key={category.value}
                    onClick={() => onFilterChange(category.value)}
                    sx={{
                        backgroundColor: isDarkMode ? '#9c27b0' : undefined,
                        '&:hover': {
                            backgroundColor: isDarkMode ? '#7b1fa2' : undefined,
                        }
                    }}
                >
                    {category.label}
                </Button>
            ))}
        </ButtonGroup>
    );
};

export default FilterPanel;