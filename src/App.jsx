import { AppShell, ColorSchemeProvider, MantineProvider, useMantineTheme } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import React, { useState } from 'react';
import Filters from './components/Filters';
import { AppHeader } from './components/Header';
import Needs from './components/Needs';

export default function App({ items, lastUpdated }) {
    const preferredColorScheme = useColorScheme();
    const [colorScheme, setColorScheme] = useState(preferredColorScheme);
    const toggleColorScheme = (value) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    const theme = useMantineTheme();

    const [category, setCategory] = useState('');
    const categories = [...new Set(items.map(it => it.category).filter(it => it))];

    function handleCategoryChange(filter) {
        setCategory(filter);
        document.querySelector('#root').scrollTo(0, 0);
    }

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{ colorScheme }}>
                <AppShell
                    sx={{
                        height: '100vh',
                        backgroundColor: colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[0]
                    }}
                    padding="md"
                    header={<AppHeader lastUpdated={lastUpdated}/>}
                    styles={appStyles}
                >
                    <Filters setCategoryFilter={handleCategoryChange} categories={categories}/>
                    <Needs items={items} category={category}/>
                </AppShell>
            </MantineProvider>
        </ColorSchemeProvider>
    );
}

function appStyles(theme) {
    return {
        main: {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[0],
            paddingTop: 0
        }
    }
}