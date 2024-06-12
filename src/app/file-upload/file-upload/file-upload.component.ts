import { ChangeDetectorRef, Component } from '@angular/core';
import { FileManagerService } from '../../services/file-manager.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss',
})
export class FileUploadComponent {
  message: string = '';
  data: string = '';
  editorInstanceId: number = 1;

  constructor(
    private readonly fileManagerService: FileManagerService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  uploadFile(files: FileList | null): void {
    if (!files) {
      return;
    }

    this.message = '';
    this.data = '';

    const fileToUpload = files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.fileManagerService.uploadFile(formData).subscribe({
      next: (response: any) => {
        this.message = 'Uploaded';
        this.data = response;
        this.changeDetectorRef.detectChanges();
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
