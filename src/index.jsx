import { AppShell, Header, Title } from '@mantine/core';
import { formatDistanceToNow } from 'date-fns';
import { pl } from 'date-fns/locale'
import React from 'react'
import { createRoot } from 'react-dom/client';
import data from '../data.json'
import App from './App'
import './index.css'

const container = document.getElementById('root');
createRoot(container).render(
    <React.StrictMode>
        <AppShell
            sx={{ height: '100vh' }}
            padding="md"
            header={
                <Header height={70} p="md">
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        height: '100%',
                        justifyContent: 'space-between'
                    }}>
                        <Title order={1}>Zapotrzebowanie</Title>
                        <p>ostatnia aktualizacja: {formatDistanceToNow(Date.parse(data.createdAt), {
                            locale: pl,
                            addSuffix: true
                        })}</p>
                    </div>
                </Header>
            }
            styles={
                (theme) => ({
                    main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] }
                })
            }>
            <App items={data.items}/>
        </AppShell>
    </React.StrictMode>
);