import { Card, Header, Paper, Title } from '@mantine/core';
import { formatDistanceToNow } from 'date-fns';
import { pl } from 'date-fns/locale';
import React from 'react';

const styles = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'space-between'
};

export function AppHeader({ lastUpdated }) {
    return (
        <Header p="md">
            <Paper style={styles}>
                <Title order={6}>
                    Arena Ursynów - punkt dla Uchodźców z Ukrainy
                    <br/>
                    ul. Witolda Pileckiego 122, 02-781 Warszawa
                </Title>
                <Title order={3} sx={{ marginTop: 10 }}>Czego aktualnie potrzebujemy?</Title>
                <small>ostatnia aktualizacja: {formatDate(lastUpdated)}</small>
            </Paper>
        </Header>
    );
}

function formatDate(date) {
    return formatDistanceToNow(date, {
        locale: pl,
        addSuffix: true
    });
}
