import { Component } from "react";
import { LinearProgress } from '@mui/material'
import { withStyles } from '@mui/styles'

class LinearProgressColor extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const { classes } = this.props;
        return  <LinearProgress {...this.props} classes={{colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary}}/>
    }
}
const styles = props => ({
    colorPrimary: {
      backgroundColor: '#00bfff',
    },
    barColorPrimary: {
      backgroundColor: '#bbedf7',
    }
  });

export default withStyles(styles)(LinearProgressColor)