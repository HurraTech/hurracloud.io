import { AppBar, Button, Card, Container, Grid, makeStyles, Modal, Paper, Toolbar, Typography } from '@material-ui/core'
import Head from 'next/head'
import React, { useState } from 'react'
import Layout from '../components/Layout'
import { colorPallete } from '../styles/pallete'
import styles from '../styles/styles'

const useStyles = makeStyles(styles)
export default function Roadmap() {
    const classes = useStyles()
    const phases = [{
        title: "MVP Launch",
        current:true,
        description: <>
            In this phase, we are buliding two hardware versions of Hurra Cloud: HurraCloud Lite (400 GB or 4 TB Internal Storage) & HurraCloud NAS (512 GB Internal Storage). Both versions will have USB3 support for additional USB storage. However, only NAS version will have expandable SATA slots for additional SATA hard drives. Once completed, we will deliver those devices to our backers in Kickstarter Campaign. <br/>
            <br/>
            We are also working on parallel on building both Web, Android & iOS apps for users to manage and access their home-based clouds securley anywhere in the world.
        </>,
        goals: [
            "✅ Build & ship Hurra Cloud Devices to our Kickstarter Backers",
            "📱 Release iOS & Android apps to enable users to manage and access their data stored in their Hurra Cloud",
            "🚀 Basic platform functionalities include: file storage & syncing with other devices, file indexing & search, encrypted remote VPN access."
        ]
    },{
        title: "P2P Decentralized Cloud",
        description: <>
            In this phase, after our Kickstart backers have deployed their Hurra cloud devices. TWe will build roll out the infrastrucure the facilitates communication between those deveices using P2P Decentralized Cloud architecture. 
            <br/>
            Blockchain integration on Polkadot will be completed which will facilitate managing the global state of the Hurra P2P Cloud.
        </>,
        goals: [
            "✅ Build and deploy Hurra chain on Polkadot or Kusama (note: implementation may be either Parachains, Parathreads or Smart contracts depending on the state of Polkadot development)",
            "💵 Our early Kickstarter backers will be sent Hurra Tokens which are used for various Hurra cloud operations on the blockchain (e.g. purchasing apps from other developers)",
            "🗂 Develop identity management system which will enable Hurra cloud users to discover each others on the Hurra chain",
            "📞 Implement encrypted anonymouse peer-to-peer messaging between Hurra cloud devices"
        ]
    },
    {
        title: "Developer frameworks & SDKs",
        description: <>
            In this phase, we will flush out all the remaining parts of the SDKs which will enable developers build third party open-source apps on the Hurra cloud. 
            <br/>
            We will ensure the Hurra SDK is built using trustless approach, which will assume all apps cannot be trusted with user's personal data. Therefore, the framework ensures apps will not be able to communicate outside of the Hurra P2P cloud and the supporting blockchain.
        </>,
        goals: [
            "✅ Deliver SDK tools to developers",
            "📃 Provide sample apps and documentation for app development on Hurra",
            "📞 Build outreach programs to partner with developers who will build wide variety of applications for the Hurra cloud",
            "👨‍💻 Deliver third-party beta applications to our Hurra cloud users who are interested in enrolling in the beta program"
        ]
    },
    {
        title: "Decentralized app store rollout",
        description: <>
            In this phase, we will build and rollout the decentralized app store on the blockchain.
            <br/>
            Developers will be able to deploy their apps on the blockchain, users will be able to purchase and install the apps using the Hurra Token.
        </>,
        goals: [
            "✅ Rollout decentralized app store",
            "🗂 Developers will deploy their apps in the cloud",
            "👨‍💻 Users will be able to use their Hurra Tokens to purchase apps from the store"
        ]
    }]
    return <Layout highlightedPage="roadmap" contentMaxWidth="none" secondaryPage={true}>
        <Container maxWidth="md">
            <Typography variant="h3" style={{textAlign:'center', fontWeight:700,padding:10, marginTop:50, width:"100%"}}>
                Launch Roadmap
            </Typography>
            <Typography variant="h6" style={{marginTop:15,fontSize:"1.3em", fontWeight:500,color:"#222"}}>
                We believe in ship-fast approach. Therefore we planned our launch roadmap to be broken down into phases so we can continue delivering products and new features as soon as possible. Below you can view the launch phases planned so far.
            </Typography>
        </Container>
        <div style={{background:"#fafafa", marginTop:50, paddingTop:50, minHeight:"100vh"}}>
            <Container maxWidth="md">
                <Grid container spacing={2}>
                {phases.map((phase,i)=> <Grid key={i} item xs={12}>
                        <Paper>
                            <div style={{padding:20}}>
                                <Typography variant="h5" style={{paddingBottom:15, marginBottom:15,borderBottom:'1px solid #eee', fontWeight:700,color:colorPallete.hurra_red_light}}>
                                    {phase.title}{phase.current? " [Current Phase]" :""}
                                </Typography>
                                <Typography variant="h6" className={classes.roadmapPhaseDescription}>
                                    {phase.description}
                                </Typography>
                                <br/>
                                <Typography variant="h6" style={{fontSize:"1.1em", marginBottom:5, fontWeight:700,color:"#222"}}>
                                    Goals for this phase
                                </Typography>
                                <Typography variant="h6" style={{lineHeight:1.8, fontSize:"1em", fontWeight:500,color:"#222"}}>
                                    {phase.goals.map((goal,i)=> <React.Fragment key={i}>{goal}<br/></React.Fragment>)}
                                </Typography>
                            </div>
                        </Paper>
                    </Grid>)}
                </Grid>
            </Container>
            <br/><br/>
        </div>
    </Layout>

}