import { ADD_NOTE, REMOVE_NOTE, STATUS_INACTIVE } from "../actions/actions";

export default function noteReducer(notes = [], action){

    switch(action.type){
        case ADD_NOTE:
            return[
                ...notes,
            {
                id: action.id,
                title: action.title,
                content: action.content,
                dateTime: action.dateTime,
                status: action.status,
                tag: action.tag
            }
            ]
        case REMOVE_NOTE:
            return notes.map(note => 
                note.id === action.id ? 
                {...note, status: STATUS_INACTIVE} : note)
        // if (note.id === action.id){
        //     return {...note, status: STATUS_INACTIVE}
        // }else{
        //     return note
        // }
        default:
            return notes
    }
}