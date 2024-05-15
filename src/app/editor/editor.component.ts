import { Component, Input, OnInit } from '@angular/core';

import CustomEditor from 'ckeditor5-custom-build';
import { EditorConfig } from '@ckeditor/ckeditor5-core';
import { CKEditorCommentsService } from '../services/ckeditor-comments.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss',
})
export class EditorComponent implements OnInit {
  @Input() editorInstanceId!: number;

  private _users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
    { id: 4, name: 'User 4' },
    { id: 5, name: 'User 5' },
  ];
  private _mentionList: Array<any> = [];

  editor = CustomEditor;
  model = { editorData: '' };
  config: EditorConfig = {
    placeholder:
      'Start typing to leave a note. To mention and notify a team member, type @',
    dvUpload: {
      callback: () => {},
    },
    // Provide the configuration for the comments feature.
    comments: {
      editorConfig: {},
    },
    importWord: {
      formatting: {
        resets: 'none',
        defaults: 'none',
        styles: 'inline',
        comments: 'none',
      },
    },
    removePlugins: [],
    licenseKey: '< your license key >',
  };

  constructor(
    private readonly ckEditorCommentsService: CKEditorCommentsService
  ) {}

  ngOnInit(): void {
    this.initConfiguration();
  }

  //#region Editor callbacks

  onBlur(event: any): void {
    console.log('On blur: ', event);
  }

  onChange(event: any): void {
    console.log('On change: ', event);
  }

  onFocus(event: any): void {
    console.log('On focus: ', event);
  }

  onReady(event: any): void {
    console.log('On ready: ', event);
  }

  //#endregion

  //#region Editor Configuration

  private initConfiguration(): void {
    this.addUsers();
    this.addMentions();
    this.addComments();
  }

  private addUsers(): void {
    this.config.dvUserConfig = {
      users: this._users.map((user) => ({ id: user.id, name: user.name })),
      currentUserId: this._users.at(0)!.id,
    };
  }

  private addMentions(): void {
    if (this._mentionList.length === 0) {
      this._mentionList = this._users.map((user) => ({
        id: `@${user.name}`,
        userId: `${user.id}`,
        name: user.name,
      }));
    }

    this.config.mention = {
      feeds: [
        {
          marker: '@',
          feed: this.getFeedItems.bind(this),
        },
      ],
    };
  }

  private getFeedItems(queryText: string): Array<any> {
    let users = [...this._mentionList];
    if (queryText) {
      users = users.filter((user) =>
        user.name.toLowerCase().includes(queryText.toLowerCase())
      );
      users = users.slice(0, 10);
    }

    return users;
  }

  private addComments(): void {
    this.config.comments = {
      editorConfig: {
        mention: {
          feeds: [
            {
              marker: '@',
              feed: this.getFeedItems.bind(this),
            },
          ],
        },
      },
    };

    this.config.dvComments = {
      service: this.ckEditorCommentsService,
    };

    this.config.dvTrackChanges = {
      service: this.ckEditorCommentsService,
    };
  }

  //#endregion
}
