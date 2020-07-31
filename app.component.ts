import { Component } from '@angular/core';
import 'node_modules/bootstrap/dist/css/bootstrap.min.css';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
              '/node_modules/bootstrap/dist/css/bootstrap.min.css'
                // 'node_modules/bootstrap/dist/css/bootstrap.min.css',
                // 'src/styles.css'
  ]
  
})
export class AppComponent {
  title = 'ACIwireframe';
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  showPDF(id){
    debugger;
  }
}
