import React from "react";
import { connect } from "react-redux";
import { removeNote, showInactive, showActive, showTagGeneral, showTagImportant, showTagOther } from "../redux/actions/actions";

class NotesList extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   general:this.props.showTagGeneral()
    // };
  }

  handleShowTag = e =>{
    // console.log(e.target.value)
    if (e.target.value === "TAG_GENERAL") {
      this.props.showTagGeneral()
    }else if(e.target.value === "TAG_IMPORTANT") {
      this.props.showTagImportant()
    }else{
      this.props.showTagOther()
    }
    // this.setState({dummy: e})
    // this.props.notes.tag.filter(e.target.value)
  } 

  render() {
    let visibility = this.props.visibility;
    let tag = this.props.tag;
    let notes = this.props.notes.filter(note => note.status === visibility && note.tag === tag);
    console.log(tag)

    return (
      <>
        <h3
          style={{
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px"
          }}
        >
          Notes
        </h3>
        <br />
        <select defaultValue="TAG_OTHER" onChange={this.handleShowTag}>
          <option value="TAG_GENERAL">General</option>
          <option value="TAG_IMPORTANT">Important</option>
          <option value="TAG_OTHER">Other</option>
        </select> 
        <br />
        <button
          style={{
            backgroundColor: "#33B0FF",
            border: "none",
            color: "white",
            padding: "15px 32px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            margin: "4px 2px",
            cursor: "pointer"
          }}
          onClick={() => this.props.showActive()}
        >
          Show active notes
        </button>

        <button
          style={{
            backgroundColor: "#33B0FF",
            border: "none",
            color: "white",
            padding: "15px 32px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            margin: "4px 2px",
            cursor: "pointer"
          }}
          onClick={() => this.props.showInactive()}
        >
          Show inactive notes
        </button>
        <ul>
          {notes.map(note => (
            <li key={note.id}>
              <b>{note.title}</b>
              <button
                onClick={() => this.props.removeNote(note.id)}
                style={{
                  backgroundColor: "#33B0FF",
                  border: "none",
                  color: "white",
                  padding: "5px 5px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-block",
                  fontSize: "10px",
                  margin: "1px 1px",
                  cursor: "pointer"
                }}
              >
                x
              </button>
              <br />
              <span>{note.content}</span>
              <br />
              <span>{note.dateTime}</span>
              <br />
              <span>{note.tag}</span>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    visibility: state.visibility,
    tag: state.tag
  };
};

const mapDispatchToProps = {
  removeNote: removeNote,
  showActive: showActive,
  showInactive: showInactive,
  showTagGeneral: showTagGeneral,
  showTagImportant: showTagImportant,
  showTagOther: showTagOther
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);
