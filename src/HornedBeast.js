import React from 'react';
import Card from 'react-bootstrap/Card';


class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: 0
        }
    };

    addFavorites = () => {
        this.setState({ favorites: this.state.favorites + 1 });
    };




    render() {
        return (
            <Card className="beast" onClick={this.addFavorites} style={{ width: '13rem'}}>
             <Card.Title>{this.props.beastObj.title}</Card.Title>
                <Card.Img
                    src={this.props.beastObj.image_url}
                    alt={this.props.beastObj.description}
                    title={this.props.beastObj.title}
                
                />
                <Card.Text>{this.props.beastObj.description}</Card.Text>
                <Card.Text>🔥 = {this.state.favorites}</Card.Text>
            </Card>

        );
    }
}

export default HornedBeast;