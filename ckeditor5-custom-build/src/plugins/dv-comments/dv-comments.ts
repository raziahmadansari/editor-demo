import { Plugin } from '@ckeditor/ckeditor5-core';
import { CommentsRepository } from '@ckeditor/ckeditor5-comments';
import { Observable } from 'rxjs';

export default class DVCommentsAdapter extends Plugin {
  public static get requires() {
    return [CommentsRepository] as const;
  }

  public static get pluginName() {
    return 'DVCommentsAdapter' as const;
  }

  init(): void {
    const usersPlugin = this.editor.plugins.get('Users');
    const commentsRepositoryPlugin =
      this.editor.plugins.get('CommentsRepository');
    const dvCommentsConfig = this.editor.config.get('dvComments');
    const service = dvCommentsConfig?.service;

    // Set the adapter on the `CommentsRepository#adapter` property.
    commentsRepositoryPlugin.adapter = {
      addComment(data) {
        console.log('Comment added', data);

        // Write a request to your database here. The returned `Promise`
        // should be resolved when the request has finished.
        // When the promise resolves with the comment data object, it
        // will update the editor comment using the provided data.
        return new Promise((resolve, reject) => {
          (service.addComment(data) as Observable<any>).subscribe({
            next: (response: any) => {
              resolve({
                commentId: data.commentId,
                createdAt: new Date(), // Should be set on the server side.
              });
            },
          });
        });
      },

      updateComment(data) {
        console.log('Comment updated', data);

        // Write a request to your database here. The returned `Promise`
        // should be resolved when the request has finished.
        return new Promise((resolve, reject) => {
          (service.updateComment(data) as Observable<any>).subscribe({
            next: (response: any) => {
              resolve();
            },
          });
        });
      },

      removeComment(data) {
        console.log('Comment removed', data);

        // Write a request to your database here. The returned `Promise`
        // should be resolved when the request has finished.
        return new Promise((resolve, reject) => {
          next: (response: any) => {
            resolve();
          };
        });
      },

      addCommentThread(data) {
        console.log('Comment thread added', data);

        // Write a request to your database here. The returned `Promise`
        // should be resolved when the request has finished.
        return new Promise((resolve, reject) => {
          (service.addCommentThread(data) as Observable<any>).subscribe({
            next: (response: any) => {
              resolve({
                threadId: data.threadId,
                comments: data.comments.map((comment) => ({
                  commentId: comment.commentId!,
                  createdAt: new Date(),
                })), // Should be set on the server side.
              });
            },
          });
        });
      },

      getCommentThread(data) {
        console.log('Getting comment thread', data);

        // Write a request to your database here. The returned `Promise`
        // should resolve with the comment thread data.
        return new Promise((resolve, reject) => {
          (service.getCommentThread(data) as Observable<any>).subscribe({
            next: (response: any) => {
              const thread = {
                threadId: data.threadId,
                comments: [
                  {
                    commentId: 'comment-1',
                    authorId: 'user-2',
                    content:
                      '<p>Are we sure we want to use a made-up disorder name?</p>',
                    createdAt: new Date(),
                    attributes: {},
                  },
                ],
                // It defines the value on which the comment has been created initially.
                // If it is empty it will be set based on the comment marker.
                context: {
                  type: 'text',
                  value: 'Bilingual Personality Disorder',
                },
                unlinkedAt: null,
                resolvedAt: null,
                resolvedBy: null,
                attributes: {},
                isFromAdapter: true,
              };

              resolve(thread);
            },
          });
        });
      },

      updateCommentThread(data) {
        console.log('Comment thread updated', data);

        // Write a request to your database here. The returned `Promise`
        // should be resolved when the request has finished.
        return new Promise((resolve, reject) => {
          (service.updateCommentThread(data) as Observable<any>).subscribe({
            next: (response: any) => {
              resolve();
            },
          });
        });
      },

      resolveCommentThread(data) {
        console.log('Comment thread resolved', data);

        // Write a request to your database here. The returned `Promise`
        // should be resolved when the request has finished.
        return new Promise((resolve, reject) => {
          (service.resolveCommentThread(data) as Observable<any>).subscribe({
            next: (response: any) => {
              resolve({
                threadId: data.threadId,
                resolvedAt: new Date(), // Should be set on the server side.
                resolvedBy: usersPlugin?.me?.id!, // Should be set on the server side.
              });
            },
          });
        });
      },

      reopenCommentThread(data) {
        console.log('Comment thread reopened', data);

        // Write a request to your database here. The returned `Promise`
        // should be resolved when the request has finished.
        return new Promise((resolve, reject) => {
          (service.reopenCommentThread(data) as Observable<any>).subscribe({
            next: (response: any) => {
              resolve();
            },
          });
        });
      },

      removeCommentThread(data) {
        console.log('Comment thread removed', data);

        // Write a request to your database here. The returned `Promise`
        // should be resolved when the request has finished.
        return new Promise((resolve, reject) => {
          (service.removeCommentThread(data) as Observable<any>).subscribe({
            next: (response: any) => {
              resolve();
            },
          });
        });
      },
    };
  }
}
