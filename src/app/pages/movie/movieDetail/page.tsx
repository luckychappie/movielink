"use client"
import SmallChip from '@/app/components/SmallChip'
import AddIcon from '@mui/icons-material/Add';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Autocomplete, Avatar, Box, Button, Container, IconButton, List, ListItem, ListItemAvatar, TextField, Typography } from '@mui/material'
import Link from 'next/link';
import React from 'react'

const movieGroups = [
  { label: 'Group 1', year: 1994 },
  { label: 'Group 3', year: 1972 },
  { label: 'Group 2', year: 1974 },
];

export default function MovieDetail() {
  return (
    <Container disableGutters sx={{ py: 2 , bgcolor: '#FAFAFA'}}>
      <Box sx={{display: 'flex', alignItems: 'center', px:1}}>
        <Avatar src='/static/movie-adv/m1.jpg' variant="rounded" sx={{ width: 100, height: 100 }} alt='Boys Over Flower' />
        <div className='movie-info'>
          <h3 className='movie-title'>Boys Over Flower <SmallChip label='2017' /> </h3>
          <label className='movie-type'>Drama, Romance, Comedy</label>
          <label className='movie-actor'><b>Actors:</b> Park Shin Hey, Lee Min Ho</label>
          <label className='movie-ep'><strong>Episodes:</strong> 12</label>
        </div>
      </Box>
      <Box sx={{bgcolor: 'white', p: 1, mt:1, mx: 1, fontSize: 12}}>
        <strong> Description:</strong> Heir to Jeguk Group.[21] He is the son of his father's mistress, but is listed in the family registry as the son of the second wife in orde....
      </Box>
      <Box sx={{p:1, mt:3, bgcolor: '#FFF'}}>
        <Box  sx={{ display: 'flex', alignItems: 'center'}}>
        <Autocomplete
          disablePortal
          size="small"
          id="combo-box-demo"
          options={movieGroups}
          sx={{ width: 300 , mr: 1 }}
          renderInput={(params) => <TextField {...params} label="Groups" />}
        />
        <Link href='/pages/group/addGroup'><Button  color='success' size='large' variant="contained" sx={{px: 0, minWidth: 38}} disableElevation>
          <AddIcon />
        </Button></Link>
        </Box>
        <Box>
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <h4 className='text-green'>Group Name here will come <SmallChip label='Public' /></h4>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
            <IconButton color='primary' aria-label="Favourite" >
              <StarBorderIcon />
            </IconButton>
            <Button size='small' variant="contained" endIcon={<TelegramIcon />} sx={{bgcolor: '#DE6F90', color: '#fff', height: 25, textTransform: 'capitalize'}} disableElevation>
              Join
            </Button>
            </Box>
          </Box>
          <label><span className='text-pink'> Display Quality:</span> 1080, 720, 360</label>
          <Typography sx={{mt: 1, fontWeight: 500}}>Series Link Telegram :</Typography>
          <Box>
            Ep 1: https://t.me/xyz778899/23 <br />
            Ep 2: https://t.me/xyz778899/23 <br />
            Ep 3: https://t.me/xyz778899/23 <br />
            Ep 4: https://t.me/xyz778899/23 <br />
            Ep 5: https://t.me/xyz778899/23
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
