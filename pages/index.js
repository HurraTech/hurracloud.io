import { AppBar, Button, Card, Container, Grid, makeStyles, Modal, Paper, Toolbar, Typography } from '@material-ui/core'
import Head from 'next/head'
import { useState } from 'react'
import Layout from '../components/Layout'
import { colorPallete } from '../styles/pallete'
import styles from '../styles/styles'

const useStyles = makeStyles(styles)
export default function Home() {
  const classes = useStyles()
  const [videoPlaying,setVideoPlaying] = useState(false)
  
  function playVideo() {
    setVideoPlaying(true)
    if (typeof window != "undefined") {
      setTimeout(()=> document.getElementById("promoVideo").play(), 300)
    }
  }
    
  function closeVideo() {
    if (typeof window != "undefined") {
      document.getElementById("promoVideo").pause()
    }
    setVideoPlaying(false)

  }


  const features = [[
    {
      "title" :"Secure Remote Access",
      "description": <span>Access your cloud and data anywhere from your mobile or computer via <b>encrypted secure VPN</b> to your Hurra Cloud at home.</span>,
      "desktopSize": "25%",
      "image": "/images/vpn.png"
    },
    {
      "title" :"Extensible Apps Support",
      "description": "Extend your Hurra Cloud power by adding additional apps from the decentralized marketplace. Apps provide additional services such as social networking, photos albums sync, password managers, cloud drive, private file sharing, smart home control,..etc",
      "desktopSize": "25%",
      "image": "/images/apps.png"
    },
    {
      "title" :"Peer-to-peer Cloud",
      "description": "HurraCloud devices can talk to each other directly without a middle man, eliminating any centeralized authority that can censor or eavesdrop on communication with your social network or friends.",
      "desktopSize": "25%",
      "image": "/images/p2pcloud.png"
    },
    {
      "title" :"Completely Open Source",
      "description": "Both Hurra device and software are open source which means anyone can audit the code, the hardware, contribute and even build the cloud from source",
      "desktopSize": "25%",
      "image": "/images/opensource.png"
    }
  ]]

  return (<>
    <Layout contentMaxWidth="none">
      {/* Video Popup */}
      <Modal open={videoPlaying} className={classes.centerVertical} onClick={()=>closeVideo()}>
        <div className={classes.centerHorizontal} style={{width:'100%'}}>
          <video controls style={{maxWidth: 700, width:"100vw",boxShadow:"0px 0px 10px #333"}} id="promoVideo" preload>
            <source src="http://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            <source src="http://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg" />
          </video>
        </div>
      </Modal>
      {/* Section 1 */}
      <Container maxWidth="lg">
        <div style={{ paddingTop: 100 }} />
        {/* Section 1 / Desktop */}
        <div className={classes.sectionDesktop}>
          <div style={{ display: 'flex', flexDirection: 'row' }} >
            <div style={{ flex: 1, paddingRight: 90, paddingTop: 50 }} >
              <Typography style={{ fontWeight: 800 }} variant="h3">Decentralizing the cloud</Typography>
              <Typography style={{ fontSize: '1.45em', color: "#333", marginTop: 15 }} >Hurra Cloud is a device you plug in your home to host all your private and personal data under your complete control</Typography>
              <br /><br />
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Button size="large" style={{ marginRight: 10 }} color="primary" variant="contained" disableElevation>Pre-order in Kickstarter</Button>
                <Button size="large" color="secondary" variant="contained" disableElevation>Try a live demo</Button>
              </div>
            </div>
            <img src="/images/main_scene.svg" style={{ minWidth: "40vw", minHeight: 430, maxHeight: "calc(100vh - 300px)", width: "auto" }} />
          </div>
        </div>
        {/* End of Section 1 / Desktop */}

        {/* Section 1 / Mobile */}
        <div className={classes.sectionMobile}>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '0px 10px' }}>
            <img src="/images/main_scene.svg" style={{ height: "auto", maxWidth: "100%" }} />
            <Typography style={{ fontWeight: 800, marginTop: 25, textAlign: 'center' }} variant="h4">Decenteralizing the cloud</Typography>
            <Typography style={{ fontSize: '1.45em', color: "#333", marginTop: 15, textAlign: 'center' }} >Hurra Cloud is a device you plug in your home to host all your private and personal data under your complete control</Typography>
            <br /><br />
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }} >
              <Button size="large" style={{ marginBottom: 10, flex: 1 }} color="primary" variant="contained" disableElevation>Pre-order in Kickstarter</Button>
              <Button size="large" style={{ flex: 1 }} color="secondary" variant="contained" disableElevation>Try a live demo</Button>
            </div>
          </div>
        </div>
        {/* End of Section 1 / Mobile */}
      </Container>
      {/* End of Section 1 */}

      {/* Section 2 */}
      <div style={{ marginTop:50, paddingTop: 100,  paddingBottom:200, backgroundImage: "url(/images/section2bg.svg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <Container maxWidth="lg">

          {/* Section 2 / Desktop */}
          <div className={classes.sectionDesktop}>
            <div style={{ display: 'flex', flexDirection: 'row' }} >
              <img src="/images/bedroom_scene.svg" style={{ minWidth: "40vw", minHeight: 430, maxHeight: "calc(100vh - 300px)", width: "auto" }} />
              <div style={{ flex: 1, paddingLeft: 90, paddingTop: 50 }} >
                <Typography style={{ fontWeight: 700 }} variant="h5">Privacy, Security and Custody of your data, under your control</Typography>
                <Typography style={{ fontSize: '1.15em', color: "#333", marginTop: 15 }} >
                  HurraCloud replaces traditional cloud platforms (e.g. social networks,file hosting, e-mail services,..etc) which own custody of your data in their data centers.
                  <br />{" "}<br />
                  Whether it’s your identity, name, emails, friends list, passwords or any private personal data. Hurra Cloud lets you host all your data in your home under your complete control.
                </Typography>
                <br /><br />
                <Button onClick={playVideo} style={{ marginRight: 10 }} color="primary" variant="contained" disableElevation><b>WATCH:</b> &nbsp;Why traditional cloud is dangerous!</Button>
              </div>
            </div>
          </div>
          {/* End of Section 2 / Desktop */}

          {/* Section 2 / Mobile */}
          <div className={classes.sectionMobile}>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '0px 10px' }}>
              <img src="/images/bedroom_scene.svg" style={{ height: "auto", maxWidth: "100%" }} />
              <Typography style={{ fontWeight: 700, marginTop: 55, textAlign: 'center' }} variant="h6">Privacy, Security and Custody of your data, under your control</Typography>
              <Typography style={{ fontSize: '1.15em', color: "#333", marginTop: 15, textAlign: 'justified' }} >
              HurraCloud replaces traditional cloud platform (e.g. social networks) which own custody of your data in their data centers.
                  <br />{" "}<br />
                  Whether it’s your identity, name, emails, friends list, passwords or any private personal data. Hurra Cloud lets you host all your data in your home under your complete control.
              </Typography>
            </div>
          </div>
          {/* End of Section 2 / Mobile */}
        </Container>
      </div>
      {/* End of Section 2 */}



   {/* Section 3 */}
   <div style={{ marginTop:-200, paddingTop: 150, backgroundImage: "url(/images/section3bg.svg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <Container maxWidth="lg">

          {/* Section 3 / Desktop */}
          <div className={classes.sectionDesktop}>
            <div style={{width:'100%'}}>
              <Typography style={{ paddingTop:50, fontWeight: 700, marginBottom:60 }} variant="h5">A Scalable Ecosystem Designed for Privacy and Security</Typography>
                {features.map((featureRow,i)=> 
                  <Grid key={i} style={{height:"80%"}} container spacing={2}  alignItems="stretch" direction="row"> 
                  {featureRow.map((feature,i)=> <Grid item  key={i}  xs={12} style={{height:'100%'}} md={3}>
                      <Paper className={classes.featureBox} style={{height:'100%'}}>
                        {feature.image && <div style={{padding:10,height:100,marginTop:5}} className={classes.centerVertical}>
                          <img src={feature.image} style={{maxWidth:"90%"}} />
                        </div>}
                        <Typography style={{ color:colorPallete.hurra_red_light,marginTop:10, fontWeight: 800,fontSize:"1.25em" }}>{feature.title}</Typography>
                        <Typography style={{ fontWeight: 400,marginTop:5, fontSize:"1.05em" }}>{feature.description}</Typography>
                      </Paper>
                    </Grid>)}
                </Grid>
                )}
            </div>
          </div>
          {/* End of Section 3 / Desktop */}

          {/* Section 3 / Mobile */}
          <div className={classes.sectionMobile}>
            <div style={{width:'100%'}}>
              <Typography style={{ paddingTop:50, fontWeight: 700, marginBottom:20,textAlign:'center' }} variant="h6">A Scalable Ecosystem Designed for Privacy and Security</Typography>
              <Grid container spacing={2}> 
                {features.flat().map((feature,i)=> <Grid key={i} item xs={12}>
                <Paper className={classes.featureBox} style={{height:'100%',textAlign:'center'}}>
                        {feature.image && <div style={{padding:10,height:100,marginTop:5}} className={classes.centerHorizontal}>
                          <img src={feature.image} style={{maxHeight:"100%",maxWidth:"100%"}} />
                        </div>}
                        <Typography style={{ color:colorPallete.hurra_red_light,marginTop:10, fontWeight: 800,fontSize:"1.25em" }}>{feature.title}</Typography>
                        <Typography style={{ fontWeight: 400,marginTop:5, fontSize:"1.05em" }}>{feature.description}</Typography>
                      </Paper>
                  </Grid>
                )}
              </Grid>
            </div>
          </div>
          {/* End of Section 3 / Mobile */}
        </Container>
      </div>
      {/* End of Section 3 */}

    </Layout>

  </>)
}
