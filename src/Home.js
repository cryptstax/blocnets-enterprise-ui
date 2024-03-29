import React, { Component } from 'react';
import './App.css';
import SplashView from './components/splash';
import LoginView from './components/login';
import App from './App';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: 'splash',
            showApp: '',
            open: false,
            transactionCode: '',
            userName: ''
        };
    }

    handleSplashView = (show, open, transactionCode, userName) => {
        if (userName) {
            this.handleLoginView('app', false, transactionCode, userName);
        } else {
            this.setState({
                show: show,
                showApp: '',
                open: open,
                transactionCode: transactionCode,
                userName: userName
            });
        }
    };

    handleLoginView = (show, open, transactionCode, userName) => {
        if (transactionCode === 'TAT01') {
            this.setState({
                showApp: 'trackandtraceview'
            });
        } else if (transactionCode === 'DRE02') {
            this.setState({
                showApp: 'home'
            });
        } else if (transactionCode === 'BOM01') {
            this.setState({
                showApp: 'billofmaterials'
            });
        } else if (transactionCode === 'SAR01') {
            this.setState({
                showApp: 'shippingview'
            });
        } else if (transactionCode === 'SAR02') {
            this.setState({
                showApp: 'receivingview'
            });
        } else if (transactionCode === 'PRD01') {
            this.setState({
                showApp: 'startproductionview'
            });
        } else if (transactionCode === 'PRD02') {
            this.setState({
                showApp: 'completeproductionview'
            });
        } else if (transactionCode === 'DRE01') {
            this.setState({
                showApp: 'senddocumentview'
            });
        } else if (transactionCode === 'DRE03') {
            this.setState({
                showApp: 'savedocumentview'
            });
        } else if (transactionCode === 'DRE04') {
            this.setState({
                showApp: 'readdocumentview'
            });
        } else if (transactionCode === 'GEO01') {
            this.setState({
                showApp: 'mapcontainerview'
            });
        } else {
            this.setState({
                showApp: 'home'
            });
        }
        this.setState({
            show: show,
            open: open,
            transactionCode: transactionCode,
            userName: userName
        });
    };

    handleAppView = (show, open, transactionCode, userName) => {
        this.setState({
            show: show,
            showApp: '',
            open: open,
            transactionCode: transactionCode,
            userName: userName
        });
    };

    render() {

        let content = null;

        switch (this.state.show) {
            case 'splash':
                content = (
                    <SplashView
                        viewHandler={this.handleSplashView}
                        show={this.state.show}
                        showApp={this.state.showApp}
                        open={this.state.open}
                        transactionCode={this.state.transactionCode}
                        userName={this.state.userName}
                    />
                );
                break;
            case 'login':
                content = (
                    <LoginView
                        viewHandler={this.handleLoginView}
                        show={this.state.show}
                        showApp={this.state.showApp}
                        open={this.state.open}
                        transactionCode={this.state.transactionCode}
                        userName={this.state.userName}
                    />);
                break;
            case 'app':
                content = (
                    <App
                        viewHandler={this.handleAppView}
                        show={this.state.show}
                        showApp={this.state.showApp}
                        open={this.state.open}
                        transactionCode={this.state.transactionCode}
                        userName={this.state.userName}
                    />);
                break;
            default:
                content = (
                    <SplashView
                    />);
        }

        return (
            <div>
                {content}
            </div>
        );

    }

}

export default Home;