import React, { Component } from 'react';
import { Tab, Tabs, Paper, Typography } from '@mui/material'
import TabPanel from '../../TabPanel';
import LinearProgressColor from '../../Loading/LinearProgressColor';
import a11yProps from '../../TabPanel/fullWidth';

class AppResultContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            value : 0
        }
        this.thirdRef = React.createRef()
    }

    handleTabChange( event, newValue ) {
        this.setState({ value: newValue })
    }

    render() {
        const { value } = this.state
        const { loading,  returnResultJSON } = this.props
        return (
            <>
            <div className="app-result-container-double">
                <Paper>
                    <Tabs
                        value={value}
                        onChange={this.handleTabChange.bind(this)}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        centered
                        >
                        <Tab label="Result" {...a11yProps(0)}/>
                        <Tab label="Response JSON" {...a11yProps(1)}/>
                    </Tabs>
                </Paper>
                <TabPanel value={value} index={0}>
                {loading ? (
                    <div>
                        <LinearProgressColor />
                    </div>
                    ) : (
                    <div
                        style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        width:'100%',
                        height:'400px'
                        }}
                    >
                        {returnResultJSON&&returnResultJSON.image ?  (
                        <>
                        <div className="return-image-container">
                            <div className="image-container-result" style={{outline:"none"}}>
                                <img
                                className="result-image"
                                src={"data:image/jpeg;base64,"+returnResultJSON.image}
                                alt="merge Img"
                                />
                            </div>
                        </div>
                    </>
                        ):(
                            <>
                                <Typography>
                                {/* Please input your image to see possible{" "}
                                <strong>Face Background Result</strong> */}
                                </Typography>
                            </>
                            )}
                    </div>
                    )}

                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className="return-result-json">
                        {loading && (
                            <div>
                                <LinearProgressColor />
                            </div>
                        ) }
                        {returnResultJSON&&returnResultJSON.image?
                        (
                            <Typography variant="body1" component="h2">
                                <pre>{JSON.stringify({...returnResultJSON,image: returnResultJSON.image.substring(0,30)+"..." }, undefined, 2)}</pre>
                            </Typography>
                        ):null}
                    </div>
                </TabPanel>
            </div>
            </>
        );
    }
}

export default AppResultContainer;