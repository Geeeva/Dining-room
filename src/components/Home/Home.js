import React from 'react';
import {Helmet} from "react-helmet";

const home = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>The Dining Room | Welcome</title>
                <meta name="keywords" 
                        content="menu, founded"
                />
                <meta
                    name="description"
                    content="Welcome to The Dining Room, site with best selection of restaurants"
                />
            </Helmet>
            <div className="home-route">
                <h1>Welcome to The Dining Room!</h1>
                <p>Bon appetit!</p>
            </div>
        </React.Fragment>
    );
}

export default home;