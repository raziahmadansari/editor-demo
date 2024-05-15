import type { DVRevisionHistoryAdapter } from './index';

declare module '@ckeditor/ckeditor5-core' {
  interface PluginsMap {
    [DVRevisionHistoryAdapter.pluginName]: DVRevisionHistoryAdapter;
  }
}
