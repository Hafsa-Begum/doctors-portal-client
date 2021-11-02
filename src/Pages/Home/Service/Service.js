import { Container, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Service = ({ service }) => {
    const { name, description, image } = service;
    return (

        <Grid item xs={4} sm={4} md={4}>

            <Card sx={{ maxWidth: 345, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    height="80"
                    image={image}
                    alt="green iguana"
                    style={{
                        width: 'auto',
                        textAlign: 'center',
                        margin: '0 auto'
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>

        </Grid>

    );
};

export default Service;