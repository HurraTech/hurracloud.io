import { darken, fade, lighten, withStyles  } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';
import { colorPallete } from './pallete';

export const drawerWidth = 300;
export const secondaryDrawerWidth = 350;

export const GlobalCss = withStyles(theme=>({
  '@global': {
    ".MuiPaper-elevation4": {
      boxShadow:'0px 1px 4px #eee !important',
      border:'1px solid #eee !important',
      borderRadius:"0px  !important",
    },
    ".MuiButton-label": {
      textTransform:"none  !important",
      fontWeight:600,
      fontSize:'11pt'
    },
  },
}))(() => null);

export default theme => ({
    root: {
      minHeight: '100vh',
      backgroundColor:"#fff"
    },
    logoContainer: {
      height:100,
    },
    logoEl: {
      backgroundImage:'url("/images/logo.svg")',
      backgroundRepeat: "no-repeat",
      backgroundPosition:'center left',
      backgroundSize: 'contain',
      height: 80,
      width:230 
    },
    centerVertical: {
      display:'flex',
      flexDirection:'row',
      alignItems:'center'
    },
    centerHorizontal: {
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },

    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    appBarPlaceholder: {
      height:100
    },
    topNavButton: {
      textTransform:'none',
      fontWeight:'bold',
      marginRight:10
    },
    topNavIconButton: {
      color:"#000000",
      marginRight:10
    },
    topNavDivider: {
      width:'1px', 
      backgroundColor:"#eee", 
      height:'30px',
      marginRight:10
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },


    drawer: {
      zIndex:"1290 !important",
      // boxShadow:'1px 0px 2px #333 !important',
      boxShadow:'1px 0px 2px #ddd !important',
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: drawerWidth,
      border:0,
      borderRadius:0,
      boxShadow:'none',
      // borderRight:'1px solid #f0f0f0',
      // backgroundColor:"#303843",
      backgroundColor:"#ffff",
    },
    drawerListItem: {
      padding:"10px 10px"
    },

    drawerItemText: {
      // color:"#fff",
      color:"#000000",
      paddingLeft:10,
      '& > span': {
        fontWeight:600,
        fontSize:'11pt'
      }
    },
    drawerItemTextHeader: {
      paddingTop:10,
      '& > span': {
        fontWeight:700,
        fontSize:'9pt',
        paddingLeft: 5,
        color:"#333",
        textTransform:'uppercase',
      }
    },

    drawerIconWrapper: {
      width:40,
      height:40,
      borderRadius:20,
      minWidth:0,
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
    },

    drawerIcon: {
      // color:"#fff",
      color:"#303843",
      width:20,
      height:20,
    },
 
    highlightedDrawerItem: {
      backgroundColor:colorPallete.hurra_red_light +" !important",
      color: "#fff",
      '& $drawerItemText': {
        '& > span': {
          fontWeight:'600'
        },
        color: "#fff !important",
      },
      '& $drawerIcon': {
        color: "#fff !important"
      }
    },

});
