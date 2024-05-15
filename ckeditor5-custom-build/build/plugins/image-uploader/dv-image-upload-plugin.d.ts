import { Plugin } from '@ckeditor/ckeditor5-core';
import { FileRepository } from '@ckeditor/ckeditor5-upload';
export default class DVImageUplaodPlugin extends Plugin {
    static get requires(): readonly [typeof FileRepository];
    static get pluginName(): "DVImageUplaodPlugin";
    init(): void;
}
