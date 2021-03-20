import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName;
  @Input() appareilStatus;
  @Input() indexOfAppareil;
  @Input() id;
  isAuth = false;

  constructor(private appareilService: AppareilService) {}

  ngOnInit(): void {
  }

  getColor = () => {
    if(this.appareilStatus === "Allumé"){
      return 'green';
    }
    else if(this.appareilStatus === "Éteint"){
      return 'red';
    }
  }

  onSwitchOn = () => {
    this.appareilService.swithOnOne(this.indexOfAppareil)
  }

  onSwitchOff = () => {
    this.appareilService.swithOffOne(this.indexOfAppareil)
  }

}
