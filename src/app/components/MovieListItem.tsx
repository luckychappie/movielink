import React from 'react'
import { Avatar, Box, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from "@mui/material";
import SmallChip from './SmallChip';
import { Star } from '@mui/icons-material';
import Link from 'next/link';

interface Props {
    title: string
    label: string
    secondLabel: string
    noStar: number
    trailLabel: string
}

export default function MovieListItem(props: Props) {
    return (
        
            <ListItem  button component={Link} href={`/pages/movie/movieDetail`} secondaryAction={
                <Box sx={{ color: '#DE6F90', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Stack direction="row" sx={{ alignItems: 'center', mb: 0.7 }}> <Star sx={{ mr: 0.5 }} /> <small className="text-small">{props.noStar}</small></Stack>
                    <SmallChip label={props.trailLabel} isOutlined={true} />
                </Box>
            } sx={{ bgcolor: '#5457540a' }} className="movie-list-item">
                <ListItemAvatar>
                    <Avatar alt="Boys over flower" src="/static/movie-adv/m1.jpg" variant="rounded" sx={{ width: 60, height: 60 }} />
                </ListItemAvatar>
                <ListItemText sx={{ px: 2 }}>
                    <Typography variant="subtitle2" sx={{ display: "flex", alignItems: 'center' }} gutterBottom>
                        {props.title} <SmallChip label="Ongoing" />
                    </Typography>
                    <Typography variant="body2" gutterBottom>{props.label}</Typography>
                    <Typography variant="body2" gutterBottom>Actors: {props.secondLabel}</Typography>
                </ListItemText>
            </ListItem>
       
    )
}
