import { PickleBallPage } from './app.po';

describe('pickle-ball App', () => {
  let page: PickleBallPage;

  beforeEach(() => {
    page = new PickleBallPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
