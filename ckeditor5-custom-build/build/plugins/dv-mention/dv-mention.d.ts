import { Plugin } from '@ckeditor/ckeditor5-core';
import { Mention } from '@ckeditor/ckeditor5-mention';
export default class DVMention extends Plugin {
    static get requires(): readonly [typeof Mention];
    static get pluginName(): "DVMention";
    init(): void;
}
