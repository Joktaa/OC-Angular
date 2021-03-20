import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class AppareilService {

  constructor(private httpClient: HttpClient) {}

  appareilSubject = new Subject<any[]>();

  private appareils = [
    {
      id: 1,
      name: "Machine à laver",
      status: "Éteint"
    },
    {
      id: 2,
      name: "Ordinateur",
      status: "Allumé"
    },
    {
      id: 3,
      name: "Frigo",
      status: "Éteint"
    }
  ]

  id = 3;

  emitAppareilSubject(){
    this.appareilSubject.next(this.appareils.slice());
  }

  getAppareilById(id: number){
    const appareil = this.appareils.find((appareilObject) => {
      return appareilObject.id === id;
    })
    return appareil;
  }

  switchOnAll = () => {
    for (let appareil of this.appareils) {
      appareil.status = "Allumé";
    }
    this.emitAppareilSubject();
  }

  switchOffAll = () => {
    for (let appareil of this.appareils) {
      appareil.status = "Éteint";
    }
    this.emitAppareilSubject();
  }

  swithOnOne(index){
    this.appareils[index].status = "Allumé";
    this.emitAppareilSubject();
  }

  swithOffOne(index){
    this.appareils[index].status = "Éteint";
    this.emitAppareilSubject();
  }

  addAppareil(name: string, status: string){
    this.id++;

    this.appareils.push({
      id: this.id,
      name: name,
      status: status,
    })

    this.emitAppareilSubject();
  }

  saveAppareilToServeur() {
    this.httpClient
    .put('https://http-client-demo-5ef42-default-rtdb.firebaseio.com/appareils.json', this.appareils)
    .subscribe(
      () => {
        console.log("Enregistrement terminé");
      },
      (error) => {
        console.error("Erreur de sauvegarde " + error);
      }
    )
  }
}
