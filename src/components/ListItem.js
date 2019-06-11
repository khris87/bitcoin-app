import React from 'react'
import {Form} from "react-bootstrap";

class ListItem extends React.Component
{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onIdChange(e.target.value);
    }

    render() {
        return (
            <Form className="inline">
                <Form.Label className="text-secondary m-2">Toutes les Crypto-Monnaies</Form.Label>
                <Form.Control
                    as="select"
                    size="lg"
                    className="bg-dark text-light"
                    onChange={this.handleClick}
                >
                    {this.props.items.map((item) => (
                        <option
                            key={item.rank}
                            value={item.id}
                        >
                            {item.name}
                        </option>
                    ))}
                </Form.Control>
            </Form>
        )
    }
}

export default ListItem