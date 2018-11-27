import React from 'react';
import { Menu, Icon } from 'semantic-ui-react'


const styles = {
  navbar: {
    backgroundColor: 'orange',
    margin: '1rem',
    display: 'flex',
    width: '100%',
    position: 'relative',
    fontSize: '1.2em',
    fontColor: 'white'
  },
};

const Navbar = ({ handleRefreshClick }) => (
    <div style={ styles.navbar }>
        <Menu pointing secondary>
                <Menu.Item onClick={() => handleRefreshClick()}><Icon name='refresh' /></Menu.Item>
                <Menu.Item href="https://github.com/Tsionad/Subreddit-Listings"><img alt="" src="../../public/githubicon.png" /></Menu.Item>
        </Menu>
    </div>
)

export default Navbar;