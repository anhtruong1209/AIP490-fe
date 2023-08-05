import React, { Component } from 'react';
import { Grid } from '@mui/material'
import withTransHook from '../../../HOC/withTranslate';
import baseRs from '../../../utils/baseRs';
class FaceBackgroundScenarios extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render() {
        const { trans } = this.props
        return (
          <>
            <section className="service-details-area pb-50" style={{overflow:'auto'}} >
                <div className="container">
                    <Grid container spacing={1} className="scenarios">
                        <Grid item lg={12} md={12} xs={12} justifyContent="center" className="grid-demo-style" >
                            <p>{trans['screnarios']}</p>
                        </Grid>

                        <Grid item lg={6} md={12} xs={12} justifyContent="right" className="grid-demo-style image" >
                            <img src={baseRs + "others/scenee1.jpg"}></img>
                            <p style={{fontSize:"15px"}}>{trans['screnarios.content15']}</p>
                        </Grid>
                        <Grid item lg={6} md={12} xs={12} justifyContent="left" className="grid-demo-style image" >
                            <img src={baseRs + "others/scenee2.jpg"}></img>
                            <p style={{fontSize:"15px"}}>{trans['screnarios.content16']}</p>
                        </Grid>
                    </Grid>
                </div>
            </section>
          </>
        );
    }
}

export default withTransHook(FaceBackgroundScenarios);