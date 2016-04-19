// o parâmetro state não é o state da aplicação
// mas somente deste reducer
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
      break;
    default:

  }

  return state
}
