import React, { Component } from 'react';
import { Publish } from '@mui/icons-material'
import { Grid, CircularProgress } from '@mui/material'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import CircleLoading from '../../Loading/CircleLoader';
class AppDemoContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            activeImg:1,
            imgURL:""
        }
        this.secondaryRef = React.createRef();
        this.thirdRef = React.createRef();
        this.imgRef1 = React.createRef();
        this.container1Ref = React.createRef();
        this.imgRef2 = React.createRef();
        this.container2Ref = React.createRef();
    }
    componentDidMount(){

    }
    renderRectangle (returnResultJSON,containerRef,imgRef){
        const { naturalHeight, naturalWidth, clientWidth, clientHeight } = imgRef.current
            const { offsetHeight, offsetWidth } = containerRef.current
            const ratioHeight = clientHeight/naturalHeight
            const ratioWidth = clientWidth/naturalWidth
        return (
            <>
            <div
            style={{
                position: "absolute",
                outline: "rgb(74, 171, 232) solid 2px",
                zIndex: 10,
                transform: "rotateZ(0deg)",
                width: (returnResultJSON.width)*ratioWidth,
                height: (returnResultJSON.height)*ratioHeight,
                left:(offsetWidth-clientWidth)/2+ returnResultJSON.left*ratioWidth,
                top:(offsetHeight-clientHeight)/2+ returnResultJSON.top*ratioHeight,
            }}
            >

            </div>
            </> )
    }
    setImgURL  = (url) => {
        this.setState({
          imgURL:url
        })
      }
    render() {
        const { loading, inputImage1,inputImage2,returnFaceLeft,returnFaceRight, data_sample,handleAPICall, handleImageGalleryChange1, handleImageGalleryChange2,returnResultJSON, handleChange,handleImgURL } = this.props;
        const { activeImg,imgURL } = this.state;
        const secondaryOptions = {
            type: "slide",
            width: "100%",
            rewind: true,
            gap: "1.3rem",
            pagination: false,
            fixedWidth: 110,
            fixedHeight: 110,
            cover: false,
            focus: "center",
            isNavigation: true,
            updateOnMove: true,
            trimSpace:true
        };
        return (
            <>
                <div className="app-demo-container-double">
                    {loading&&<CircleLoading/>}
                    <Grid container spacing={3} style={{ height: "400px", marginBottom: "30px" }} >
                    <Grid item md={6} lg={6} xs={6}>
                            <div className={`image-container-double`}>
                                <div className={`image-container-result-double ${activeImg === 1 ? "active-img" : ""}`} ref={this.container1Ref} onClick={()=> this.setState({ activeImg: 1 })}>
                                    <img className={`result-image ${loading && "blurImg"}`} src={inputImage1} alt="inputImage" ref={this.imgRef1}/>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={6} lg={6} xs={6}>
                            <div className={`image-container-double`}>
                                <div className={`image-container-result-double ${activeImg === 2 ? "active-img" : ""}`} ref={this.container2Ref}  onClick={()=> this.setState({ activeImg: 2 })}>
                                    <img className={`result-image ${loading && "blurImg"}`} src={inputImage2} alt="inputImage" ref={this.imgRef2}/>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <div style={{alignItems:'center',display:'flex',justifyContent:'center'}}>
                        <button className='default-btn btn-two button-custom-compare' onClick={()=>handleAPICall()}>
                            {loading?"Processing":"Change"}
                        </button>
                    </div>

                    <div className="face-swiper">
                        <div style={activeImg === 1 ? { display: "block" } : { display: "none" }} onClick={()=>handleImageGalleryChange1(this.secondaryRef.current.splide.index)} className={loading ? "blurImg" : ""}>
                            <Splide options={secondaryOptions} ref={this.secondaryRef} >
                                {data_sample.faceBackgroundLeftData.map((data, i) => (
                                <SplideSlide key={i} >
                                    <img src={data.src} alt={data.altThumb} />
                                </SplideSlide>
                                ))}
                            </Splide>
                        </div>
                        <div style={activeImg === 2 ? { display: "block" } : { display: "none" }} onClick={()=>handleImageGalleryChange2(this.thirdRef.current.splide.index)} className={loading ? "blurImg" : ""}>
                            <Splide options={secondaryOptions} ref={this.thirdRef} >
                                {data_sample.faceBackgroundRightData.map((data, i) => (
                                <SplideSlide key={i} >
                                    <img style={{width:'100%', height:'100%',objectFit:'contain'}} src={data.src} alt={data.altThumb} />
                                </SplideSlide>
                                ))}
                            </Splide>
                        </div>

                    </div>
                    <div className="upload-container">
                        <div className="file-upload">
                            <div>
                                <input
                                    type={"file"}
                                    id="file"
                                    accept={"image/png, image/jpeg ,image/jpg"}
                                    style={{ display: "none" }}
                                    onInput = {(e) => handleChange(e.target.files,activeImg)}
                                    />
                                <label htmlFor="file" className="default-btn btn-two label-file">
                                    <Publish style={{ marginRight: "10px" }} />
                                    Upload
                                </label>
                            </div>
                        </div>
                        <div>
                        <input
                            type="text"
                            className="input-url-search"
                            placeholder=" Image URL"
                            value={imgURL}
                            onChange={(event) => {
                                this.setImgURL(event.target.value);
                            }}
                            />
                        <div style={{ position: "relative", display: "inline-block" }}>
                            <button
                                className="default-btn btn-two get-url-result"
                                onClick={()=>handleImgURL(imgURL,activeImg)}
                            >
                                GO
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AppDemoContainer;