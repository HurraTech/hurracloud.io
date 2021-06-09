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
import EnhancedLink from './EnhancedLink';

const useStyles = makeStyles(styles)

export default function Layout({
         secondaryPage,
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
        { text: 'Roadmap', id:"roadmap", link:"/roadmap" },
        { text: 'Ecosystem', id:"ecosystem", link:"/ecosystem" },
        { text: 'About Us', id:"about", link:"/about" },
        { text: 'Contact Us', id:"contact", link:"mailto:contact@hurratech.com" },
        {divider:true},
        { text: 'Back us on Kickstarter', variant:"contained", color:"primary", id:"kickstarter", link:"https://www.kickstarter.com/projects/hurracloud/1096069573" }, 
        { text: 'Github Repo', justIcon:true, id:"github",  Icon: GithubIcon, onClick:()=>{window.open("https://github.com/HurraTech", '_blank').focus()}},

    ]
    

    const drawer = (
        <div>
            <List >
                {navItems.map( ({ text, header, divider, Icon, justIcon, id, link,onClick, color }, index) => <React.Fragment key={index}>
                    {(divider || header) && index != 0 &&<Divider style={{marginLeft:15, marginRight:15, marginTop:10, backgroundColor:"rgba(0,0,0,0.04)"}}/>}
                    {!divider && <ListItem button={!header}
                        href={link}
                        onClick={onClick}
                        component={justIcon? "li": EnhancedLink} 
                        className={classNames(classes.drawerListItem, {[classes.highlightedDrawerItem]: !header && (highlightedPage == id )})}>
                        {Icon != null && <ListItemIcon  className={classes.drawerIconWrapper}>
                                <Icon className={classNames(classes.drawerIcon,{[classes.primaryColor]:color=="primary" })} />
                        </ListItemIcon>}
                        {!justIcon && <ListItemText className={classNames(classes.drawerItemText,{[classes.primaryColor]:color=="primary", [classes.drawerItemTextHeader]: header != null })} primary={text || header} />}
                    </ListItem>}
                </React.Fragment >)}
            </List>
        </div>
      );
      
    const topNavItems = <>
        {navItems.map( ({ id,text, divider, Icon, justIcon, variant, link, color, onClick }, index) => <React.Fragment key={index}>
            {divider && <div className={classes.topNavDivider} />}
            {!divider && <div>
                {!justIcon? <Button href={link}  component={EnhancedLink} variant={variant} color={color} className={classes.topNavButton}>
                    {highlightedPage == id ? <b>{text}</b> : text}
                </Button>: <IconButton href={link}  onClick={onClick} className={classes.topNavIconButton}>
                    <Icon className={classNames({[classes.primaryColor]:color=="primary" })} />
                </IconButton>
                }

            </div>}
        </React.Fragment >)}
    </>
    
    return (
        <div className={classes.root}>
            <HurraAppBar showBorder={secondaryPage} maxWidth={contentMaxWidth || "lg" } onDrawerToggle={()=>setMobileOpen(!mobileOpen)}>
                {topNavItems}
            </HurraAppBar>
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden mdUp implementation="js">
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

