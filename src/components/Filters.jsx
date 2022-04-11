import { Select, useMantineTheme } from '@mantine/core';

export default function Filters({ categories, setCategoryFilter }) {
    const theme = useMantineTheme();

    return (
        <div style={{
            margin: -theme.spacing.md,
            position: 'sticky',
            top: 0,
            zIndex: 1,
            backgroundColor: '#f8f9fa'
        }}>
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
