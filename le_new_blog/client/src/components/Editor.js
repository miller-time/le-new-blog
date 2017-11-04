import React, { Component } from 'react';
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

class Editor extends Component {
  componentDidMount() {
    this.titleInput.focus();
  }

  componentDidUpdate() {
    // in case `post` is set after the initial load (and `defaultValue` missed it)
    const post = this.props.post || {};
    if (this.titleInput) {
      this.titleInput.value = post.title || '';
    }
    if (this.bodyInput) {
      this.bodyInput.value = post.body || '';
    }
  }

  render() {
    const post = this.props.post || {};

    return (
      <div>
        <FormGroup controlId="new-post-title">
          <ControlLabel>Title</ControlLabel>
          <FormControl
            placeholder="Post Title"
            inputRef={(el) => this.titleInput = el}
            defaultValue={post.title}
          />
        </FormGroup>

        <FormGroup controlId="new-post-body">
          <ControlLabel>Body</ControlLabel>
          <FormControl
            componentClass="textarea"
            rows="10"
            inputRef={(el) => this.bodyInput = el}
            defaultValue={post.body}
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
