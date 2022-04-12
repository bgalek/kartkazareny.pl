import { AppShell, Header, Title } from '@mantine/core';
import { formatDistanceToNow } from 'date-fns';
import { pl } from 'date-fns/locale';
import React, { useState } from 'react';
import data from '../data.json';
import Filters from './components/Filters';
import Needs from './components/Needs';

export default function App({ items }) {
    const [categoryFilter, setCategoryFilter] = useState('');

    return (
        <AppShell
            sx={{ height: '100vh' }}
            padding="md"
            header={
                <Header p="md">
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        height: '100%',
                        justifyContent: 'space-between'
                    }}>
                        <Title order={6}>Arena Ursynów - punkt dla Uchodźców z Ukrainy<br/>ul. Witolda Pileckiego
                            122,
                            02-781 Warszawa</Title>
                        <Title order={3} sx={{ marginTop: 10 }}>Czego aktualnie potrzebujemy?</Title>
                        <small>ostatnia aktualizacja: {formatDistanceToNow(Date.parse(data.createdAt), {
                            locale: pl,
                            addSuffix: true
                        })}</small>
                    </div>
                </Header>
            }
            styles={
                (theme) => ({
                    main: {
                        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                        paddingTop: 0
                    }
                })
            }>
            <Filters setCategoryFilter={(filter) => {
                setCategoryFilter(filter);
                document.querySelector('#root').scrollTo(0, 0);
            }}
                     categories={[...new Set(items.map(it => it.category).filter(it => it))]}/>
            <Needs items={filterItems(items, categoryFilter)}/>
        </AppShell>
    );
}

function filterItems(items, categoryFilter) {
    return items
        .filter(it => categoryFilter ? categoryFilter.toLowerCase() === it.category?.toLowerCase() : true)
        .sort((a, b) => a.priority - b.priority);
}