import { Box, Container, Header, MediaQuery, Paper, Title } from '@mantine/core';
import { formatDistanceToNow } from 'date-fns';
import { pl } from 'date-fns/locale';
import React from 'react';
import heart from './heart.svg';

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
            <Container size="lg" px={0}>
                <Paper style={styles}>
                    <Box sx={(theme) => ({
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        width: '100%'
                    })}>
                        <img src={heart} alt="logo"
                             style={{ height: 44, minWidth: 40, width: 40, flex: '0', paddingRight: 16 }}/>
                        <span style={{ flexGrow: 1 }}>
                            <Title order={4} sx={{}}>Czego aktualnie potrzebujemy?</Title>
                            <small>ostatnia aktualizacja: {formatDate(lastUpdated)}</small>
                        </span>
                        <MediaQuery largerThan="sm" styles={{ textAlign: 'right', marginTop: 0, width: 'auto'}}>
                            <Title order={5} style={{ fontSize: 12 }} sx={{ textAlign: 'center', marginTop: 16, width: '100%' }}>
                                Arena Ursynów - punkt dla Uchodźców z Ukrainy
                                <br/>
                                ul. Witolda Pileckiego 122, 02-781 Warszawa
                            </Title>
                        </MediaQuery>
                    </Box>
                </Paper>
            </Container>
        </Header>
    );
}

function formatDate(date) {
    return formatDistanceToNow(date, {
        locale: pl,
        addSuffix: true
    });
}
