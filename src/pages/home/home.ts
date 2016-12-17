import { Component } from '@angular/core';

import { GithubService } from '../../services/github/github.service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public avatarURL: string;

  constructor(protected githubService: GithubService) {
    this.loadAvatarURL();
    console.log(process.env);
  }

  protected loadAvatarURL(): void {
    this.githubService.getUserAvatarURL('ericdesa').then((avatarURL: string) => {
      this.avatarURL = avatarURL;
    });
  }

}
