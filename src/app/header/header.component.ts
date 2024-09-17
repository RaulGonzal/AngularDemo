import { Component } from "@angular/core";
@Component({
    // selects elements that should be replaced by our component
    // two part name as to not overwrite built in names
    selector: 'app-header', 

    // marks component as standalone component v.s module if set to false
    // recomended to work with standalone components
    standalone: true, 

    // html
    templateUrl: './header.component.html',

    // css
    styleUrl: './header.component.css',
})

export class HeaderComponent {}