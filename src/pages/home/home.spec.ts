
import { HomePage } from './home'

it('hello', () => {
    expect(HomePage.hello()).toBe('hello');
});

/*
it('Eric is a really great person', (async(inject([GithubService], (githubService: GithubService) => {
    expect(true).toBeTruthy();
}))));
*/