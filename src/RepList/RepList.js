import { Card, DataTable } from "grommet";
import React from "react";

export default class RepList extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     console.log( this.props.reps );
    // }

    render() {
        return(
            <Card background="#EDEDED">
                <DataTable
                    fill={true}
                    columns={[
                        {
                            property: 'name',
                            header: <p>Name</p>,
                            primary: true
                        },
                        {
                            property: 'party',
                            header: <p>Party</p>
                        }
                    ]}
                    data={this.props.reps}
                    onClickRow={this.props.onRepSelect}
                />
            </Card>
        );
    }
}