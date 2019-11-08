import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';
import { Card, CardText, CardTitle, CardBody} from 'reactstrap';

function Smurfs (props) {
    console.log('propsList', props);

    const fetchCharacters = e => {
        e.preventDefault();
        props.fetchSmurfs();
    }

    return (
        <div>
            <h1>Smurf Gang</h1>
            <div className="container">
                {props.list.length > 1 ? (
                    <div className="list">
                    {props.list.map(smurf => (
                    <Card key={smurf.id} className='card' >
                        <CardBody>
                            <CardTitle className="title">Name: {smurf.name}</CardTitle>
                            <CardText>Age: {smurf.age}</CardText>
                            <CardText>Height: {smurf.height}</CardText>
                        </CardBody>
                    </Card>
                ))}
                </div>
                ) : (
                    <p>Press button to see Village of Smurfs</p>
                )}
                
            </div>
            <button className="button" onClick={fetchCharacters}>Get Smurfs</button>
        </div>
    )
}

const mapStateToProps = state => ({
    list: state.list,
    error: state.error,
    isFetching: state.isFetching
});

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs)