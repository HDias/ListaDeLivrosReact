// ActionCreator é apenas uma function para retornar Action
// Action é apena um objeto que envia para diferentes reducers

/**
 * ActionCreate aqui
 */
export function selectBook(book) {
  // selectBook é um ActionCreatr, isto precisa retornar uma Action
  // um object com um tipo de propriedade
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
