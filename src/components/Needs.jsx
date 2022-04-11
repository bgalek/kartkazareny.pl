import { Badge, Card, Stack, Text, useMantineTheme } from '@mantine/core';
import React from 'react';

export default function Needs({ items }) {
    const theme = useMantineTheme();

    return (
        <Stack>
            {items.map((item, i) => (
                <Card key={item.name + i} shadow="sm" p="md">
                    <Badge sx={{ marginBottom: theme.spacing.sm }} color={getBadgeColor(item.priority)}
                           variant="light">{getBadgeLabel(item.priority)} ({Math.abs(item.count)} {item.unit})</Badge>
                    <Text weight={200}>{item.name}</Text>
                </Card>
            ))}
        </Stack>
    );
}

function getBadgeColor(priority) {
    switch (priority) {
        case 1: {
            return 'pink';
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