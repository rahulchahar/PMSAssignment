function posts(state = [], action) {
  switch(action.type) {
    case 'DELETE_PRODUCT' :
      const ind = action.i;
      return [
        ...state.slice(0,ind),
        ...state.slice(ind + 1),
      ]
      case 'ADD_PRODUCT' :
      console.log(...state)
      return [...state,{
        code: action.code,
        pname: action.name[0],
        id: "qwerty",
        display_src: "https://www.pontofrio-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=253905245"
      }];
    default:
      return state;
  }
}

export default posts;
