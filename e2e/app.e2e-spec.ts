import { SearchGitPage } from './app.po';

describe('search-git App', function() {
  let page: SearchGitPage;

  beforeEach(() => {
    page = new SearchGitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
