import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:[
        {
            id:0,
            title:'Default Blog',
            author:'Defautl auhtor',
            content:'xklfngknfg'
        }
    ]
}

export const blogSlice = createSlice(
    {
        name:'blogs',
        initialState,
        reducers:{
            addBlog:(state,action)=>{
                state.value.push(action.payload)
            }
        }
    }
)
export const {addBlog} = blogSlice.actions 