import { Plugin } from '@ckeditor/ckeditor5-core';
import { RevisionHistory } from '@ckeditor/ckeditor5-revision-history';
export default class DVRevisionHistoryAdapter extends Plugin {
    static get requires(): readonly [typeof RevisionHistory];
    static get pluginName(): "DVRevisionHistoryAdapter";
    init(): void;
}
