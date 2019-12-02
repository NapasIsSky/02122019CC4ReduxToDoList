import React from "react";
import { connect } from "react-redux";
import { addNote } from "../redux/actions/actions";
import { Button, Icon } from "antd";

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: ""
    };
  }

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleContentChange = e => {
    this.setState({ content: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    let title = this.state.title;
    let content = this.state.content;

    if(!title||!content){
      return
    }
    this.props.addNote(title, content);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Add a Note</h3>
        Title: <br />
        <input
          type="text"
          name="title"
          onChange={this.handleTitleChange}
          value={this.state.title}
        />
        <br />
        Content: <br />
        <textarea
          name="content"
          cols="30"
          rows="5"
          onChange={this.handleContentChange}
          value={this.state.content}
        />
        <br />
        <button type="submit" style={{ color: "#33B0FF" }}>
          <Icon type="arrow-down" />
          Add Note
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  addNote: addNote
};

export default connect(null, mapDispatchToProps)(NoteForm);
