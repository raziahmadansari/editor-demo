/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';

import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import {
  Bold,
  Code,
  Italic,
  Strikethrough,
  Subscript,
  Superscript,
  Underline,
} from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { EasyImage } from '@ckeditor/ckeditor5-easy-image';
import { Font } from '@ckeditor/ckeditor5-font';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import {
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  PictureEditing,
} from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { PasteFromOfficeEnhanced } from '@ckeditor/ckeditor5-paste-from-office-enhanced';
import { GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support';
import {
  Table,
  TableToolbar,
  TableProperties,
  TableCellProperties,
} from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Mention } from '@ckeditor/ckeditor5-mention';
import { Comments } from '@ckeditor/ckeditor5-comments';
import { TrackChanges } from '@ckeditor/ckeditor5-track-changes';
import { TextPartLanguage } from '@ckeditor/ckeditor5-language';
// import { EditorConfig } from '@ckeditor/ckeditor5-core';
// import { Plugin } from '@ckeditor/ckeditor5-core';
import { type EditorConfig } from '@ckeditor/ckeditor5-core';
// import type { RevisionData } from '@ckeditor/ckeditor5-revision-history/src/revision';
import { ImportWord } from '@ckeditor/ckeditor5-import-word';

import { DVImageUplaodPlugin, DVImageUploadUI } from './plugins/image-uploader';
import { DVMention } from './plugins/dv-mention';
import { DVCommentsAdapter } from './plugins/dv-comments';
import { DVTrackChangesAdapter } from './plugins/dv-trackchanges';
// import { DVRevisionHistoryAdapter } from './plugins/dv-revision-history';
import { DVUsers } from './plugins/dv-users';

export default class CustomEditor extends ClassicEditorBase {
  public static override builtinPlugins = [
    Alignment,
    Autoformat,
    BlockQuote,
    Bold,
    CloudServices,
    Code,
    Comments,
    EasyImage,
    Essentials,
    Font,
    GeneralHtmlSupport,
    Heading,
    HorizontalLine,
    Italic,
    Image,
    ImageCaption,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    ImportWord,
    Indent,
    Link,
    List,
    Mention,
    Paragraph,
    PasteFromOffice,
    PasteFromOfficeEnhanced,
    PictureEditing,
    Strikethrough,
    Subscript,
    Superscript,
    Table,
    TableCellProperties,
    TableProperties,
    TableToolbar,
    TextPartLanguage,
    TextTransformation,
    TrackChanges,
    Underline,

    // Custom Plugins
    DVUsers,
    DVCommentsAdapter,
    DVImageUplaodPlugin,
    DVImageUploadUI,
    DVMention,
    // DVRevisionHistoryAdapter,
    DVTrackChangesAdapter,
  ];

  public static override defaultConfig: EditorConfig = {
    toolbar: {
      items: [
        'importWord',
        '|',
        // 'revisionHistory',
        'trackChanges',
        'comment',
        'commentsArchive',
        '|',
        'bold',
        'italic',
        'underline',
        'subscript',
        'superscript',
        '|',
        'alignment:left',
        'alignment:right',
        'alignment:center',
        'alignment:justify',
        '|',
        'fontSize',
        'fontFamily',
        'fontColor',
        'fontBackgroundColor',
        '|',
        'link',
        'dvUploadImage',
        '|',
        'insertTable',
        '|',
        'bulletedList',
        'numberedList',
        'outdent',
        'indent',
        '|',
        'horizontalLine',
        '|',
        'undo',
        'redo',
        '|',
        'heading',
        '|',
        'blockQuote',
        'dvFootNote',
      ],
    },
    image: {
      toolbar: [
        'imageStyle:inline',
        'imageStyle:block',
        'imageStyle:side',
        '|',
        'toggleImageCaption',
        'imageTextAlternative',
      ],
    },
    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells',
        '|',
        'tableProperties',
        'tableCellProperties',
      ],
    },
    // alignment: {
    //   options: ['left', 'center', 'right', 'justify']
    // },
    // Configuration of the GeneralHtmlSupport plugin to allow extra content into the editor.
    // This configuration will preserve styles and formatting normally unsupported by core editor features.
    htmlSupport: {
      allow: [
        {
          name: /^.*$/,
          styles: true,
          attributes: true,
          classes: true,
        },
      ],
    },
    // Configuration of the FontFamily plugin.
    fontFamily: {
      options: [
        'default',
        'Arial, Helvetica, sans-serif',
        'Courier New, Courier, monospace',
        'Georgia, serif',
        'Lucida Sans Unicode, Lucida Grande, sans-serif',
        'Tahoma, Geneva, sans-serif',
        'Times New Roman, Times, serif',
        'Trebuchet MS, Helvetica, sans-serif',
        'Verdana, Geneva, sans-serif',
      ],
      // Allow all fonts from Microsoft Office documents
      // including those that are unknown to CKEditor.
      supportAllValues: true,
    },
    // Configuration of the FontSize plugin.
    fontSize: {
      options: [8, 10, 12, 14, 'default', 18, 20, 22],

      // Allow all font sizes from Microsoft Office documents
      // including those that are unknown to CKEditor.
      supportAllValues: true,
    },
    // This value must be kept in sync with the language defined in webpack.config.js.
    language: 'en',
  };
}
