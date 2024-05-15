import { Plugin } from '@ckeditor/ckeditor5-core';
import { Users } from '@ckeditor/ckeditor5-collaboration-core';
export default class DVUsers extends Plugin {
    static get requires(): readonly [typeof Users];
    static get pluginName(): "DVUsers";
    init(): void;
}
