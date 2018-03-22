import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {FileItem} from '../models/FileItem';
import {AngularFireDatabase} from 'angularfire2/database';


@Injectable()
export class ImmovablesService {
  private CARPETA_IMAGENES = 'img';
  constructor(private db: AngularFireDatabase) { }

  cargarImagenesFirebase(imagenes: FileItem[]) {
    const storageRef = firebase.storage().ref();
    for (const item of imagenes) {
      item.estaSubiendo = true;

      if (item.progreso >= 100) {
        continue;
      }

      const uploadTask: firebase.storage.UploadTask = storageRef.child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`)
        .put(item.archivo);
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot: firebase.storage.UploadTaskSnapshot) => item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes * 100),
        (error) => console.error('Error al subir', error),
        () => {
          console.log('imagen cargada correctamente');
          item.url = uploadTask.snapshot.downloadURL;
          item.estaSubiendo = false;

          //accion de imgenes guardadas
        });
    }
  }

}
