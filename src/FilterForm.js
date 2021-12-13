import React from 'react';


class FilterForm extends React.Component {
    render() {
        return (
            <>
                <form className="form">
                    <Form.Label for="numOfHorns">Filter by Horns</Form.Label>
                    <br />
                    <Form.Select className="formSelect" name="numOfHorns">


                        <option>ALL THE HORNS!</option>
                        <option>One Horn</option>
                        <option>Two Horns</option>
                        <option>Three Horns</option>
                        <option>More Horns Than I Can Count!</option>
                    </Form.Select>
                </form>

            </>
        )
    }
}

export default FilterForm;