import React from 'react';

export default class BookList extends React.Component {
	renderList() {
		return this.props.books.map((book, index) => {
			return (<li key={`book-${index}`} className="list-group-item"> {book.title} </li>);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}