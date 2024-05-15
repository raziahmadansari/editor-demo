import { Plugin } from '@ckeditor/ckeditor5-core';
import {
  FileRepository,
  FileLoader,
  UploadResponse,
  type UploadAdapter,
} from '@ckeditor/ckeditor5-upload';
import { Subscription } from 'rxjs';

export default class DVImageUplaodPlugin extends Plugin {
  public static get requires() {
    return [FileRepository] as const;
  }

  public static get pluginName() {
    return 'DVImageUplaodPlugin' as const;
  }

  init() {
    const imageUploadService = this.editor.config.get('dvUpload.service');
    // this.editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
    //   return new Adapter(loader, imageUploadService);
    // };
  }
}

class Adapter implements UploadAdapter {
  loader: FileLoader;
  imageDataService: any;
  apiSubscription?: Subscription;
  constructor(loader: FileLoader, imageDataService: any) {
    this.loader = loader;
    this.imageDataService = imageDataService;
  }

  upload(): Promise<UploadResponse> {
    return this.loader.file.then(
      (file) =>
        new Promise<UploadResponse>((resolve, reject) => {
          if (!file) {
            return;
          }

          const genericErrorText = `Couldn't upload file: ${file.name}`;
          const data = new FormData();
          data.append('file', file, file.name + new Date().getTime() + '.png');
          this.apiSubscription = this.imageDataService
            .uploadImage(data)
            .subscribe({
              next: (response: any) =>
                resolve({
                  default: response[0].blobUrl,
                }),
              error: (_error: any) => reject(genericErrorText),
            });
        })
    );
  }

  abort?(): void {
    this.apiSubscription?.unsubscribe();
  }
}
