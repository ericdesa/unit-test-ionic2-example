import { Component } from '@angular/core';

import { GithubService } from '../../services/github/github.service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public avatarURL: string;
  public nodeEnv: string;

  constructor(protected githubService: GithubService) {
    this.loadAvatarURL();
    this.nodeEnv = process.env.NODE_ENV;
  }

  protected loadAvatarURL(): void {
    this.githubService.getUserAvatarURL('ericdesa').then((avatarURL: string) => {
      this.avatarURL = avatarURL;
    });
  }

  public static hello(): string {
    return 'hello';
  }

}
