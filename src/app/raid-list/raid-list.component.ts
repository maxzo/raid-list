import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

import { BossList } from './boss-list';
import { GymList } from './gym-list';
import { Pokemon } from './model/pokemon';
import { Gym } from './model/gym';

@Component({
  selector: 'app-raid-list',
  templateUrl: './raid-list.component.html',
  styleUrls: ['./raid-list.component.css']
})
export class RaidListComponent implements OnInit {

  go = '';
  raidList = '';
  fullList = false;

  bossControl: FormControl = new FormControl();
  gymControl: FormControl = new FormControl();

  filteredBosses: Observable<Pokemon[]>;
  filteredGyms: Observable<Gym[]>;

  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(message: string) {
    this.snackBar.open(message, null, {
      duration: 1000,
    });
  }

  ngOnInit() {
    this.filteredBosses = this.bossControl.valueChanges
      .pipe(
        startWith(null),
        map(val => this.filterBosses(val))
      );
    this.filteredGyms = this.gymControl.valueChanges
      .pipe(
        startWith(null),
        map(val => this.filterGyms(val))
      );
  }

  filterBosses(val: any): Pokemon[] {
    if (val && val.name) {
      return [];
    }

    return val ? BossList.filter(option =>
      option.name.toLowerCase().includes(val.toLowerCase())) : BossList;
  }

  filterGyms(val: any): Gym[] {
    if (val && val.name) {
      return [];
    }

    return val ? GymList.filter(option =>
      option.name.toLowerCase().includes(val.toLowerCase())) : GymList;
  }

  displayBossFn(val: Pokemon) {
    return val ? val.name : val;
  }

  displayGymFn(val: Gym) {
    return val ? val.name : val;
  }

  refreshList() {
    const gym = this.gymControl.value;
    const bossName = this.bossControl.value ? (this.bossControl.value.name || '') : '';
    const go = this.go;

    if (gym && gym.name) {
      this.raidList = '*' + bossName.toUpperCase() + ' - ' + gym.name + ' - ' + go + ' hs.*\nCoordenadas: ' + gym.coordenates;
      if (gym.address) {
        this.raidList += '\nDirección: ' + gym.address;
      }
    } else {
      this.raidList = '*' + bossName.toUpperCase() + ' -  - ' + go + ' hs.*';
    }

    this.raidList += '\n\n1. \n2. \n3. \n4. \n5. \n6. \n7. \n8. \n9. \n10. ';

    if (this.fullList) {
      this.raidList += '\n11. \n12. \n13. \n14. \n15. \n16. \n17. \n18. \n19. \n20. ';
    }
  }

  onChange(event) {
    this.refreshList();
  }

  clearBoss() {
    this.bossControl.setValue('');
    this.refreshList();
  }

  clearGym() {
    this.gymControl.setValue('');
    this.refreshList();
  }

  clearGo() {
    this.go = '';
    this.refreshList();
  }

  copySuccess() {
    this.openSnackBar('Copiado');
  }

}
