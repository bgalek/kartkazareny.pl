import { Container, Footer, Paper, Text } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import github from './github.svg';

export function AppFooter() {
    const preferredColorScheme = useColorScheme();
    return (
        <Footer>
            <Paper>
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
                        <img
                            style={{
                                height: 48,
                                width: 48,
                                filter: preferredColorScheme === 'dark' ? 'invert(1)' : 'invert(0)'
                            }}
                            src={github}
                            alt="github"
                        />
                    </a>
                </Container>
            </Paper>
        </Footer>
    )
}
