import { Component } from "react";

export default class CircleLoading extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="center-loading">
                <div className="loader-5"><span></span></div>
            </div>
        )
    }
}