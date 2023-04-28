import icons from 'url:../../img/icons.svg';
import View from './view.js';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // page 1 there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupButton(curPage);
    }
    // last page
    if (curPage === numPages && numPages > 1) {
      return this._generateMarkupButton2(curPage);
    }
    // other page
    if (curPage < numPages) {
      return `
      ${this._generateMarkupButton(curPage)}${this._generateMarkupButton2(
        curPage
      )}
      `;
    }

    // page 1 no other pages
    return '';
  }

  _generateMarkupButton(page) {
    return `<button data-goto = "${
      page + 1
    }"class="btn--inline pagination__btn--next">
    <span>${page + 1}</span}>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
    </svg>
  </button>`;
  }
  _generateMarkupButton2(page) {
    return `<button data-goto = "${
      page - 1
    }" class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span>${page - 1}</span>
  </button>`;
  }
}

export default new PaginationView();
