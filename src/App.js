import React from 'react';
import Gauge from 'react-radial-gauge';
// eslint-disable-next-line
import logo from './logo.svg';
import { Jumbotron,Card, CardBody, CardTitle, Button,Fade,CardText  } from 'reactstrap';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fadeIn: false };
    this.toggle = this.toggle.bind(this);
  }
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Next Inject</h1>
          <p className="lead">This is unit calculator app.</p>
          <hr className="my-2" />
          <p>Measures the units used.</p>
          <p className="lead">
          </p>
        </Jumbotron>
        <Card>
        <CardBody>
          <CardTitle>Your current month consumption</CardTitle>
          <Button color="primary" onClick={this.toggle}>Click here</Button>
         
          <Fade in={this.state.fadeIn} className='my-2'>
              <CardText>Units</CardText>
              <Gauge currentValue='500'></Gauge>
            </Fade>
        </CardBody>
      </Card>
      </div>
    );
  }
  toggle() {
    this.setState({
      fadeIn: !this.state.fadeIn
    });
  }
};
