import {  Container, makeStyles, Divider, Typography, Link, Button, IconButton } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GithubIcon from '@material-ui/icons/GitHub';
import Toolbar from '@material-ui/core/Toolbar';

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/styles';
import HurraAppBar from './HurraAppBar';
import classNames from 'classnames';

const useStyles = makeStyles(styles)

export default function Layout({
            title,
         contentMaxWidth, 
         highlightedPage, 
         children}) {

    const classes = useStyles()
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const history = useRouter()
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };



    const navItems = [
        { text: 'Roadmap', id:"home", onClick:()=>{history.push("/roadmap")} },
        { text: 'FAQ', id:"faq" },
        { text: 'About Us', id:"aboutus"},
        { text: 'Contact Us', id:"contact"},
        {divider:true},
        { text: 'Back us on Kickstarter', variant:"contained", color:"primary", id:"kickstarter", onClick:()=>{history.push("/orders")}}, 
        { text: 'Github Repo', justIcon:true, id:"github",  Icon: GithubIcon, onClick:()=>{history.push("/account")}},

    ]
    

    const drawer = (
        <div>
            <Typography  variant="h6" noWrap className={classNames(classes.logoContainer,classes.centerVertical)}>
                <Link href="/" style={{flex:1}}><div className={classes.logoEl} /></Link>
            </Typography>
            <List >
                {navItems.map( ({ text, header, divider, Icon, id, badgeCount, onClick, color }, index) => <React.Fragment key={index}>
                    {(divider || header) && index != 0 &&<Divider style={{marginLeft:15, marginRight:15, marginTop:10, backgroundColor:"rgba(0,0,0,0.04)"}}/>}
                    {!divider && <ListItem button={!header}
                        onClick={onClick}
                        className={classNames(classes.drawerListItem, {[classes.highlightedDrawerItem]: !header && (highlightedPage == id )})}>
                        {Icon != null && <ListItemIcon className={classes.drawerIconWrapper}>
                                <Icon className={classNames(classes.drawerIcon,{[classes.primaryColor]:color=="primary" })} />
                        </ListItemIcon>}
                        <ListItemText className={classNames(classes.drawerItemText,{[classes.primaryColor]:color=="primary", [classes.drawerItemTextHeader]: header != null })} primary={text || header} />
                    </ListItem>}
                </React.Fragment >)}
            </List>
        </div>
      );
      
    const topNavItems = <>
        {navItems.map( ({ text, divider, Icon, justIcon, variant, onClick, color }, index) => <React.Fragment key={index}>
            {divider && <div className={classes.topNavDivider} />}
            {!divider && <div>
                {!justIcon? <Button variant={variant} color={color} onClick={onClick} className={classes.topNavButton}>
                    {text}
                </Button>: <IconButton onClick={onClick} className={classes.topNavIconButton}>
                    <Icon className={classNames({[classes.primaryColor]:color=="primary" })} />
                </IconButton>
                }

            </div>}
        </React.Fragment >)}
    </>
    
    return (
        <div className={classes.root}>
            <HurraAppBar maxWidth={contentMaxWidth || "lg" } onDrawerToggle={()=>setMobileOpen(!mobileOpen)}>
                {topNavItems}
            </HurraAppBar>
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="js">
                <Drawer
                    variant="temporary"
                    anchor="left"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{paper: classes.drawerPaper,}}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}>
                    {drawer}
                </Drawer>
            </Hidden>
            <main className={classes.mainContent} >
            <div className={classes.appBarPlaceholder} />
            {contentMaxWidth != "none" && <Container maxWidth={contentMaxWidth || "lg" }>
                {children}
            </Container>}
            {contentMaxWidth == "none" && <>{children}</>}
            </main>
        </div>
    );
}

