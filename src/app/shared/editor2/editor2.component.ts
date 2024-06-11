import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import CustomEditor from 'ckeditor5-custom-build';
import { EditorConfig } from '@ckeditor/ckeditor5-core';
import { CKEditorCommentsService } from '../../services/ckeditor-comments.service';
import { CKEditorManagerService } from '../../services/ckeditor-manager.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-editor2',
  templateUrl: './editor2.component.html',
  styleUrl: './editor2.component.scss',
})
export class Editor2Component {
  @Input() editorInstanceId!: number;
  @Output() onEditorReady = new EventEmitter<any>();

  @ViewChild('viewContainerRef', { read: ViewContainerRef, static: true })
  viewContainerRef!: ViewContainerRef;
  @ViewChild('readonlyTemplate', { read: TemplateRef, static: true })
  readonlyTemplate!: TemplateRef<{ data: string }>;
  @ViewChild('editorTemplate', { read: TemplateRef, static: true })
  editorTemplate!: TemplateRef<{ config: any; editor: any; model: any }>;

  private _users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
    { id: 4, name: 'User 4' },
    { id: 5, name: 'User 5' },
  ];
  private _mentionList: Array<any> = [];
  private _instanceManagerSubscription!: Subscription;

  id: string;
  editorMode: 'readonly' | 'editor' = 'readonly';
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
    private readonly ckEditorManagerService: CKEditorManagerService,
    private readonly ckEditorCommentsService: CKEditorCommentsService
  ) {
    this.id = this.getEditorId();
  }

  ngOnInit(): void {
    console.log(`editor initiated: { editorId: ${this.editorInstanceId} }`);
    this.initiateReadonlyMode();
    this._instanceManagerSubscription =
      this.ckEditorManagerService.onInstanceUpdated.subscribe(
        (instanceDetail) => {
          if (instanceDetail.currentEditorInstanceId === this.id) {
            this.editorMode = 'editor';
            this.initiateEditor();
          } else if (instanceDetail.previousEditorInstanceId === this.id) {
            this.editorMode = 'readonly';
            this.initiateReadonlyMode();
          }
        }
      );

    this.initConfiguration();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`editor changes: { editorId: ${this.editorInstanceId} }`);
  }

  ngOnDestroy(): void {
    this._instanceManagerSubscription.unsubscribe();
    window.editor = null;
  }

  //#region Editor callbacks

  onBlur(event: any): void {
    // console.log('On blur: ', event);
  }

  onChange(event: any): void {
    // console.log('On change: ', event);
  }

  onFocus(event: any): void {
    // console.log('On focus: ', event);
  }

  onReady(event: any): void {
    // console.log('On ready: ', event);
    window.editor = event;
    this.onEditorReady.emit(event);
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

  //#region Instance Manager

  activateEditor(): void {
    if (this.editorMode === 'editor') {
      return;
    }

    this.ckEditorManagerService.setActiveEditor(this.id);
  }

  private initiateEditor(): void {
    this.viewContainerRef.clear();
    this.viewContainerRef.createEmbeddedView(this.editorTemplate, {
      config: this.config,
      editor: this.editor,
      model: this.model,
    });
  }

  private initiateReadonlyMode(): void {
    this.viewContainerRef.clear();
    this.viewContainerRef.createEmbeddedView(this.readonlyTemplate, {
      data: `Placeholder data - EditorInstanceId: (${this.id})`,
    });
  }

  private getEditorId(): string {
    return `ckeditor-instance-${new Date().getTime()}`;
  }

  //#endregion
}
