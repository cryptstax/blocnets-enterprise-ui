import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import UserIcon from '@material-ui/icons/AccountCircleRounded';
import ButtonBase from '@material-ui/core/ButtonBase';
import BlueHex from '../img/Hexagon_Blue.svg';
import RedHex from '../img/Hexagon_Red.svg';
import GreenHex from '../img/Hexagon_Green.svg';
import PropTypes from 'prop-types';
import {MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import paperLogo from '../blocnets-logo.png';
import blocnetsLogo from "../blocknetwhite-1.png";
import Button from "@material-ui/core/Button/Button";
import Table from "@material-ui/core/Table/Table";
import TableBody from "@material-ui/core/TableBody/TableBody";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import Dialog from "@material-ui/core/Dialog/Dialog";
import ReactPlayer from 'react-player';
import animatedLogo from '../Blocnets-Logo-Animated-Version-2.mp4'

import Zoom from '@material-ui/core/Zoom';

const paperStyle = {
    width: '100%',
    height: '85%',
    margin: '5%',
    textAlign: 'center',
    display: 'inline-block',
    borderRadius: '10 px'
};

class SplashView extends Component {

    componentDidMount() {
        setTimeout(
            function () {
                this.setState({
                    viewWelcomeVideo: false
                });
            }
            .bind(this),
                    10000);
    }

    constructor(props) {
        super(props);
        this.state = {
            code: 'SAR01',
            show: null,
            openDialog: false,
            viewWelcomeVideo: true,
        };
    }

    handleView = () => {
        this.setState({
            openDialog: true
        });
        setTimeout(
            function () {
                this.props.viewHandler(this.state.code)
            }

                .bind(this),
            1000);


    };

    render() {

        return (

            this.state.viewWelcomeVideo ?
                <div>
                    <Grid container spacing={24}>
                        <Paper elevation={24} style={paperStyle} zdepth={5}>
                            <div style={{padding: 24}}>
                            </div>
                            <div style={{padding: 24}}>
                                <Grid container spacing={24}>
                                    <Grid container item xs={12} justify="center">
                                        <Typography style={{"fontFamily": "Inter UI, sans-serif", "fontStyle": "normal", "fontSize": "28pt"}}>
                                            WELCOME TO BLOCNETS
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </div>
                            <div style={{padding: 24}}>
                                <Grid container spacing={24}>
                                    <Grid container item xs={12} justify="center">
                                        <video width="320" height="240" autoPlay controls loop>
                                            <source src={animatedLogo} type="video/mp4"/>
                                        </video>
                                    </Grid>
                                </Grid>
                            </div>
                            <div style={{padding: 24}}>
                            </div>
                        </Paper>
                    </Grid>
                </div>
                :
                    <div>
                        <Grid container spacing={24}>
                            <Paper elevation={24} style={paperStyle} zdepth={5}>
                                <Paper elevation={24} zdepth={5} style={{'borderRadius': '10px'}}>
                                    <Toolbar style={{
                                        "justifyContent": "center",
                                        "height": 170,
                                        'backgroundColor': 'white',
                                        'borderRadius': '10px'
                                    }} elevation={24}>
                                        <ToolbarTitle
                                            text={"WHAT CAN BLOCNETS DO FOR YOU?"}
                                        />
                                    </Toolbar>
                                    <Grid container spacing={24}>
                                        <Grid container item xs={6} sm={2} justify="center">
                                            <Button type="submit" value="submit" variant="contained"
                                                    onClick={this.handleView} style={{"backgroundColor": "#ffb000"}}>
                                                TT02
                                            </Button>
                                        </Grid>
                                        <Grid container item xs={6} sm={2} justify="center">
                                            <Button type="submit" value="submit" variant="contained"
                                                    onClick={this.handleView} style={{"backgroundColor": "#ffb000"}}>
                                                DRE02
                                            </Button>
                                        </Grid>
                                        <Grid container item xs={6} sm={2} justify="center">
                                            <Button type="submit" value="submit" variant="contained"
                                                    onClick={this.handleView} style={{"backgroundColor": "#ffb000"}}>
                                                eBOM01
                                            </Button>
                                        </Grid>
                                        <Grid container item xs={6} sm={2} justify="center">
                                            <Button type="submit" value="submit" variant="contained"
                                                    onClick={this.handleView} style={{"backgroundColor": "#ffb000"}}>
                                                SAR01
                                            </Button>
                                        </Grid>
                                        <Grid container item xs={6} sm={2} justify="center">
                                            <Button type="submit" value="submit" variant="contained"
                                                    onClick={this.handleView} style={{"backgroundColor": "#ffb000"}}>
                                                SAR02
                                            </Button>
                                        </Grid>
                                        <Grid container item xs={6} sm={2} justify="center">
                                            <Button type="submit" value="submit" variant="contained"
                                                    onClick={this.handleView} style={{"backgroundColor": "#ffb000"}}>
                                                PRD01
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Paper><br/><br/><br/>
                                <Grid container spacing={24} style={{ 'marginBottom': '10px' }}>
                                    <Grid container spacing={24}>
                                        <Grid item xs>
                                            <ul id="grid" className="clear">
                                                <li>
                                                    <div className="hexagon">
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="hexagon">
                                                        <object type="image/svg+xml" data={BlueHex} className="hex-shadow" aria-label="">
                                                        </object>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="hexagon">
                                                    </div>
                                                </li>
                                            </ul>
                                        </Grid>
                                        <Grid item xs>
                                            <ul id="grid" className="clear">
                                                <li>
                                                    <div className="hexagon">
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="hexagon">
                                                        <object type="image/svg+xml" data={RedHex} className="hex-shadow" aria-label="">
                                                        </object>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="hexagon">
                                                    </div>
                                                </li>
                                            </ul>
                                        </Grid>
                                        <Grid item xs>
                                            <ul id="grid" className="clear">
                                                <li>
                                                    <div className="hexagon">
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="hexagon">
                                                        <object type="image/svg+xml" data={GreenHex} className="hex-shadow" aria-label="">
                                                        </object>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="hexagon">
                                                    </div>
                                                </li>
                                            </ul>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={24}>
                                        <Grid item xs>
                                            <ul id="grid" className="clear">
                                                <li>
                                                    <div className="hexagon">
                                                        <object type="image/svg+xml" data={BlueHex} className="hex-shadow" aria-label="">
                                                        </object>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="hexagon">
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="hexagon">
                                                        <object type="image/svg+xml" data={BlueHex} className="hex-shadow" aria-label="">
                                                        </object>
                                                    </div>
                                                </li>
                                            </ul>
                                        </Grid>
                                        <Grid item xs>
                                            <ul id="grid" className="clear">
                                                <li>
                                                    <div className="hexagon">
                                                        <object type="image/svg+xml" data={RedHex} className="hex-shadow" aria-label="">
                                                        </object>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="hexagon">
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="hexagon">
                                                        <object type="image/svg+xml" data={RedHex} className="hex-shadow" aria-label="">
                                                        </object>
                                                    </div>
                                                </li>
                                            </ul>
                                        </Grid>
                                        <Grid item xs>
                                            <ul id="grid" className="clear">
                                                <li>
                                                    <div className="hexagon">
                                                        <object type="image/svg+xml" data={GreenHex} className="hex-shadow" aria-label="">
                                                        </object>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="hexagon">
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="hexagon">
                                                        <object type="image/svg+xml" data={GreenHex} className="hex-shadow" aria-label="">
                                                        </object>
                                                    </div>
                                                </li>
                                            </ul>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={24}>
                                        <Grid item xs>
                                        </Grid>
                                        <Grid item xs>
                                            <ul id="grid" className="clear">
                                                <li>
                                                    <div className="hexagon">
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="hexagon">
                                                        <object type="image/svg+xml" data={RedHex} className="hex-shadow" aria-label="">
                                                        </object>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="hexagon">
                                                    </div>
                                                </li>
                                            </ul>
                                        </Grid>
                                        <Grid item xs>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </div>

        )


    }
}

const mapStateToProps = (state) => {
    return {
        data: state
    };
};


export default connect(mapStateToProps)(SplashView);