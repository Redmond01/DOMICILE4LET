import { createSlice } from '@reduxjs/toolkit'

const mobilePageSlice = createSlice({
    name: 'mobilePageSlice',
    initialState: {
        SideNavOn:false,
        SideNavOff:true
    },
    reducers: {
        setSideNavOn:function(state){
            return !state.SideNavOn 
        },
        setSideNavOff:function(state, actions){
            state.SideNavOn = actions.payload
            return
        }

    }
})
export const {setSideNavOn, setSideNavOff} = mobilePageSlice.actions

export default mobilePageSlice.reducer