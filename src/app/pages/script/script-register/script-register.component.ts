import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ScriptService } from "../../../@core/mock/script.service";

@Component({
    selector: 'script-register',
    styleUrls: ['./script-register.component.scss'],
    templateUrl: './script-register.component.html',
})
export class ScriptRegisterComponent implements OnInit{
    scriptDescription?: string;
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

    onClickClear() {
      this.scriptDescription = '';
    }

    onClickSave() {
      // this.ScriptService.addScriptData();
      if (window.confirm('Are you sure you want to create this script?')) {
        this.ScriptService.addScriptData(this.scriptDescription);
        this.router.navigate(['/pages/script/script-list'])
        console.log(this.scriptDescription);
      }
    }

    onClickBack() {
      this.router.navigate(['/pages/script/script-list'])
    }


}