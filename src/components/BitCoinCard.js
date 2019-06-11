import React from 'react';
import {Card} from "react-bootstrap";
import bitcoin from "./bitcoin.jpg";

class BitCoinCard extends React.Component
{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card className="col-lg-6 p-0 m-auto">
                <Card.Img variant="top" src={bitcoin}/>
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">( {this.props.symbol} )</Card.Subtitle>
                    <Card.Text>
                        Valeur : {parseFloat((this.props.priceUsd) * 0.9).toFixed(2)} €
                    </Card.Text>
                </Card.Body>
                <Card.Footer className={Math.sign(this.props.changePercent24Hr) === -1 ? 'text-danger' : 'text-success'}>
                    Tendance : {parseFloat(this.props.changePercent24Hr).toFixed(2)} %
                </Card.Footer>
            </Card>
        )
    }
}

export default BitCoinCard