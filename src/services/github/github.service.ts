import { Injectable } from '@angular/core';

@Injectable()
export abstract class GithubService {

    public abstract getUserAvatarURL(username: string): Promise<string>;

}
