import SearchBoxResponsiveHandler from '../components/searching/SearchBoxResponsiveHandler';

import debouceFunc from './debouneFunc';

const WindowResponsiveHandler = {
  handleWindowResize() {
    window.addEventListener('resize', () => {
      debouceFunc(() => {
        SearchBoxResponsiveHandler.handleSizeByWindowSize();
      });
    });
  },
};

export default WindowResponsiveHandler;
