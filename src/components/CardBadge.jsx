import { Badge, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';

export function CardBadge({ item }) {
    const theme = useMantineTheme();
    const matches = useMediaQuery('(min-width: 900px)');

    return (
        <Badge sx={{ marginBottom: theme.spacing.md }} color={getBadgeColor(item.priority)} variant="filled"
               radius="sm" size={matches ? 'lg' : 'sm'}>
            {getBadgeLabel(item.priority)} ({Math.abs(item.count)} {item.unit})
        </Badge>
    );
}

function getBadgeColor(priority) {
    switch (priority) {
        case 1: {
            return 'red';
        }
        case 2: {
            return 'orange'
        }
        case 3: {
            return 'green'
        }
        case 4: {
            return 'blue'
        }
        default: {
            return 'gray'
        }
    }
}

function getBadgeLabel(priority) {
    switch (priority) {
        case 1: {
            return 'Pilnie potrzebne';
        }
        case 2: {
            return 'Potrzebne'
        }
        case 3: {
            return 'Mamy wystarczająco'
        }
        case 4: {
            return 'Mamy nadmiar'
        }
        default: {
            return 'Nie wiadomo'
        }
    }
}
