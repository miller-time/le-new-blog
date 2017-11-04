import React, { Component } from 'react';
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

class Editor extends Component {
  componentDidMount() {
    this.titleInput.focus();
  }

  render() {
    return (
      <div>
        <FormGroup controlId="new-post-title">
          <ControlLabel>Title</ControlLabel>
          <FormControl
            placeholder="Post Title"
            inputRef={(el) => this.titleInput = el}
          />
        </FormGroup>

        <FormGroup controlId="new-post-body">
          <ControlLabel>Body</ControlLabel>
          <FormControl
            componentClass="textarea"
            rows="10"
            inputRef={(el) => this.bodyInput = el}
          />
        </FormGroup>

        <Button type="submit" onClick={(e) => this.onSubmitClick(e)}>
          Submit
        </Button>
      </div>
    );
  }

  onSubmitClick(event) {
    event.preventDefault();

    this.props.onSubmit({
      title: this.titleInput.value,
      body: this.bodyInput.value
    });
  }
}

export default Editor;
