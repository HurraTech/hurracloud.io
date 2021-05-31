import { AppBar, Button, Card, Container, Grid, makeStyles, Modal, Paper, Toolbar, Typography } from '@material-ui/core'
import Head from 'next/head'
import React, { useState } from 'react'
import Layout from '../components/Layout'
import { colorPallete } from '../styles/pallete'
import styles from '../styles/styles'

const useStyles = makeStyles(styles)
export default function Ecosystem() {
    const classes = useStyles()
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

                </Grid>
            </Container>
            <br/><br/>
        </div>
    </Layout>

}