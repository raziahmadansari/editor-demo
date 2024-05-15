import { Plugin } from '@ckeditor/ckeditor5-core';
import { CommentsRepository } from '@ckeditor/ckeditor5-comments';
export default class DVCommentsAdapter extends Plugin {
    static get requires(): readonly [typeof CommentsRepository];
    static get pluginName(): "DVCommentsAdapter";
    init(): void;
}
