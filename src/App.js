import logo from './logo.svg';
import './App.css';
import { Grid, Grommet, Header, Heading, Box, Card } from 'grommet';
import RepForm from './RepForm/RepForm';
import RepDetails from './RepDetails/RepDetails';
import { Component } from 'react';
import axios from 'axios';
import RepList from './RepList/RepList';

export default class App extends Component {
  legislation = "";
  territory = "";

  constructor( props) {
    super( props );

    this.state = { 
      formError: "",
      repList: [],
      selectedRep: {
        "name": "",
        "party": "",
        "state": "",
        "district": "",
        "phone": "",
        "office": "",
        "link": ""
      }
     };
  }

  handleChange = (e) => {
    switch( e.target.name ) {
      case 'leg':
        this.legislation = e.target.value;
        break;
      case 'state':
        this.territory = e.target.value;
        break;
      default:
        break;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if( this.legislation == "" ) {
      this.setState({
        formError: "Please select a legislation",
      });
    } else if( this.territory == "" ) {
      this.setState({
        formError: "Please select a state",
      });
    }
    else {
      let url = 'http://localhost:3001/';

      if( this.legislation == "Senator" ) {
        url += "senators/";
      } else {
        url += "representatives/";
      }
  
      axios.get( url + this.territory )
      .then( (res) => {
        this.setState( {
          repList: res.data.results,
          formError: ""
        });
      })
      .catch( (e) => {
          console.log( 'Error: ' + e );
          alert( 'There was an error submitting the form' );
      } );
    }

  }
  
  handleRepSelect = (data) => {
    this.setState( {
      selectedRep: data.datum
    } );
  }

  render() {
    return (
      <Grommet>
        <Header className='header'>
          <Heading margin="20px">Who's My Representative?</Heading>
        </Header>
        <Grid
        className='content-wrapper'
         rows={[ "small", "medium" ]}
         columns={[ "medium", "medium" ]}
         gap="medium"
         areas={[
           { name: 'top', start: [0, 0], end: [1, 0] },
           { name: 'left', start: [0, 1], end: [0, 1] },
           { name: 'right', start: [1, 1], end: [1, 1] },
         ]} 
        >
          <Box gridArea='top'>
            <RepForm gridArea="top" handleChange={this.handleChange} handleSubmit={this.handleSubmit} formError={this.state.formError}></RepForm>
          </Box>
          <RepList reps={this.state.repList} onRepSelect={this.handleRepSelect}/>
          <RepDetails rep={this.state.selectedRep}/>
        </Grid>
      </Grommet>
    );
  }
}
