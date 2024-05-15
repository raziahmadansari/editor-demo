import { Plugin } from '@ckeditor/ckeditor5-core';
import { Users } from '@ckeditor/ckeditor5-collaboration-core';

export default class DVUsers extends Plugin {
  public static get requires() {
    return [Users] as const;
  }

  public static get pluginName() {
    return 'DVUsers' as const;
  }

  init(): void {
    const users = this.editor.plugins.get('Users');
    const dvUserConfig = this.editor.config.get('dvUserConfig');

    if (
      dvUserConfig &&
      dvUserConfig.users &&
      dvUserConfig.users.length &&
      dvUserConfig.currentUserId
    ) {
      dvUserConfig.users.forEach((user) => {
        users.addUser({ id: `${user.id}`, name: user.name });
      });

      users.defineMe(`${dvUserConfig.currentUserId}`);
    } else {
      users.useAnonymousUser();
    }
  }
}
