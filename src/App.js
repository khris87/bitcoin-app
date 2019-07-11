import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Container, Navbar, Nav} from "react-bootstrap";
import BitCoinCard from "./components/BitCoinCard";
import ListItem from "./components/ListItem";
import Clock from "./components/Clock";
import Tvmaze from "./components/tv-maze";
import axios from "axios";
import { messaging } from "./init-fcm";
import MeteoConcept from './components/MeteoConcept';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleIdChange = this.handleIdChange.bind(this);
        this.state = {
            coins: [],
            coin: 'bitcoin'
        };
    }

    handleIdChange(e) {
        this.setState({coin: e})
    }

    async componentDidMount() {
        axios.get(`https://api.coincap.io/v2/assets/`)
            .then(response => response.data)
            .then((data) => {
                this.setState({coins: data.data})
            })
        messaging.requestPermission()
            .catch(function(err) {
                console.log("Unable to get permission to notify.", err);
            });

        navigator.serviceWorker.addEventListener("message", (message) => console.log(message));
    }

    render() {
        const cards = this.state.coins.filter(coin => coin.id === this.state.coin)
        return (
            <section>
                <Navbar
                    bg="dark"
                    variant="dark"
                    fixed="bottom"
                >
                    <Navbar.Brand
                        className="text-secondary lead"
                    >
                        <img
                        width={80}
                        height={80}
                        className="App-logo"
                        src={logo}
                        alt="logo"
                        />
                        <span className="d-none d-sm-block">Bitcoin App</span>
                    </Navbar.Brand>
                    <Nav className="m-auto">
                        <ListItem
                            onIdChange={this.handleIdChange}
                            items={this.state.coins}
                        />
                    </Nav>
                </Navbar>

                <Container className="my-3">
                    <Clock />
                    {cards.map((card) => (
                        <BitCoinCard
                            key={card.rank}
                            name={card.name}
                            symbol={card.symbol}
                            priceUsd={card.priceUsd}
                            changePercent24Hr={card.changePercent24Hr}
                        />
                    ))}
                </Container>
                <Tvmaze />
                <MeteoConcept />
            </section>
        );
    }

}


export default App;
