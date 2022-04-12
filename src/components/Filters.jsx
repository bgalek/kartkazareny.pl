import { Select, useMantineTheme } from '@mantine/core';

export default function Filters({ categories, setCategoryFilter }) {
    const theme = useMantineTheme();
    const styles = {
        margin: -theme.spacing.md,
        position: 'sticky',
        top: 0,
        zIndex: 1,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[0]
    };
    return (
        <div style={styles} id="test">
            <Select
                sx={{ margin: theme.spacing.md, paddingBottom: theme.spacing.md, paddingTop: theme.spacing.md }}
                placeholder="Filtruj kategorie"
                data={getCategories(categories)}
                onChange={setCategoryFilter}
                clearable
            />
        </div>
    );
}

function getCategories(categories) {
    return categories.map(it => ({
        value: it,
        label: it
    })).sort((a, b) => a.label.localeCompare(b.label));
}
