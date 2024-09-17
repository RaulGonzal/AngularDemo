import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header/header.component'; 

// tells angular there is a new component and that it should look for its 
// tag in index.html, to display the content of component on screen.

/* However: common practice is to only have the main app comonent here.
   All other components follow the Angular tree and are called / referenced
   in other components.
*/
bootstrapApplication(AppComponent).catch((err) => console.error(err));

