import React, { Component } from 'react';
import AppDemoContainer from './AppDemoContainer';
import AppResultContainer from './AppResultContainer'
import { Alert, AlertTitle, Grid } from '@mui/material'
import { getBodyBackgroundInputImage } from '../../../api'
import { URLtoBase64,toBase64 } from '../../../utils/common'
import axios from 'axios'
import Data from '../Data'

const CancelToken = axios.CancelToken;

let cancel;

class BodyBackgroundContent extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputImage1 : Data.faceBackground.faceBackgroundLeftData[0].src,
      inputImage2: Data.faceBackground.faceBackgroundRightData[0].src,
      loading: false,
      isFileTooLarge:false,
      isValidURL:false,
      returnFaceLeft:"",
      returnFaceRight:"",
      isUploadSuccess:false,
      returnResultJSON: null
    }
    this.faceVerifyData = Data.faceBackground
}

handleAPI = async (base64Image1,base64Image2) => {
  if (cancel !== undefined) {
    cancel();
  }
  this.setState({
    loading: true,
    returnResultJSON: null
  })
  let res;
  try {
    res = await getBodyBackgroundInputImage(base64Image1,base64Image2, new CancelToken(function executor(c) {cancel = c}));
    if (res !== undefined && res!== null) {
        this.setState({
          loading: false,
          returnResultJSON: res,
          returnFaceLeft: res.face_rectangle1,
          returnFaceRight: res.face_rectangle2
        })
    }
  } catch(error)  {
    if (axios.isCancel(error)) {
      console.log("cancel")
    } else{
      this.setState({
        loading: false,
        isFileTooLarge:true
      })
      setTimeout(() => {
        this.setState({
          isFileTooLarge:false
        })
      }, 1000);
    }
  }
}

componentDidMount(){
}

handleImageGalleryChange1 = async (index) => {
  const URL = this.faceVerifyData.faceBackgroundLeftData[index].src
  const base64 = await URLtoBase64(URL)
  this.setState({
    inputImage1: base64,
    returnFaceLeft: ""
  })
}
handleImageGalleryChange2 = async (index) => {
  const URL = this.faceVerifyData.faceBackgroundRightData[index].src
  const base64 = await URLtoBase64(URL)
  this.setState({
    inputImage2: base64,
    returnFaceRight: ""
  })
}
handleChange = async (selectorFiles,index) =>{
  const file = selectorFiles[0];
  const base64Image = await toBase64(file);
  if(index===1){
    this.setState({
      inputImage1: base64Image,
      returnFaceLeft: ""
    })
  } else {
    this.setState({
      inputImage2: base64Image,
      returnFaceRight: ""
    })
  }

}
handleImgURL =  (url,index) => {
  if(this.checkURL(url)){
    if(index===1){
      this.setState({
        inputImage1: url
      })
    } else {
      this.setState({
        inputImage2: url
      })
    }
  } else {
    this.setState({
      loading: false,
      isValidURL:true
    })
    setTimeout(() => {
      this.setState({
        isValidURL:false
      })
    }, 1000);
  }
}


handleAPICall = async () => {
  const base64_1 = this.checkURL(this.state.inputImage1)?await URLtoBase64(this.state.inputImage1) : this.state.inputImage1
  const base64_2 = this.checkURL(this.state.inputImage2)?await URLtoBase64(this.state.inputImage2) : this.state.inputImage2

  await this.handleAPI(base64_1,base64_2)
}
checkURL(url) {
  return url.match(/\.(jpeg|jpg|png)$/) != null;
}
render() {
    const { inputImage2, inputImage1, loading, isFileTooLarge, isValidURL, isUploadSuccess , returnResultJSON, returnFaceLeft, returnFaceRight,imgURL } = this.state

    return (
      <>
        {isFileTooLarge && (
              <div className='alert-error'>
                <Alert severity="error" variant="filled">
                  <AlertTitle>Error</AlertTitle>
                  Your image file is too large or not valid —{" "}
                  <strong>Please try with another Image</strong>
                </Alert>
              </div>
            )}
            {isValidURL && (
              <div className='alert-error'
              >
                <Alert severity="error"  variant="filled">
                  <AlertTitle>Error</AlertTitle>
                  URL not valid
                </Alert>
              </div>
            )}
            {isUploadSuccess && (
              <div className='alert-error'
              >
                <Alert severity="success">
                  <AlertTitle>Success</AlertTitle>
                  This is a success alert — <strong>check it out!</strong>
                </Alert>
              </div>
            )}

          <section className="service-details-area ptb-100" style={{overflow:'auto'}} >
          <div className='container'>
            <Grid container spacing={1} alignItems="center">
              <Grid item lg={8} md={12} xs={12} className="grid-demo-style">
                  <AppDemoContainer
                      data_sample = {this.faceVerifyData}
                      inputImage2={inputImage2}
                      inputImage1={inputImage1}
                      loading={loading}
                      handleImageGalleryChange1 = {(index)=>this.handleImageGalleryChange1(index)}
                      handleImageGalleryChange2 = {(index)=>this.handleImageGalleryChange2(index)}
                      handleImgURL = {(url,index)=>this.handleImgURL(url,index)}
                      handleChange = {(files,index)=>this.handleChange(files,index)}
                      returnResultJSON = {returnResultJSON}
                      returnFaceLeft = {returnFaceLeft}
                      returnFaceRight = {returnFaceRight}
                      handleAPICall = {()=>this.handleAPICall()}
                    />
              </Grid>
              <Grid item lg={4} md={12} xs={12} className="grid-demo-style">
                    <AppResultContainer
                        loading={loading}
                        returnResultJSON = {returnResultJSON}
                        />
              </Grid>
            </Grid>
          </div>
        </section>
    </>
    );
  }
}

export default BodyBackgroundContent;