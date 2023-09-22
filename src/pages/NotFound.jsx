import { Button, Card } from '@material-tailwind/react';
import React from 'react';
import {Link} from "react-router-dom";


const NotFound = () => {
    return (
        <Card className="min-h-screen  flex items-center justify-center">
            <h1 className='s-xl'>404 Route Not Found</h1>
            <Button><Link to='/'style={{textDecoration:'none'}} variant="primary">Back To Home Page</Link></Button>
        </Card>
    );
};

export default NotFound;
