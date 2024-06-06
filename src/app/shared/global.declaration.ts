import CustomEditor from 'ckeditor5-custom-build';

declare global {
  interface Window {
    editor: CustomEditor | null;
  }
}
