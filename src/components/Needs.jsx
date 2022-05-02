import { Card, Grid, MediaQuery, Text } from '@mantine/core';
import React from 'react';
import { CardBadge } from './CardBadge';

export default function Needs({ items, category }) {
    return (
        <Grid>
            {filterItems(items, category).map((item, i) => (
                <Grid.Col key={item.name + i} md={6} lg={4}>
                    <MediaQuery largerThan="sm" styles={{ minHeight: 100 }}>
                        <Card shadow="sm" p="md" sx={{ minHeight: 'auto' }}>
                            <CardBadge item={item}/>
                            <Text size="sm" weight={300}>{item.name}</Text>
                        </Card>
                    </MediaQuery>
                </Grid.Col>
            ))}
        </Grid>
    );
}

function filterItems(items, categoryFilter) {
    return items
        .filter(it => categoryFilter ? categoryFilter.toLowerCase() === it.category?.toLowerCase() : true)
        .sort((a, b) => a.priority - b.priority);
}
