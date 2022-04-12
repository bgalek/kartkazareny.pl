import { Card, Stack, Text } from '@mantine/core';
import React from 'react';
import { CardBadge } from './CardBadge';

export default function Needs({ items, category }) {
    return (
        <Stack>
            {filterItems(items, category).map((item, i) => (
                <Card key={item.name + i} shadow="sm" p="md">
                    <CardBadge item={item}/>
                    <Text weight={300}>{item.name}</Text>
                </Card>
            ))}
        </Stack>
    );
}

function filterItems(items, categoryFilter) {
    return items
        .filter(it => categoryFilter ? categoryFilter.toLowerCase() === it.category?.toLowerCase() : true)
        .sort((a, b) => a.priority - b.priority);
}