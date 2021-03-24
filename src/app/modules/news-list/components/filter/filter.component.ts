import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
    selector: 'app-filters',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

    @Input() searchString: string;
    @Output() onFilterNews: EventEmitter<string> = new EventEmitter<string>();
    @Output() onCleanInput: EventEmitter<void> = new EventEmitter<void>();

    filterNews(): void {
        this.onFilterNews.emit(this.searchString);
    }

    cleanInput(): void {
        this.searchString = '';
        this.onCleanInput.emit();
    }


}
