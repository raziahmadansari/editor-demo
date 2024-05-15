import { type DVMention } from './index';
declare module '@ckeditor/ckeditor5-core' {
    interface PluginsMap {
        [DVMention.pluginName]: DVMention;
    }
}
