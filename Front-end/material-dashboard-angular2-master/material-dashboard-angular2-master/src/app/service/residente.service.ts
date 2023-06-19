import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Residente } from "app/interface/residente";
import { environment } from "environments/environment";
import { Observable, from } from "rxjs";


@Injectable({
  providedIn: "root",
})
export class ResidenteService {
  NOME_COLECAO = "residente";
  colecaoResidente: AngularFirestoreCollection<Residente>;
  private readonly URL_residentes = `${environment.API}/residente`;

  constructor(private afs: AngularFirestore) {
    this.colecaoResidente = afs.collection(this.NOME_COLECAO);
  }

  getAll(): Observable<Residente[]> {
    return this.colecaoResidente.valueChanges({ idField: "id" });
  }

  create(residente: Residente): Observable<object> {
    delete residente.id;
    return from(this.colecaoResidente.add(Object.assign({}, residente)));
  }

  atualizar(residente: Residente): Observable<void> {
    const id = residente.id;
    delete residente.id;
    return from(this.colecaoResidente.doc(id).update(Object.assign({}, residente)));
  }

  buscarResidentePorId(id: string) {
    return this.colecaoResidente.doc(id).get
  }

  excluirResidente(id: string | undefined): Observable<void> {
    return from(this.colecaoResidente.doc(id).delete());
  }

}
