import { Plugin } from '@ckeditor/ckeditor5-core';
import { ImageEditing } from '@ckeditor/ckeditor5-image';
export default class DVImageUploadUI extends Plugin {
    static get requires(): readonly [typeof ImageEditing];
    static get pluginName(): "DVImageUploadUI";
    init(): void;
}
