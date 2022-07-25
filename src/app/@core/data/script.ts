export interface Script {
  _id: number;
  parent_id: number|string;
  description: string;
  messages: {
    sender: string;
    type: string;
    content: string;
  }[];
}

export abstract class ScriptData {
  getScriptData = async () => {
    
  };
    // abstract getScriptData(): Observable<Script[]>;
  // abstract addScriptData(value: any);

  // abstract updateScriptData(value: any);
  
  // abstract deleteScriptData();
      
}

// export class ScriptData {
//   getScriptData(): any {}
//     // abstract getScriptData(): Observable<Script[]>;
//   addScriptData(value: any) {}

//   updateScriptData(value: any) {}
  
//   deleteScriptData() {}
      
// }