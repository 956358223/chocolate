export default {
    state: {
        theme: {
            background: '',
            textColor: 'black',
            activeColor: '#3788ee',
            logoColor: '#3788ee'
        }
    },
    mutations: {
        changeStyle(state, value) {
            if (value === 'night') {
                state.theme.background = '#001529'
                state.theme.textColor = 'white'
                state.theme.activeColor = ''
                state.theme.logoColor = 'white'
            } else if (value === 'light') {
                state.theme.background = ''
                state.theme.textColor = 'black'
                state.theme.activeColor = '#3788ee'
                state.theme.logoColor = '#3788ee'
            }
        }
    },
    actions: {}
}
