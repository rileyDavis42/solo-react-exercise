import React from "react";
import { Card, CardHeader, CardBody, TextInput, Text } from 'grommet';


export default class RepDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rep: {
                name: '',
                district: '',
                phone: '',
                office: '',
                link: '',
            }
        };
    }

    static getDerivedStateFromProps( nextProps ) {
        return({
            rep: nextProps.rep
        });
    }

    render() {
        let website;
        if( this.state.rep.link != "" ) {
            website = <Text><a href={this.state.rep.link}>Website</a></Text>;
        }
        return (
            <Card background="#EDEDED">
                <CardHeader background="#d63031" pad="small">Info</CardHeader>
                <CardBody pad="small">
                    <TextInput readOnly={true} placeholder="First Name" value={ this.state.rep.name.split( ' ' )[0] }/>
                    <TextInput readOnly={true} placeholder="Last Name" value={ this.state.rep.name.split( ' ' )[1] }/>
                    <TextInput readOnly={true} placeholder="District" value={ String( this.state.rep.district )}/>
                    <TextInput readOnly={true} placeholder="Phone" value={this.state.rep.phone}/>
                    <TextInput readOnly={true} placeholder="Office" value={this.state.rep.office}/>
                    {website}
                </CardBody>
            </Card>
        );
    }
}