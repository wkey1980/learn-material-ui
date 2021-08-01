import React from 'react'

// Import Material UI Components
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import Menu from '@material-ui/icons/Menu'

const Navbar = () => {
    return (
        <div>
            <AppBar position="sticky" style={{backgroundColor: "green"}}> {/* Set colours via React theme and NOT inline styles. */}
                <Toolbar>
                    <IconButton aria-aria-label="app" color="inherit">
                        <Menu>
                            
                        </Menu>
                    </IconButton>
                    <Typography variant="h6">Test Material UI app Bar</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
