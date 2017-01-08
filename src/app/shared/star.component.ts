import { Component, Input, OnChanges } from '@angular/core'

@Component({
    selector : 'star',
    templateUrl : 'src/app/shared/star.component.html',
    styleUrls : ['src/app/shared/star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
        console.log('this.starWidth' + this.starWidth);
    }
}