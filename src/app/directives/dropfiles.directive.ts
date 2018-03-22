import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {FileItem} from '../models/FileItem';

@Directive({
  selector: '[appDropfiles]'
})
export class DropfilesDirective {

  constructor() { }

  @Input() archivos: FileItem[] = [];
  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostListener('dragover', ['$event'])
  public onDragEnter(event: any) {
    this.mouseSobre.emit(true);
    this._prevenirDetener(event);
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(event: any) {
    this.mouseSobre.emit(false);
  }

  @HostListener('drop', ['$event'])
  public onDrop(event: any) {
    this.mouseSobre.emit(false);

    const trasnferencia = this._getTransferencia(event);

    if (!trasnferencia) {
      return;
    }

    this._extraerArchivos(trasnferencia.files);
    this._prevenirDetener(event);
    this.mouseSobre.emit(false);

  }

  private _getTransferencia(event: any) {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private _extraerArchivos( archivosList: FileList) {
    for ( const propiedad in Object.getOwnPropertyNames(archivosList)) {
      const archivoTemp = archivosList[propiedad];
      if (this._archivoPuedeSerCargado(archivoTemp)) {
        const nuevoArchivo = new FileItem(archivoTemp);
        this.archivos.push(nuevoArchivo);
      }
    }

    console.log(this.archivos);

  }

  // Validaciones

  private _archivoPuedeSerCargado(archivo: File) {
    if (!this._archivoYaEstaIncluido(archivo.name) && this._esImagen(archivo.type)) {
      return true;
    } else {
      return false;
    }
  }

  private _prevenirDetener( event) {
    event.preventDefault();
    event.stopPropagation();
  }

  private _archivoYaEstaIncluido( nombreArchivo: string) {
    for (const archivo of this.archivos) {
      if (archivo.nombreArchivo === nombreArchivo) {
        console.log('Archivo ya esta incluido');
        return true;
      }
    }
    return false;
  }

  private _esImagen(tipoArchivo: string) {
    return (tipoArchivo === '' || tipoArchivo === undefined) ? false : tipoArchivo.startsWith('image');
  }
}
