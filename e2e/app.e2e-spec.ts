import { MCleaningAppPage } from './app.po';

describe('m-cleaning-app App', () => {
  let page: MCleaningAppPage;

  beforeEach(() => {
    page = new MCleaningAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
