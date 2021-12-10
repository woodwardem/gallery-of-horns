import React from 'react';
class FilterForm extends React.Component {
    render() {
        return (
            <>
                <form className="form">
                    <label for="numOfHorns">Filter by Horns</label>
                    <br />
                    <select className="formSelect" name="numOfHorns">


                        <option>ALL THE HORNS!</option>
                        <option>One Horn</option>
                        <option>Two Horns</option>
                        <option>Three Horns</option>
                        <option>More Horns Than I Can Count!</option>
                    </select>
                </form>

            </>
        )
    }
}

export default FilterForm;