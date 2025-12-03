import { Component } from '@angular/core';import { ActivatedRoute } from '@angular/router';
@Component({selector:'app-project-detail',templateUrl:'./project-detail.component.html'})
export class ProjectDetailComponent { id=''; constructor(r:ActivatedRoute){r.paramMap.subscribe(p=>this.id=p.get('id')||'');}}