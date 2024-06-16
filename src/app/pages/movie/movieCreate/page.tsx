"use client"
import { Autocomplete, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../../../../theme/Theme'

const movieGroups = [
    { label: 'Group 1', year: 1994 },
    { label: 'Group 3', year: 1972 },
    { label: 'Group 2', year: 1974 },
  ];

export default function MovieCreate() {
    return (
        <Container sx={{ px: 1, py: 2 }}>
            <Typography sx={{ color: theme.palette.secondary.main, fontWeight: 500, fontSize: 17, mb: 3, mt: 2 }}>
                Add New Movie
            </Typography>
            <form>
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item xs={4}>
                        Group :
                    </Grid>
                    <Grid item xs={8}>
                    <Autocomplete
                    size='small'
                        disablePortal
                        id="combo-box-demo"
                        options={movieGroups}
                        renderInput={(params) => <TextField {...params} label="Group" />}
                        />

                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ alignItems: 'center', mt: 1 }}>
                    <Grid item xs={4}>
                        Password :
                    </Grid>
                    <Grid item xs={8}>
                        <TextField fullWidth size='small' id="outlined-basic" label="Outlined" variant="outlined" />
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ alignItems: 'center', mt: 1 }}>
                    <Grid item xs={4}>
                        Group Name <br /><small className='text-muted'>(From Telegram) : </small>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField fullWidth size='small' id="outlined-basic" label="Outlined" variant="outlined" />
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ textAlign: 'center', mt: 2 }}>
                    <Grid item xs={12}>
                        <Button color='success' variant='contained' >Add My Group</Button>
                    </Grid>
                </Grid>

            </form>
        </Container>
    )
}
