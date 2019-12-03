import React from "react";
import { connect } from "react-redux";
import { addNote } from "../redux/actions/actions";
import { Button, Icon } from "antd";

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
      tag:'TAG_GENERAL'
    };
  }

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleContentChange = e => {
    this.setState({ content: e.target.value });
  };

  handleTagChange = e =>{
    this.setState({ tag: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();

    let title = this.state.title;
    let content = this.state.content;
    let tag = this.state.tag;
    
    if(!title||!content){
      return
    }
    this.props.addNote(title, content,tag);
    this.setState({
      title: (e.target=''),
      content: (e.target=''),
      tag: (e.target='')

    })
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{display: 'flex', justifyItems:'center' ,flexDirection:'column'}}>
        <h3>Add a Note</h3>
        Title: <br />
        <input
          style={{width:'300px',justifyItems:'center' ,flexDirection:'column'}}
          type="text"
          name="title"
          onChange={this.handleTitleChange}
          value={this.state.title}
        />
        <br />
        Content: <br />
        <textarea
          style={{width:'300px', height:'250px',justifyItems:'center' ,flexDirection:'column'}}
          name="content"
          cols="30"
          rows="5"
          onChange={this.handleContentChange}
          value={this.state.content}
        />
        <br />
        Due Date:<br/>
        <input/>
        <br />
        <select onChange={this.handleTagChange} value={this.state.tag}>
          <option value="TAG_GENERAL">General</option>
          <option value="TAG_IMPORTANT">Important</option>
          <option value="TAG_OTHER">Other</option>
        </select> 
        <br />
        <button type="submit" style={
          { backgroundColor: "#33B0FF",
           border: 'none',
           color: 'white',
           padding: '15px 32px',
           textAlign: 'center',
           textDecoration: 'none',
           display: 'inline-block',
           fontSize: '16px',
           margin: '4px 2px',
           cursor: 'pointer'}
        }
        
        >
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
