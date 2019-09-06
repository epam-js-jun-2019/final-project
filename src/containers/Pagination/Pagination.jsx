import React, { Component } from 'react';
import cn from 'classnames';
import { PAGINATION_RANGE } from '../../constants';
import PaginationView from '../../components/PaginationView/PaginationView';

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.paginate = this.paginate.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
  }

  paginate(num) {
    const { switchPage } = this.props;
    return (e) => {
      e.preventDefault();
      switchPage(num);
    }
  }

  renderButtons() {
    const { itemsNumber, page, itemsPerPage } = this.props;
    if (itemsNumber <= itemsPerPage) {
      return null;
    }
    const lastPage = Math.ceil(itemsNumber / itemsPerPage);

    let pageNumbers = [];

    for (let i = 1; i <= lastPage; i++) {
      pageNumbers.push(i);
    }

    const pageButtons = pageNumbers
      .filter(num => num > page - PAGINATION_RANGE && num < page + PAGINATION_RANGE)
      .map(num => {
        const classes = cn({
          'page-item': true,
          active: page === num ? true : false,
        });

        return (<li key={num} className={classes}>
          <a onClick={this.paginate(num)} className="page-link" href="">{num}</a>
        </li>)
      });

    const firstPageBtn = (<li className="page-item">
      <a onClick={this.paginate(1)} className="page-link" href="#">First</a>
    </li>);

    const lastPageBtn = (<li className="page-item">
      <a onClick={this.paginate(lastPage)} className="page-link" href="#">Last</a>
    </li>);

    return (
      <>
        {page !== 1 && firstPageBtn}
        {pageButtons}
        {page !== lastPage && lastPageBtn}
      </>
    );
  }

  render() {
    const buttons = this.renderButtons();

    return (
      <>
        {buttons && <PaginationView pagination={buttons} />}
      </>
    );
  }
}