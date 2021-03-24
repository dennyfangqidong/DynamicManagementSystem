export default {
    state: {
        menu: [],
        currentmenu: null, //传进来的菜单
    },
    mutations: {
        selectMenu(state, value) {
            // if(val.name!=='home'){
            //     state.currentMenu = value
            // }
            // else{
            //     state.currentMenu = null
            // }
            value.name === 'home' ? (state.currentMenu = null) : (state.currentMenu = value)
        }
    },
    actions: {},
}