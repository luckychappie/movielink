import { BubbleChart } from '@mui/icons-material';
import { Box, Divider, Drawer, ImageList, ImageListItem, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react'
import { navItems } from '../constants/navItems';
import { movieAdvs } from '../constants/movies';
import Link from 'next/link';

interface Props {
    window?: () => Window
    mobileOpen: boolean
    sendSidebarStatus: Function
}

export default function Sidebar(props: Props) {

    const { window, mobileOpen, sendSidebarStatus } = props;

    const handleSidebar = () => {
        sendSidebarStatus(mobileOpen)
    }

    const container = window !== undefined ? () => window().document.body : undefined;
    const drawer = (
        <Box onClick={handleSidebar} >
            <Box sx={{ bgcolor: '#FFF' }}>
                <img alt='Korea Movies' src='/static/logo-text.png' className='sidebar-icon' />
            </Box>

            <Divider />
            <Box>
                <List >
                    {navItems.map((item) => (
                        <Link href={`${item.link}`} key={item.title}>
                            <ListItem disablePadding>
                                <ListItemButton >
                                    <ListItemIcon>
                                        <BubbleChart color="success" />
                                    </ListItemIcon>
                                    <ListItemText sx={{ color: '#7C9851' }} primary={item.title} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}
                </List>

            </Box>
            <Box sx={{ bgcolor: '#1b1b1b', px: 1, py: 0.5, m: 2, mt: 5 }}>
                <ImageList sx={{ width: '100%' }} cols={3} variant="woven" gap={8}>
                    {movieAdvs.map((item) => (
                        <ImageListItem key={item.title}>
                            <img
                                srcSet={`${item.img}?fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Box>
    );

    return (
        <nav>
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleSidebar}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: "block", sm: "none" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: '85%',
                        bgcolor: '#F8DBDF'
                    },
                }}
            >
                {drawer}
            </Drawer>
        </nav>
    )
}
