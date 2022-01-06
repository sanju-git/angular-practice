import { Component } from '@angular/core';
import { LoggingService } from './services/logging.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService, DataService],
})
export class AppComponent {
  data: string[] = [];
  constructor(
    private loggingService: LoggingService,
    private dataService: DataService
  ) {}
  ngOnInit() {
    this.data = this.dataService.list;
  }
  onSubmit = (inp: any) => {
    this.loggingService.logData(inp.value);
    this.dataService.onAddList(inp.value);
  };
}
