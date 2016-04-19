// Container são os componentes que acesso direto ao state produzido pelo REDUX
import React, {
  Component
} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-md-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // tanto faz o que é retornado. Estará anexado ao props
  return {
    books: state.books
  }
}

/**
 * Qualque coisa que retornar desta função vai acabar com props no
 * container de BookList
 */
function mapDispatchToProps(dispatch) {
  // Sempre que chamar selectBook o resultado deve ser passado
  // para todos os reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promove um BookList a partir de um component para um container - precisa
// conhecer sobre o novo método de envio de selectBook. È possível graças ao props
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
