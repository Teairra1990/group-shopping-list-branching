import React from 'react';
import './Header.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const base = (
<box
    component="span"
    sx={{ display: 'inline-block', mx: '4px', transform: 'scale(0.75)' }}
>
    *
</box>
);

function Header() {
    const card = (
    <React.Fragment>
        <CardContent>
            <Typography variant="h3" component="div" gutterBottom sx={{ color: 'text.primary' }}>
                My Shopping List
            </Typography>
            <br></br>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                A group work of Teairra, Al, Bryan, Patricia, and of course a thank you to Carlos.
            </Typography>

        </CardContent>
    </React.Fragment>
    )

    return (
        // <header className="banner-header">
        //     <h1>My Shopping List</h1>
        // </header>
        card
    );
}

export default Header;


