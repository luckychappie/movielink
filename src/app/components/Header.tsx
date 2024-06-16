"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Sidebar from './Sidebar';
import { pink } from '@mui/material/colors';
import Link from 'next/link'

function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box>
      <AppBar position="fixed" elevation={0} className='appBar'>
        <Container maxWidth="xl">
          <Toolbar disableGutters variant="dense" className='appToolbar'>
            <Link href="/">
              <img alt='Korea Movies' src='/static/logo-text.png' />
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}></Box>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon sx={{ color: pink[300] }} />
              </IconButton>

            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Sidebar mobileOpen={mobileOpen} sendSidebarStatus={handleDrawerToggle}  />
    </Box>
  );
}
export default Header;