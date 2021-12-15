import React from 'react';
import HornedBeast from './HornedBeast.js';
import beastData from './beastData.json';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FilterForm from "./FilterForm";

class Main extends React.Component {
constructor(props) {
super(props);
this.state ={
    gallery: beastData
};
};

    updateGallery = (numOfHorns) => {
        let gallery = beastData;
        if (numOfHorns) {
    gallery = beastData.filter(beastObj => beastObj.horns === numOfHorns);
        }
        this.setState({ gallery: gallery });
    }



    render() {
        return (
            <Container>
                <FilterForm updateGallery={this.updateGallery}/>
                <Row xs={1} md={2} lg={3} xl={4}>

                    {this.state.gallery.map((beast, idx) => (
                        <HornedBeast key={idx} beastObj={beast} />
                    ))}

                </Row>

            </Container>

        )
    }
}


export default Main;