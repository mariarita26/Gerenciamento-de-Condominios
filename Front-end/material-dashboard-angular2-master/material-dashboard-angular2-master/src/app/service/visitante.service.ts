import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Visitante } from 'app/interface/visitante';
import { environment } from 'environments/environment';
import { Observable, from, take } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VisitanteService {
  NOME_COLECAO = 'visitante';
  colecaoVisitante: AngularFirestoreCollection<Visitante>;

  private readonly URL_visitantes = `${environment.API}/visitante`;

  constructor(private afs: AngularFirestore) {
    this.colecaoVisitante = afs.collection(this.NOME_COLECAO);
   }

  listar() {
    return this.colecaoVisitante.valueChanges({idField: 'id'});
  }

  atualizar(visitante: Visitante): Observable<void> {
    const id = visitante.id
    delete visitante.id;
    return from(this.colecaoVisitante.doc(id).update(Object.assign({}, visitante)));  }

  inserir(novoVisitante: Visitante): Observable<object> {
    delete novoVisitante.id;
    return from(this.colecaoVisitante.add(Object.assign({}, novoVisitante)))
  }

  buscarVisitantePorId(id: string) {
    return this.colecaoVisitante.doc(id).get();
  }

  excluirVisitante(id: string | undefined): Observable<void>{
    return from(this.colecaoVisitante.doc(id).delete());
  }
}
