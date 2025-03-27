import React from 'react';
import { Button, ButtonGroup } from '@mui/material';

const FilterPanel = ({ onFilterChange }) => {
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
                >
                    {category.label}
                </Button>
            ))}
        </ButtonGroup>
    );
};

export default FilterPanel;