import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';

export class GoogleMap extends Component {
    render() {
        return (
            <Map google={this.props.google} zoom={14}>

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                {/* <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow> */}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBwkxmQDZY8pTNOFxwcbUvXzwD3umtiVYM"
})(GoogleMap)



//browser key :   AIzaSyBErOKkg6t401YiBbMyAdIzrJvSy2mW19c
//web client key:  583041124755-nsa88d34brokvo0li3016jsn6n5ra9rb.apps.googleusercontent.com

//map-google :   AIzaSyBwkxmQDZY8pTNOFxwcbUvXzwD3umtiVYM