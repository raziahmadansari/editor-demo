import type {
  DVImageUplaodPlugin,
  DVImageUploadUI,
  DVUploadConfig,
} from './index';

declare module '@ckeditor/ckeditor5-core' {
  interface EditorConfig {
    dvUpload?: DVUploadConfig;
  }

  interface PluginsMap {
    [DVImageUplaodPlugin.pluginName]: DVImageUplaodPlugin;
    [DVImageUploadUI.pluginName]: DVImageUploadUI;
  }
}
