"use strit"
import React, { Component } from 'react';
import { Well, Panel, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

class BooksForm extends Component {
  render() {
    return (
      <well>
        <Panel>
          <FormGroup controlId="title">
            <ControlLabel>Title</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter Title"
              ref="title" />
          </FormGroup>
        </Panel>
      </well>
    );
  }
}

export default BooksForm;
