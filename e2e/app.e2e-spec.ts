import { TodomvcPage } from './app.po';

describe('todomvc App', () => {
  let page: TodomvcPage;

  beforeEach(() => {
    page = new TodomvcPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
