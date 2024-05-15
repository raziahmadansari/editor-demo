import { type DVUsers } from './index';
declare module '@ckeditor/ckeditor5-core' {
    interface PluginsMap {
        [DVUsers.pluginName]: DVUsers;
    }
    interface EditorConfig {
        dvUserConfig?: {
            users: Array<any>;
            currentUserId: number;
        };
    }
}
