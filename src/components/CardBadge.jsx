import { Badge, useMantineTheme } from '@mantine/core';
import React from 'react';

export function CardBadge({ item }) {
    const theme = useMantineTheme();
    return (
        <Badge sx={{ marginBottom: theme.spacing.sm }} color={getBadgeColor(item.priority, theme)} variant="filled" radius="sm">
            {getBadgeLabel(item.priority)} ({Math.abs(item.count)} {item.unit})
        </Badge>
    );
}

function getBadgeColor(priority, theme) {
    switch (priority) {
        case 1: {
            return 'red';
        }
        case 2: {
            return 'orange'
        }
        case 3: {
            return 'lime'
        }
        case 4: {
            return 'green'
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
