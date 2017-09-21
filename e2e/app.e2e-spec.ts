import { XTOAppPage } from './app.po';

describe('xtoapp App', function() {
  let page: XTOAppPage;

  beforeEach(() => {
    page = new XTOAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
