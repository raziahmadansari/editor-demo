import { Plugin } from '@ckeditor/ckeditor5-core';
import { TrackChanges } from '@ckeditor/ckeditor5-track-changes';
import { Observable } from 'rxjs';

export default class DVTrackChangesAdapter extends Plugin {
  public static get requires() {
    return [TrackChanges] as const;
  }

  public static get pluginName() {
    return 'DVTrackChangesAdapter' as const;
  }

  // Get the service instance from configuration.
  service: any = {
    add() {
      console.log('add suggestion from service');
    },
  };

  init(): void {
    const usersPlugin = this.editor.plugins.get('Users');
    const trackChangesPlugin = this.editor.plugins.get(
      'TrackChanges'
    ) as TrackChanges;
    const dvTrackChangesConfig = this.editor.config.get('dvTrackChanges');
    const service = dvTrackChangesConfig?.service;

    // Set the current user as anonymous.
    // usersPlugin.useAnonymousUser(); // This will now come from DVUsers

    // Set the adapter to the `TrackChanges#adapter` property.
    trackChangesPlugin.adapter = {
      getSuggestion: (suggestionId) => {
        console.log('Getting suggestion', suggestionId);

        // Write a request to your database here.
        // The returned `Promise` should be resolved with the suggestion
        // data object when the request has finished.
        return new Promise((resolve, reject) => {
          (service.getSuggestion(suggestionId) as Observable<any>).subscribe({
            next: (response: any) => {
              resolve({
                id: suggestionId,
                type: 'insertion',
                authorId: usersPlugin.me?.id!,
                createdAt: new Date(),
                data: null,
                attributes: {},
              });
            },
          });
        });
      },

      addSuggestion: (suggestionData) => {
        console.log('Suggestion added', suggestionData);

        // Write a request to your database here.
        // The returned `Promise` should be resolved when the request
        // has finished. When the promise resolves with the suggestion data
        // object, it will update the editor suggestion using the provided data.
        return new Promise((resolve, reject) => {
          (service.addSuggestion(suggestionData) as Observable<any>).subscribe({
            next: (response: any) => {
              resolve({
                id: suggestionData.id,
                authorId: usersPlugin?.me?.id!,
                type: suggestionData.type,
                attributes: suggestionData.attributes,
                createdAt: new Date(), // Should be set on the server side.
              });
            },
          });
        });
      },

      updateSuggestion: (id, suggestionData) => {
        console.log('Suggestion updated', id, suggestionData);

        // Write a request to your database here.
        // The returned `Promise` should be resolved when the request
        // has finished.
        return new Promise((resolve, reject) => {
          (
            service.updateSuggestion({ id, suggestionData }) as Observable<any>
          ).subscribe({
            next: (response: any) => {
              resolve();
            },
          });
        });
      },
    };

    // In order to load comments added to suggestions, you
    // should also integrate the comments adapter.
  }
}
