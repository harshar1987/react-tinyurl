import React, { Component } from "react";
import styled from "styled-components";
import { UrlShortenService } from "../lib/services/UrlShortnerService";


const Container = styled.div`
    position: relative;
    width: 800px;
    height: 200px;
    background: #eadada;
    margin: 10px;
`;

class Home extends Component {
    constructor(props) {
        super(props);

        this.createShortenUrl = this.createShortenUrl.bind(this);
        this.state = {
            url: "",
            shortUrl: ""
        };
    }

    async createShortenUrl() {
        /* eslint-disable no-console */
        let response = await UrlShortenService.shortenUrl(this.state.url);

        const host = window.location.hostname;
        const tinyUrl = host.concat("/", response);
        this.setState({ shortUrl: tinyUrl });
        this.forceUpdate();
    }

    render() {

        const link = `https://${this.state.shortUrl}`;
        return (<Container>
            <div style={{ margin: "10px" }}>Shorten Url</div>
            <div style={{ margin: "10px" }}>
                <input
                    id="url"
                    type="text"
                    style={{ width: "500px" }}
                    value={this.state.url}
                    onChange={e => this.setState({ url: e.target.value })}
                />
                <button style={{ margin: "5px", width: "35px", borderRadius: "5px", color: "black" }} onClick={this.createShortenUrl}>Go</button>
                {this.state.shortUrl === "" ? <div></div> : <div>Short Url: <a href={link}>{this.state.shortUrl}</a></div> }
                
            </div>

        </Container>);
    }
}

export default Home;