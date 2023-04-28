import icons from 'url:../../img/icons.svg';
import view from './view.js';
import previewView from './previewView.js';
class BookmarksView extends view {
  _errorMessage = 'No bookmarks yet, find a nice recipe and bookmark it';
  _message;

  _parentElement = document.querySelector('.bookmarks__list');

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
