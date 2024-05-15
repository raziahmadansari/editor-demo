import { Plugin } from '@ckeditor/ckeditor5-core';
import { TrackChanges } from '@ckeditor/ckeditor5-track-changes';
export default class DVTrackChangesAdapter extends Plugin {
    static get requires(): readonly [typeof TrackChanges];
    static get pluginName(): "DVTrackChangesAdapter";
    service: any;
    init(): void;
}
