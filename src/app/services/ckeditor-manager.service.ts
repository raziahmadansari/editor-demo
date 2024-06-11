import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CKEditorManagerService {
  private _currentEditorInstanceId!: string;
  private _previousEditorInstanceId!: string;

  constructor() {}

  private _instanceManager: Subject<CKEditorInstanceManagerData> =
    new Subject<CKEditorInstanceManagerData>();

  onInstanceUpdated: Observable<CKEditorInstanceManagerData> =
    this._instanceManager.asObservable();

  setActiveEditor(editorInstanceId: string): void {
    this._previousEditorInstanceId = this._currentEditorInstanceId;
    this._currentEditorInstanceId = editorInstanceId;

    this._instanceManager.next({
      currentEditorInstanceId: this._currentEditorInstanceId,
      previousEditorInstanceId: this._previousEditorInstanceId,
    });
  }
}

export interface CKEditorInstanceManagerData {
  currentEditorInstanceId: string;
  previousEditorInstanceId: string;
}
