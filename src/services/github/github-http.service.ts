import { Inject, forwardRef } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { GithubService } from './github.service'

export class GithubHttpService implements GithubService {

    public constructor( @Inject(forwardRef(() => Http)) protected http: Http) { }


    // GithubService implementation
    // --------------------------------------------------

    public getUserAvatarURL(username: string): Promise<string> {
        return this.http.get(this.getUserAvatarPath(username))
            .toPromise()
            .then((response: Response) => {
                return this.parseURLFromJSON(response.json());
            });
    }

    // Helpers
    // --------------------------------------------------

    protected getUserAvatarPath(username: string): string {
        return 'https://api.github.com/users/' + username;
    }

    protected parseURLFromJSON(json: any): Promise<string> {
        let avatarURL: string = json['avatar_url'];
        return Promise.resolve(avatarURL);
    }
}
