import { AppBar, Button, Card, Container, Grid, IconButton, makeStyles, Modal, Paper, Toolbar, Typography } from '@material-ui/core'
import Head from 'next/head'
import React, { useState } from 'react'
import Layout from '../components/Layout'
import { colorPallete } from '../styles/pallete'
import styles from '../styles/styles'
import PlayIcon from '@material-ui/icons/PlayCircleFilled'
const useStyles = makeStyles(styles)
export default function AboutUs() {
    const classes = useStyles()
    const [isVideoPlaying,setVideoPlaying] = useState(false)

    function playVideo() {
        setVideoPlaying(true)
        document.getElementById("missionVideo").play()
    }

    return <Layout highlightedPage="about"  contentMaxWidth="none" secondaryPage={true}>
        <Container maxWidth="md">
            <Typography variant="h3" style={{textAlign:'center', fontWeight:700,padding:10, marginTop:50, width:"100%"}}>
                Our Mission
            </Typography>
            <Typography variant="h6" style={{marginTop:15,fontSize:"1.3em", textAlign:'center', fontWeight:500,color:"#222"}}>
                Our mission is to create new decentralized peer-to-peer cloud which protects the privacy of users personal data and remove the custody of any centeral authority. Watch the video play to learn more about our mission.
            </Typography>
            <div variant="h6" style={{position:'relative', marginTop:15, textAlign:"center"}}>
                <video id="missionVideo"  style={{maxWidth: 700, width:"100vw", }} controls playsInline poster="https://drive.google.com/uc?export=download&id=1WCnUMVrPJKOlJ-fubHj-8taSQ32Ce92d">
                    <source src="https://www.googleapis.com/drive/v3/files/1C5Sh8-9j8RV35PksIwpedneiFKfNpLHv?alt=media&key=AIzaSyDar3VRtFODPyvYhOPEQrcaJTptqQXk9Rg" type="video/mp4"/>
                    <source src="https://www.googleapis.com/drive/v3/files/1C5Sh8-9j8RV35PksIwpedneiFKfNpLHv?alt=media&key=AIzaSyDar3VRtFODPyvYhOPEQrcaJTptqQXk9Rg" type="video/webm"/>
                </video>

                {!isVideoPlaying && <IconButton onClick={()=>playVideo()} style={{  position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)"}} ><PlayIcon style={{ width:100,height:100}} /> </IconButton>}
            </div>
        </Container>
        <div style={{background:"#fafafa", marginTop:50, paddingTop:50, minHeight:"100vh"}}>
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h3" style={{textAlign:'center', fontWeight:700,padding:10, marginTop:10, width:"100%"}}>
                            Who we are
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper>
                                <div style={{padding:20}}>
                                    <img style={{maxHeight:300}} src="/images/aiman.png" />
                                    <Typography variant="h5" style={{paddingBottom:15, marginBottom:15,borderBottom:'1px solid #eee', fontWeight:700,color:colorPallete.hurra_red_light}}>
                                        Aiman Najjar
                                    </Typography>
                                    <Typography variant="h6" className={classes.roadmapPhaseDescription}>
                                        Aiman is a Cloud Architect & DevOps Consultant helping companies adopt Cloud Compute platforms such as Amazon Web Services (AWS) and Google Cloud Platform (GCP). He has worked directly with Google Delivery Services on high-profile engagements to accelerate Google's clients cloud adoption. Previously, Aiman worked at companies such as Cray (supercomputer manufacturer), Electronic Arts (video games developer) and Couchbase (database software developer).
                                    </Typography>
                                    <br/>
                                </div>
                            </Paper>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Paper>
                                <div style={{padding:20}}>
                                    <div style={{width:"100%", height:300, backgroundSize:"cover", backgroundPosition:' center -50px', backgroundImage: "url(/images/maan.jpg)" }} />
                                    <Typography variant="h5" style={{paddingBottom:15, marginBottom:15,borderBottom:'1px solid #eee', fontWeight:700,color:colorPallete.hurra_red_light}}>
                                        Maan Najjar
                                    </Typography>
                                    <Typography variant="h6" className={classes.roadmapPhaseDescription}>
                                        Maan is a Lead Mobile Software Engineer with extensive experience building mobile applications in both iOS and Android worlds. He successfully led the efforts to develop a very technically-complex mobile Android application for Anchor which was ultimately acquired for $140 million dollars by Spotify in 2019. Maan has also worked previously for companies such as The New York Times and Digg where he also developed very complex suites of mobile applications for them.
                                    </Typography>
                                    <br/>
                                </div>
                            </Paper>
                    </Grid>
                </Grid>
            </Container>
            <br/><br/>
        </div>
    </Layout>

}