import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  filterType='All';
 
  //parent comp ==> child comp
  //count todos
  @Input()
  todos:any[];
  constructor() { }

  //child comp==> parent comp
  //clear todos
  @Output()
   clearCompleted=new EventEmitter();


  @Output()
  filterTypeChanged=new EventEmitter<string>();


  ngOnInit() {
  }

  //pass to parent comp
  clearBtnOnClick(){
    this.clearCompleted.emit();
  }

  changeFilterType(filterType:string){
    this.filterType=filterType;
    this.filterTypeChanged.emit(filterType);
  }


}
