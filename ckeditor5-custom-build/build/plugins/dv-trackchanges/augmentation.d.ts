import type { DVTrackChangesAdapter, DVTrackChangesConfig } from './index';
declare module '@ckeditor/ckeditor5-core' {
    interface PluginsMap {
        [DVTrackChangesAdapter.pluginName]: DVTrackChangesAdapter;
    }
    interface EditorConfig {
        dvTrackChanges?: DVTrackChangesConfig;
    }
}
