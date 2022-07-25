import { Component, Input, OnInit, } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ScriptService } from "../../../@core/mock/script.service";

@Component({
    selector: 'script-edit',
    styleUrls: ['./script-edit.component.scss'],
    templateUrl: './script-edit.component.html',
})
export class ScriptEditComponent implements OnInit{
    public scriptID?: string;
    public scriptDescription?: string;
    public scriptMessages: [string];
    public scriptParentID?: string;
    
    script: any;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private ScriptService: ScriptService) {
  
    }
  
    async ngOnInit() {
      this.setupData();
      let id = this.route.snapshot.paramMap.get('id');
      this.scriptID = id;
    }
  
    setupData = async () => {
      const data = await this.ScriptService.getScriptData(); 
      const source = data.data['biz_scripts'];
      this.script = source.find(item => item._id === this.scriptID);
      this.scriptDescription = this.script.description;
      this.scriptMessages = this.script.messages;
      this.scriptParentID = this.script.parent_id;
    }

    onClickBack() {
      
      this.router.navigate(['/pages/script/script-list'])
    }

    onClickSave() {
      console.log(this.script);
      console.log(this.scriptDescription);
      if (window.confirm('Are you sure you want to change this script?'))
      this.ScriptService.updateScriptData(this.scriptID, this.scriptDescription, this.scriptMessages, this.scriptParentID);
    }  

    onClickDelete() {
      if (window.confirm('Are you sure you want to delete this script?')) {
        this.ScriptService.removeScriptData(this.scriptID);
        this.router.navigate(['/pages/script/script-list'])
      } else { }
    }


}