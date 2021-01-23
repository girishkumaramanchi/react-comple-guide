import React, { Component } from "react";

class ErrorBoundary extends Component {

    state = {
        hasError:false,
        errorMessage:""
    }

    componentDidCatch = (error, info) => {
        this.setState({hasError:true,errorMessage:error});
    }

    render(){
        // <h1>Something went wrong</h1>
        if (this.state.hasError){
            return <h1>{this.state.errorMessage}</h1>
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary;