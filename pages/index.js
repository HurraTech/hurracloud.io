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
      <div style={{display:'flex',flexDirection:'row'}}>
          <div style={{flex:1,paddingRight:90, paddingTop:50}} >
            <Typography style={{fontWeight:'bold'}} variant="h3">Decenteralizing the cloud</Typography>
            <Typography style={{fontSize:'1.45em', color:"#333",marginTop:15}} >Hurra Cloud is a device you plug in your home to host all your private and personal data under your complete control</Typography>
            <br/><br/>
            <div style={{display:'flex',flexDirection:'row'}}>
              <Button style={{marginRight:10 }} color="primary" variant="contained" disableElevation>Pre-order in Kickstarter</Button>
              <Button color="secondary" variant="contained" disableElevation>Try a live demo</Button>
            </div>
          </div>
          <img src="/images/main_scene.svg" style={{minWidth:"40vw", minHeight:430, maxHeight:"calc(100vh - 300px)", width:"auto"}} />
      </div>
    </Layout>

  </>)
}
