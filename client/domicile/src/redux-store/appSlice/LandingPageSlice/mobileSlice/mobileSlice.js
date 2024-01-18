import { createSlice } from '@reduxjs/toolkit'

const mobilePageSlice = createSlice({
    name: 'mobilePageSlice',
    initialState: {
        SideNavOn:false,
    },
    reducers: {
        setSideNavOn:function(state, actions){
            state.SideNavOn  = actions.payload
            return
        },
        setSideNavOff:function(state, actions){
            state.SideNavOn = actions.payload
            return
        }
    }
})
export const {setSideNavOn, setSideNavOff} = mobilePageSlice.actions

export default mobilePageSlice.reducer