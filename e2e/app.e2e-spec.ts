import { RewardYourselfAppPage } from './app.po';

describe('reward-yourself-app App', function() {
  let page: RewardYourselfAppPage;

  beforeEach(() => {
    page = new RewardYourselfAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
