import { Star } from "@mui/icons-material";
import { Avatar, Box, Button, Chip, Divider, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Stack, TextField, Typography } from "@mui/material";
import SmallChip from "./components/SmallChip";
import MovieListItem from "./components/MovieListItem";

const label = { inputProps: { "aria-label": "Switch demo" } };

const  movies = [
  {
    title: 'Boys Over Flower1',
  },
  {
    title: 'Boys Over Flower2',
  },
  {
    title: 'Boys Over Flower3',
  },
  {
    title: 'Boys Over Flower4',
  },
  {
    title: 'Boys Over Flower5',
  },
  {
    title: 'Boys Over Flower6',
  },
  {
    title: 'Boys Over Flower7',
  },
  {
    title: 'Boys Over Flower8',
  },
]

export default function Home() {
  return (
    <Box sx={{ px: 1, py: 2 }}>
      
      <Stack
        direction="row"
        spacing={2}
      >
        <TextField fullWidth id="outlined-basic" placeholder="Search" size="small" />
        <Button color="success" disableElevation variant="contained">Search</Button>
        </Stack>
      <Box>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {
            movies.map((movie) => (
              <Box key={movie.title}>
                <MovieListItem title={movie.title} label="Drama, Romance" secondLabel="Lee Min Ho, Park Shin Hey" noStar={200} trailLabel="Korea" />
                <Divider component="li" />
              </Box>
            ))
          }
          
        </List>
      </Box>
    </Box>
  );
}