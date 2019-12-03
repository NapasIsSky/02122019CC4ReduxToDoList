import { TAG_GENERAL, SHOW_TAG_GENERAL, SHOW_TAG_IMPORTANT, TAG_IMPORTANT, SHOW_TAG_OTHER, TAG_OTHER } from "../actions/actions"

export default function tagReducer( normalTag = TAG_OTHER, action){
    switch(action.type){
        case SHOW_TAG_GENERAL:
            return TAG_GENERAL 
        case SHOW_TAG_IMPORTANT:
            return TAG_IMPORTANT
        case SHOW_TAG_OTHER:
            return TAG_OTHER
        default:
            return normalTag
    }
}
