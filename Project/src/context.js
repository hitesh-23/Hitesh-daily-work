import React, {Component} from 'react';

const InfoContext = React.createContext();

//Provider - provides Data
//consumer - Consumes data

class InfoProvider extends Component {
    render(){
        return (
            <InfoContext.Provider value="Hello I am data">
                {this.props.children}
            </InfoContext.Provider>
        )
    }
}

const InfoConsumer = InfoContext.Consumer;

export {InfoProvider, InfoConsumer};