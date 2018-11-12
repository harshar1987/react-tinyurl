import React, { Component } from "react";
import { UrlShortenService } from "../lib/services/UrlShortnerService";

export class RedirectUrl extends Component {

    async componentDidMount() {
        /*eslint-disable*/
        
        let response = await UrlShortenService.getLongUrl(this.props.match.params.shortCode);
        const url = response.data.toString().substring(1,response.data.length);
        console.log(url);
        window.location = url; 
        
    }

    render() {
        return (<section>Redirecting...</section>);
    }
}