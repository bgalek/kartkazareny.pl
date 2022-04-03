import { Badge, Card, Stack, Text, useMantineTheme } from '@mantine/core';

export default function App({ items }) {
    const theme = useMantineTheme();
    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7];

    return (
        <Stack>
            {items.map((item, i) => (
                <Card shadow="sm" p="lg">
                    <Badge sx={{ marginBottom: theme.spacing.sm }} color={getBadgeColor(item.priority[0])}
                           variant="light">{item.priority.substring(3)}</Badge>
                    <Text sx={{ marginBottom: theme.spacing.sm }} weight={200}>{item.name}</Text>
                    <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
                        {item.count}
                    </Text>
                </Card>
            ))}
        </Stack>
    );
}

function getBadgeColor(priority) {
    switch (priority[0]) {
        case '1': {
            return 'pink';
        }
        case '2': {
            return 'blue'
        }
        case '3': {
            return 'green'
        }
        case '4': {
            return 'lime'
        }
        default: {
            return 'gray'
        }
    }
}