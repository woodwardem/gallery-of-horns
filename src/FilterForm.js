import React from 'react';
import Form from 'react-bootstrap/Form';
import beastData from './beastData.json'
class FilterForm extends React.Component {

filter = (event) => {
    console.log('event.target.value: ', event.target.value);
    const numOfHorns = parseInt(event.target.value);
    let gallery = beastData;
    if (numOfHorns) {
gallery = beastData.filter(beastObj => beastObj.horns === numOfHorns);
    }
}
//TODO: Lift the new state of the gallery to it's parent component, to be rendered.

    render() {
        return (
            <>
                <Form className="form">
                    <Form.Label for="numOfHorns">Filter by Horns</Form.Label>
                    <br />
                    <Form.Select className="formSelect" name="numOfHorns" onChange={this.filter}>


                        <option value=''>ALL THE HORNS!</option>
                        <option value='1'>One Horn</option>
                        <option value='2'>Two Horns</option>
                        <option value='3'>Three Horns</option>
                        <option value='100'>More Horns Than I Can Count!</option>
                    </Form.Select>
                </Form>

            </>
        )
    }
}

export default FilterForm;