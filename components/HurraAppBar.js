import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import styles from '../styles/styles';
import { useRouter } from 'next/router';
import { colorPallete } from '../styles/pallete';
import Image from 'next/image'
import EnhancedLink from './EnhancedLink';
import ElevationScroll from './ElevationScroll'
import { Container, CssBaseline } from '@material-ui/core';

const useStyles = makeStyles(styles)

export default function HurraAppBar({ children, contentMaxWidth, onDrawerToggle }) {
    const classes = useStyles();
    const router = useRouter()
    return (<>
        <ElevationScroll>
            <AppBar color="secondary" >
                    <Container maxWidth={contentMaxWidth || "lg" }>
                        <Toolbar style={{paddingLeft:0,borderBottom:'0px solid #eee'}}>
                            <IconButton
                                edge="start"
                                onClick={onDrawerToggle}
                                className={classNames(classes.menuButton, classes.sectionMobile)}
                                color="inherit"
                                aria-label="open drawer"
                            >
                                <MenuIcon />
                            </IconButton>
                            <div className={classNames(classes.logoContainer, classes.centerVertical)}>
                                <EnhancedLink href="/" style={{ flex: 1 }}><div className={classes.logoEl} /></EnhancedLink>
                            </div>
                            <div className={classNames(classes.grow)}>
                            </div>
                            <div className={classes.sectionDesktop}>
                                <div className={classes.centerVertical}>
                                    {children}
                                </div>
                            </div>
                            </Toolbar>
                    </Container>
            </AppBar>
        </ElevationScroll>        
    </>
    );
}
