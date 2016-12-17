import { HttpModule } from '@angular/http';
import { TestBed } from '@angular/core/testing';

import { GithubService } from './github.service';
import { GithubMockService } from './github-mock.service';

import { async, inject } from '@angular/core/testing';

beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpModule],
        providers: [
            {
                provide: GithubService,
                useClass: GithubMockService,
            },
        ],
    });
});

describe(`GetAvatarURL`, () => {

    it(`parse the right field`, (async(inject([GithubService], (githubService: GithubService) => {
        githubService.getUserAvatarURL('ericdesa').then((avatarURL: string) => {
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