import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs'

import { 
  NbThemeService,
  NbCardComponent,
} from '@nebular/theme';

import { isInlineFragment } from '@apollo/client/utilities';
import { Router } from '@angular/router';
import { ScriptService } from '../../../@core/mock/script.service';


@Component({
  selector: 'script-list',
  templateUrl: './script-list.component.html',
  styleUrls: ['./script-list.component.scss'],
})
export class ScriptListComponent implements OnInit {
  settings = {
    actions: {
        custom: [
            {
              name: 'editAction',
              title: '<i class="nb-edit" title="Edit"></i>'
            },
            {
              name: 'deleteAction',
              title: '<i class="nb-trash" title="Delete"></i>'       
            }
          ],
          add: false,
          edit: false,
          delete: false
    },
    columns: {
      description: {
        title: 'Description',
        type: 'string',
        width: '50%',
      },
      createby: {
        title: 'Create by',
        type: 'string',
      },
      createat: {
        title: 'Create at',
        type: 'string',
      },
      changeby: {
        title: 'Change by',
        type: 'string',
      },
      changeat: {
        title: 'Change at',
        type: 'string',
      },
    },
  };

  source: any;

  constructor(private router: Router,
              private ScriptService: ScriptService) {

  }

  async ngOnInit() {
    this.setupData();
  }

  setupData = async () => {
    const data = await this.ScriptService.getScriptData(); 
    this.source = data.data['biz_scripts'];
  }

  onCustomEvent = (event) => {
    switch (event.action) {
        case 'editAction':
            console.log("Edit ", event.data);
            this.router.navigate(['/pages/script/script-edit', event.data._id]);
            break;
        case 'deleteAction':
            console.log("Delete: ", event.data)
            if (window.confirm('Are you sure you want to delete this script?')) {
              this.ScriptService.removeScriptData(event.data._id);
            } else {
              
            }
            break;
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onClickNew() {
    this.router.navigate(['/pages/script/script-register'])
  }

  // addScriptDate(value: any) {
  //   this.source.append(value);
  // }

}