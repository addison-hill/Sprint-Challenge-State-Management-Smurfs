import React, { useState } from 'react';
import { addSmurf } from '../actions'
import { connect } from 'react-redux';


const AddSmurfForm = props => {

    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: ''
    });

    const addCharacter = (e) => {
        e.preventDefault();
        console.log('add', smurf)
        props.addSmurf(smurf)
        setSmurf({
            name: '',
            age: '',
            height: ''
        })
    }

    const handleChange = e => {
        setSmurf({
            ...smurf,
            [e.target.name]: e.target.value
        })

    }

    return (
        <div className="container">
            <h1>Add Smurf</h1>
            <form className="add-form" onSubmit={addCharacter}>
                <label>Name:
                    <input className="input"
                    type="text"
                    name="name"
                    value={smurf.name}
                    onChange={handleChange}
                    />
                </label>
                <label>Age:
                    <input className="input"
                    type="text"
                    name="age"
                    value={smurf.age}
                    onChange={handleChange}
                    />
                </label>
                <label>Height:
                    <input className="input"
                    type="text"
                    name="height"
                    value={smurf.height}
                    onChange={handleChange}
                    />
                </label>
                <button type="submit" className="button">Add</button>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        list: state.list
    }
};



export default connect(mapStateToProps, { addSmurf })(AddSmurfForm)