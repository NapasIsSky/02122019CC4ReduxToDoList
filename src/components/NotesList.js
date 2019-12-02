import React from "react";
import { connect } from "react-redux";
import { removeNote, showInactive, showActive } from "../redux/actions/actions";

class NotesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let visibility = this.props.visibility;
    let notes = this.props.notes.filter(note => note.status === visibility);
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
    visibility: state.visibility
  };
};

const mapDispatchToProps = {
  removeNote: removeNote,
  showActive: showActive,
  showInactive: showInactive
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);
