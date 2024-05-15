import { Plugin, icons } from '@ckeditor/ckeditor5-core';
import { ImageEditing, UploadImageCommand } from '@ckeditor/ckeditor5-image';
import { ButtonView } from '@ckeditor/ckeditor5-ui';

export default class DVImageUploadUI extends Plugin {
  public static get requires() {
    return [ImageEditing] as const;
  }

  public static get pluginName() {
    return 'DVImageUploadUI' as const;
  }

  init(): void {
    const editor = this.editor;
    const t = editor.t; // Language translation.
    const callback = editor.config.get('dvUpload.callback');
    const componentCreator = () => {
      const view = new ButtonView();
      const command: UploadImageCommand = editor.commands.get('uploadImage')!;

      view.label = t('Upload image from computer');
      view.icon = icons.imageUpload;
      view.tooltip = true;

      view.bind('isEnabled').to(command);
      view.on('execute', () => {
        if (!callback) {
          // Do nothing if callback is not specified.
          return;
        }

        callback();
      });

      return view;
    };

    editor.ui.componentFactory.add('dvUploadImage', componentCreator);
  }
}
