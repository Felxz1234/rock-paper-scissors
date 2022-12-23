const innitialPositions = {jogador1:0,jogador2:0,pontos:0}


function reducer(state=innitialPositions,action){
    switch (action.type) {

        case 'reset':
            return({...state,pontos:state.pontos = 0})

        case 'somar':
            return({...state,pontos: state.pontos + 1 })

        case 'diminuir':
            return({...state,pontos: state.pontos - 1 })    

        case 'next':
            return({...state,jogador1:action.payload})
     

        case 'jogador2':
            return({...state,jogador2:action.payload})
            
        default:
            return state

    }
}

export default reducer