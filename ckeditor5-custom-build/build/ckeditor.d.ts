/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Bold, Code, Italic, Strikethrough, Subscript, Superscript, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { EasyImage } from '@ckeditor/ckeditor5-easy-image';
import { Font } from '@ckeditor/ckeditor5-font';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload, PictureEditing } from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { PasteFromOfficeEnhanced } from '@ckeditor/ckeditor5-paste-from-office-enhanced';
import { GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support';
import { Table, TableToolbar, TableProperties, TableCellProperties } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Mention } from '@ckeditor/ckeditor5-mention';
import { Comments } from '@ckeditor/ckeditor5-comments';
import { TrackChanges } from '@ckeditor/ckeditor5-track-changes';
import { TextPartLanguage } from '@ckeditor/ckeditor5-language';
import { type EditorConfig } from '@ckeditor/ckeditor5-core';
import { ImportWord } from '@ckeditor/ckeditor5-import-word';
import { DVImageUplaodPlugin, DVImageUploadUI } from './plugins/image-uploader';
import { DVMention } from './plugins/dv-mention';
import { DVCommentsAdapter } from './plugins/dv-comments';
import { DVTrackChangesAdapter } from './plugins/dv-trackchanges';
import { DVUsers } from './plugins/dv-users';
export default class CustomEditor extends ClassicEditorBase {
    static builtinPlugins: (typeof DVImageUplaodPlugin | typeof DVImageUploadUI | typeof TextTransformation | typeof Essentials | typeof Autoformat | typeof Alignment | typeof Superscript | typeof Subscript | typeof Bold | typeof Code | typeof Italic | typeof Strikethrough | typeof Underline | typeof BlockQuote | typeof EasyImage | typeof Font | typeof Paragraph | typeof Heading | typeof HorizontalLine | typeof Image | typeof ImageCaption | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof Indent | typeof Link | typeof List | typeof PasteFromOffice | typeof PasteFromOfficeEnhanced | typeof GeneralHtmlSupport | typeof Table | typeof TableCellProperties | typeof TableProperties | typeof TableToolbar | typeof CloudServices | typeof Mention | typeof TextPartLanguage | typeof ImportWord | typeof DVMention | typeof DVCommentsAdapter | typeof DVTrackChangesAdapter | typeof DVUsers | typeof TrackChanges | typeof Comments | typeof PictureEditing)[];
    static defaultConfig: EditorConfig;
}
