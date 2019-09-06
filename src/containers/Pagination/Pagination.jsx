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
      switchPage({ page: num });
    };
  }

  renderButtons() {
    const { itemsNumber, page, itemsPerPage } = this.props;
    if (itemsNumber <= itemsPerPage) {
      return null;
    }
    const lastPage = Math.ceil(itemsNumber / itemsPerPage);

    const pageNumbers = [];

    for (let i = 1; i <= lastPage; i += 1) {
      pageNumbers.push(i);
    }

    const pageButtons = pageNumbers
      .filter((num) => num > page - PAGINATION_RANGE && num < page + PAGINATION_RANGE)
      .map((num) => {
        const classes = cn({
          'page-item': true,
          active: page === num,
        });

        return (
          <li key={num} className={classes}>
            <button type="button" onClick={this.paginate(num)} className="page-link">{num}</button>
          </li>
        );
      });

    const firstPageBtn = (
      <li className="page-item">
        <button type="button" onClick={this.paginate(1)} className="page-link">First</button>
      </li>
    );

    const lastPageBtn = (
      <li className="page-item">
        <button type="button" onClick={this.paginate(lastPage)} className="page-link">Last</button>
      </li>
    );

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
