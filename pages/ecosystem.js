import { AppBar, Button, Card, Container, Grid, makeStyles, Modal, Paper, Toolbar, Typography } from '@material-ui/core'
import Head from 'next/head'
import React, { useState } from 'react'
import Layout from '../components/Layout'
import { colorPallete } from '../styles/pallete'
import styles from '../styles/styles'

const useStyles = makeStyles(styles)
export default function Ecosystem() {
    const classes = useStyles()

    const components = [
        {
          "title" :"Hurra Anonymouse User Node",
          "description": <span>Hurra user nodes are basically Hurra Devices which are hosted in user's homes. Those nodes host their owners personal data and not shared with the rest of the cloud. They can communicate with other nodes (e.g. user or developer/service nodes) by sending encrypted messages that can only be decrypted by the recepient. <br/><br/>They can also register some information on the blockchain such as public identities (e.g. nicknames), which will enable other users to find them.</span>,
          "desktopSize": 6,
          "image": "/images/hurradevice.svg"
        },
        {
          "title" :"Hurra Service/Developer Node",
          "description": <span>Those are very similar to Hurra user nodes, except they are deployed by developers and service providers. The job of those nodes is to respond to inquiries made by user nodes, and provide data or apps needed by the users. This is how developers publish their apps, they register them in the blockchain and make them available by serving them from the developer nodes.<br/><br/>Note: those nodes do NOT store user's personal data, their role is to enable develoeprs to publish apps or provide supporting data used by their apps. Users personal data always stay in personal Hurra devices</span>,
          "desktopSize": 6,
          "image": "/images/hurradev.svg"
        },
        {
          "title" :"Hurra Blockchain",
          "description": <span>Hurra blockchain is P2P blockchain that will be deployed on the Polkadot relay chain. It enables Hurra node to submit and retrieve globally consistent shared data such as identity names, app names, app purchase transactions,..etc.<br/><br/>This global state data is essential to run the cloud. For example, if you need send a text to user, your node will search for that user name in the identity registry so it can understand how to encrypt and send the message to your friend device directly.</span>,
          "desktopSize": 12,
          "image": "/images/blockchain.svg"
        },
        // {
        //   "title" :"Completely Open Source",
        //   "description": "Both Hurra device and software are open source which means anyone can audit the code, the hardware, contribute and even build the cloud from source",
        //   "desktopSize": "25%",
        //   "image": "/images/opensource.png"
        // }
      ]

      
    return <Layout contentMaxWidth="none" secondaryPage={true}>
        <Container maxWidth="md">
            <Typography variant="h3" style={{textAlign:'center', fontWeight:700,padding:10, marginTop:50, width:"100%"}}>
                Hurra P2P Cloud Ecysostem
            </Typography>
            <Typography variant="h6" style={{textAlign:'center', marginTop:40,fontSize:"1.3em", fontWeight:500,color:"#222"}}>
                <img src="/images/ecosystem.svg" style={{maxWidth:"100%"}} />
            </Typography>
        </Container>
        <div style={{background:"#fafafa", marginTop:50, paddingTop:50, minHeight:"100vh"}}>
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    {components.map((feature,i)=> <Grid key={i} md={feature.desktopSize} item xs={12}>
                        <Paper className={classes.featureBox} style={{height:'100%'}}>
                            {feature.image && <div style={{padding:10,height:feature.desktopSize > 6 ? 200 : 100,marginTop:5}} >
                            <img src={feature.image} style={{maxHeight:"100%"}} />
                            </div>}
                            <Typography style={{ color:colorPallete.hurra_red_light,marginTop:10, fontWeight: 800,fontSize:"1.25em" }}>{feature.title}</Typography>
                            <Typography style={{ fontWeight: 400,marginTop:5, fontSize:"1.05em" }}>{feature.description}</Typography>
                        </Paper>
                    </Grid>)}
                </Grid>
            </Container>
            <br/><br/>
        </div>
    </Layout>

}