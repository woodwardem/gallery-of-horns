import React from 'react';
import Form from 'react-bootstrap/Form';

class FilterForm extends React.Component {
    render() {
        return (
            <>
                <Form className="form">
                    <Form.Label for="numOfHorns">Filter by Horns</Form.Label>
                    <br />
                    <Form.Select className="formSelect" name="numOfHorns">


                        <option>ALL THE HORNS!</option>
                        <option>One Horn</option>
                        <option>Two Horns</option>
                        <option>Three Horns</option>
                        <option>More Horns Than I Can Count!</option>
                    </Form.Select>
                </Form>

            </>
        )
    }
}

export default FilterForm;