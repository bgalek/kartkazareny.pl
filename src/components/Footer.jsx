import { Container, Footer, Text } from '@mantine/core';
import github from './github.svg';

export function AppFooter() {
    return (
        <Footer>
            <Container size="lg" sx={(theme) => ({
                padding: theme.spacing.md,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            })}>
                <Text>
                    Contribute on GitHub
                </Text>
                <a href="https://github.com/bgalek/kartkazareny.pl">
                    <img style={{ height: 48, width: 48 }} src={github} alt="github"/>
                </a>
            </Container>
        </Footer>
    )
}
