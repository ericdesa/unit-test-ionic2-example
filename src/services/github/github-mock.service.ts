import { Response } from '@angular/http';

import { GithubHttpService } from './github-http.service'

export class GithubMockService extends GithubHttpService {

    // GithubService implementation
    // --------------------------------------------------

    public getUserAvatarURL(username: string): Promise<string> {
        return this.getMockFileJSON('github-' + username + '-profile.json').then((json: any) => {
            return this.parseURLFromJSON(json);
        });
    }

    // Helpers
    // --------------------------------------------------

    protected getMockFileJSON(fileName: string): Promise<any> {
        debugger
        return this.http.get('/assets/mocks/' + fileName)
            .toPromise()
            .then((response: Response) => {
                let json: any = response.json();
                return Promise.resolve(json);
            });
    }
}
