import { AppBar, Button, Grid, makeStyles, Toolbar, Typography } from '@material-ui/core'
import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/styles'

const useStyles = makeStyles(styles)
export default function Home() {
  const classes = useStyles()

  return (<>
    <Layout>
      <div style={{paddingTop:100}} />
        {/* Section 1 / Desktop */}
        <div className={classes.sectionDesktop}>
          <div style={{display:'flex',flexDirection:'row'}} >
              <div style={{flex:1,paddingRight:90, paddingTop:50}} >
                <Typography style={{fontWeight:800}} variant="h3">Decenteralizing the cloud</Typography>
                <Typography style={{fontSize:'1.45em', color:"#333",marginTop:15}} >Hurra Cloud is a device you plug in your home to host all your private and personal data under your complete control</Typography>
                <br/><br/>
                <div style={{display:'flex',flexDirection:'row'}}>
                  <Button style={{marginRight:10 }} color="primary" variant="contained" disableElevation>Pre-order in Kickstarter</Button>
                  <Button color="secondary" variant="contained" disableElevation>Try a live demo</Button>
                </div>
              </div>
              <img src="/images/main_scene.svg" style={{minWidth:"40vw", minHeight:430, maxHeight:"calc(100vh - 300px)", width:"auto"}} />
          </div>
      </div>
      {/* Section 1 / Mobile */}
      <div className={classes.sectionMobile}>
        <div style={{display:'flex',flexDirection:'column',padding:'0px 10px'}}>
            <img src="/images/main_scene.svg" style={{height:"auto", maxWidth:"100%"}} />
            <Typography style={{fontWeight:800,marginTop:25,textAlign:'center'}} variant="h4">Decenteralizing the cloud</Typography>
            <Typography style={{fontSize:'1.45em', color:"#333",marginTop:15,textAlign:'center'}} >Hurra Cloud is a device you plug in your home to host all your private and personal data under your complete control</Typography>
            <br/><br/>
            <div style={{display:'flex',flexDirection:'row', flex:1}} >
              <Button style={{marginRight:10,flex:1 }} color="primary" variant="contained" disableElevation>Pre-order in Kickstarter</Button>
              <Button style={{flex:1}} color="secondary" variant="contained" disableElevation>Try a live demo</Button>
            </div>
        </div>
      </div>


    </Layout>

  </>)
}
