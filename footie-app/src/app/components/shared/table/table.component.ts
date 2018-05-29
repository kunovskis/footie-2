// Angular
import { Component, Input } from '@angular/core';

// Models
import { Player } from '../../../models/model';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['../../../css/shared.css']
})

export class TableComponent {

    @Input() players: Player[];

    @Input() class: string;

    @Input() tableHeader: string;

    constructor() { }

    click(player: Player) {
        console.log(player);
    }
}
