import React, { useContext } from "react";
import { AppShell, Navbar, Header, Burger, Switch, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconLamp, IconLampOff } from '@tabler/icons-react';
import { ThemeContext } from "../context/ThemeContext";

const HOC = ({ Component }) => {
    const [opened, { toggle }] = useDisclosure(false);
    const label = opened ? 'Fechar navegação' : 'Abrir navegação';
    const {appTheme, toggleTheme} = useContext(ThemeContext)

    return (
        <AppShell
            padding="md"
            navbar={
                <Navbar hiddenBreakpoint="sm" hidden={!opened} width={{ xs: 0, md: 200 }} p="xs">
                    Teste
                </Navbar>
            }
            header={
                <Header height={60} p="xs">
                    <Group position="apart">
                        <Burger opened={opened} onClick={toggleTheme} aria-label={label} />
                        <Switch
                            checked={appTheme === 'light' ? true : false}
                            onChange={toggleTheme}
                            size="md"
                            onLabel={<IconLamp size="1.25rem" />}
                            offLabel={<IconLampOff size="1.25rem" />}
                        />
                    </Group>
                </Header>
            }
            styles={(theme) => ({
                main: { backgroundColor: appTheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
        >
            <Component />
        </AppShell>
    );
};

export default HOC;
