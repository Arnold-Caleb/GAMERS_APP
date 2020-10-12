import * as ACTION from './actions'

const merge = (prev, next) => Object.assign({}, prev, next)

export const reducer = (state = null, action) => {
    switch(action.type) {
        case ACTION.SET_NAME:
            return merge(state, {name: action.payload})
        case ACTION.SET_AGE: 
            return merge(state, {age: action.payload})
        case ACTION.SET_TEMP:
            return merge(state, {temp: action.payload})
        case ACTION.GENDER:
            return merge(state, {gender: action.payload})
        case ACTION.FEVER:
            return merge(state, {fever: action.payload})
        case ACTION.FEVERLENGTH:
            return merge(state, {feverLength: action.payload})
        case ACTION.BODYWEAK:
            return merge(state, {bodyWeak: action.payload})
        case ACTION.COUGH:
            return merge(state, {cough: action.payload})
        case ACTION.LOOSESTOOL:
            return merge(state, {looseStool: action.payload})
        case ACTION.VOMIT: 
            return merge(state, {vomit: action.payload})
        case ACTION.DBREATHING:
            return merge(state, {dbreathing: action.payload})
        case ACTION.BODYCHILLS:
            return merge(state, {bodyChills: action.payload})
        case ACTION.HEADACHE:
            return merge(state, {headache: action.payload})
        case ACTION.BODYPAIN:
            return merge(state, {bodyPain: action.payload})
        case ACTION.HVOMIT:
            return merge(state, {hVomit: action.payload})
        case ACTION.FBREATHING:
            return merge(state, {fbreathing: action.payload})
        case ACTION.ICHEST:
            return merge(state, {iChest: action.payload})
        case ACTION.HEADNODDLING:
            return merge(state, {headnoddling: action.payload})
        case ACTION.SUNKEN:
            return merge(state, {sunken: action.payload})
        case ACTION.PSKIN:
            return merge(state, {pSkin: action.payload})
        case ACTION.EDRINK:
            return merge(state, {eDrink: action.payload})
        default:
            return state
    }
}   

