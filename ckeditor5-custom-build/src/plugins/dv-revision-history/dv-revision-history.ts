import { Plugin } from '@ckeditor/ckeditor5-core';
import { RevisionHistory } from '@ckeditor/ckeditor5-revision-history';
import { Users } from '@ckeditor/ckeditor5-collaboration-core';

export default class DVRevisionHistoryAdapter extends Plugin {
  public static get requires() {
    return [RevisionHistory] as const;
  }

  public static get pluginName() {
    return 'DVRevisionHistoryAdapter' as const;
  }

  init(): void {
    const editor = this.editor;
    const users = editor.plugins.get('Users');
    const revisionHistory = editor.plugins.get(
      'RevisionHistory'
    ) as RevisionHistory;

    revisionHistory.adapter = {
      getRevision({ revisionId }) {
        return Promise.resolve({
          id: 'initial',
          name: 'Initial revision',
          creatorId: users.me?.id ?? 'anonymous',
          authorsIds: ['u1'],
          diffData: {
            main: {
              insertions:
                '[{"name":"h1","attributes":[],"children":["PUBLISHING AGREEMENT"]},{"name":"h3","attributes":[],"children":["Introduction"]},{"name":"p","attributes":[],"children":["This publishing contract, the “contract”, is entered into as of ………… by and between The Lower Shelf, the “Publisher”, and …………, the “Author”."]},{"name":"h3","attributes":[],"children":["Grant of Rights"]},{"name":"p","attributes":[],"children":["The Author grants the Publisher full right and title to the following, in perpetuity:"]},{"name":"ul","attributes":[],"children":[{"name":"li","attributes":[],"children":["To publish, sell, and profit from the listed works in all languages and formats in existence today and at any point in the future."]},{"name":"li","attributes":[],"children":["To create or devise modified, abridged, or derivative works based on the works listed."]},{"name":"li","attributes":[],"children":["To allow others to use the listed works at their discretion, without providing additional compensation to the Author."]}]},{"name":"p","attributes":[],"children":["These rights are granted by the Author on behalf of him/herself and their successors, heirs, executors, and any other party who may attempt to lay claim to these rights at any point now or in the future."]},{"name":"p","attributes":[],"children":["Any rights not granted to the Publisher above remain with the Author."]},{"name":"p","attributes":[],"children":["The rights granted to the Publisher by the Author shall not be constrained by geographic territories and are considered global in nature."]},{"name":"p","attributes":[],"children":["Publishing formats are enumerated in Appendix A."]}]',
              deletions:
                '[{"name":"h1","attributes":[],"children":["PUBLISHING AGREEMENT"]},{"name":"h3","attributes":[],"children":["Introduction"]},{"name":"p","attributes":[],"children":["This publishing contract, the “contract”, is entered into as of ………… by and between The Lower Shelf, the “Publisher”, and …………, the “Author”."]},{"name":"h3","attributes":[],"children":["Grant of Rights"]},{"name":"p","attributes":[],"children":["The Author grants the Publisher full right and title to the following, in perpetuity:"]},{"name":"ul","attributes":[],"children":[{"name":"li","attributes":[],"children":["To publish, sell, and profit from the listed works in all languages and formats in existence today and at any point in the future."]},{"name":"li","attributes":[],"children":["To create or devise modified, abridged, or derivative works based on the works listed."]},{"name":"li","attributes":[],"children":["To allow others to use the listed works at their discretion, without providing additional compensation to the Author."]}]},{"name":"p","attributes":[],"children":["These rights are granted by the Author on behalf of him/herself and their successors, heirs, executors, and any other party who may attempt to lay claim to these rights at any point now or in the future."]},{"name":"p","attributes":[],"children":["Any rights not granted to the Publisher above remain with the Author."]},{"name":"p","attributes":[],"children":["The rights granted to the Publisher by the Author shall not be constrained by geographic territories and are considered global in nature."]},{"name":"p","attributes":[],"children":["Publishing formats are enumerated in Appendix A."]}]',
            },
          },
          createdAt: new Date(),
          attributes: {},
          fromVersion: 1,
          toVersion: 1,
        });
      },

      updateRevisions(data) {
        const documentData = editor.data.get();

        // This should be an asynchronous request to your database
        // that saves `revisionsData` and `documentData`.
        //
        // The document data should be saved each time a revision is saved.
        //
        // `revisionsData` is an array with objects,
        // where each object contains updated and new revisions.
        //
        // See the API reference for `RevisionHistoryAdapter` to learn
        // how to correctly integrate the feature with your application.
        //
        return Promise.resolve(data);
      },
    };

    // Add the revisions data for existing revisions.
    // You can either dump the revisions data straight in the source code or
    // you can fetch the data asynchronously from your database (as this example shows).
    //
    // Note that the revisions data does not contain the `diffData` property.
    // The `diffData` property may be big and will be fetched on demand by `adapter.getRevision()`.
    //
    // const revisionsData = await this._fetchRevisionsData();

    // for ( const revisionData of revisionsData ) {
    //     revisionHistory.addRevisionData( revisionData );
    // }
  }
}
