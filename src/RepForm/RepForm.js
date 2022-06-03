import { RadioButtonGroup, Select, Card, Form, Button, Text } from 'grommet';
import states from './states';
import React from 'react';

class RepForm extends React.Component {

    constructor( props ) {
        super( props );

        this.state = {
            formError: ""
        };
    }

    static getDerivedStateFromProps( nextProps ) {
        return({
            formError: nextProps.formError
        });
    }

    render() {
        let error;
        if( this.state.formError != "" ) {
            error = <Text color="#FF4040">{this.state.formError}</Text>
        }
        return (
            <Card className='card' width="500px">
                {error}
                <Form onSubmit={this.props.handleSubmit}>
                    <RadioButtonGroup required name="leg" options={["Representative", "Senator"]} onChange={this.props.handleChange} />
                    <Select required name="state" options={states} onChange={this.props.handleChange} />
                    <Button margin="10px" type='submit' color="#d63031" primary label="Submit" />
                </Form>
            </Card>
        );
    }
}

export default RepForm;
