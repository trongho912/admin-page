import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { 
  NbThemeService,
  NbCardComponent,
} from '@nebular/theme';

import { KeywordData } from '../../@core/data/keyword';

@Component({
  selector: 'keyword',
  templateUrl: './keyword.component.html',
  styleUrls: ['./keyword.component.scss'],
})

export class KeywordComponent {
  settings = {
    actions: {
        custom: [
            {
              name: 'detail',
              title: '<i class="nb-maximize" title="Detail"></i>'
            },
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
    // edit: {
    //   editButtonContent: '<i class="nb-edit"></i>',
    //   saveButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    //   confirmSave: true,
    // },
    // delete: {
    //   deleteButtonContent: '<i class="nb-trash"></i>',
    //   confirmDelete: true,
    // },
    columns: {
      _id: {
        title: 'ID',
        type: 'number',
        width: '10%',
      },
      keyword: {
        title: 'Keywords',
        type: '[string]',
        width: '80%',
      },
      script_id: {
        title: 'Script ID',
        type: 'number',
        width: '10%',
      },
    },
  };

  source: any;

  constructor(private KeywordService: KeywordData) {

  }

  async ngOnInit() {
    this.setupData();
  }

  setupData = async () => {
    const data = await this.KeywordService.getKeywordData(); 
    this.source = data;
  }
  onCustomEvent = (event) => {
    switch (event.action) {
        case 'detail': 
            console.log("Detail ", event.data);
            break;
        case 'editAction':
            console.log("Edit ", event.data);
            break;
        case 'deleteAction':
            this.onDeleteConfirm(event);
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
}