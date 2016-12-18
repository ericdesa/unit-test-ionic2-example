
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { GithubService } from './github.service';

beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpModule],
        providers: [GithubService],
    });
});

describe(`GetAvatarURL`, () => {

    it(`parse the right field`, (async(inject([GithubService], (githubService: GithubService) => {
        githubService.getUserAvatarURL('dryftyco').then((avatarURL: string) => {
            expect(avatarURL).toEqual('https://avatars.githubusercontent.com/u/9135434?v=3');
        });
    }))));

    it(`fail if no username is provided`, (async(inject([GithubService], (githubService: GithubService) => {
        githubService.getUserAvatarURL(undefined)
            .then((avatarURL: string) => {
                expect(true).toBeFalsy();
            })
            .catch((reason: any) => {
                expect(false).toBeFalsy();
            });
    }))));

});
