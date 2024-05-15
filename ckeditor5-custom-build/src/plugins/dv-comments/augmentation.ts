import type { DVCommentsAdapter, DVCommentsConfig } from './index';

declare module '@ckeditor/ckeditor5-core' {
  interface PluginsMap {
    [DVCommentsAdapter.pluginName]: DVCommentsAdapter;
  }

  interface EditorConfig {
    dvComments?: DVCommentsConfig;
  }
}
