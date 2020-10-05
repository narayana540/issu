function Project() {
    Project.project_id = ' ';
    Project.name = ' ';
    Project.memberList = [];
    Project.department = '';
    Project.sod = ' ';
    Project.eod = ' ';
 
    Project.prototype.init = function(project_id,name,members,department,sod,eod) {
      this.project_id = Number(project_id);
      this.name = name;
      this.memberList = members;
      this.department = department;
      this.sod = sod;
      this.eod = eod
    }
    Project.prototype.describe = function() {
      var description = ' <h3>Project Information </h3><br>';
       description += '  Project Name = ';
        description += String(this.name) + ','+' <br> ';
        let memberObject = ' ';
        for(let memberNum of this.memberList){
          memberObject = getMemberListById(memberNum);
          if(memberObject == null){
           continue;
          }
          description += memberObject.describe()+'\n';
        }
        description += 'Project department = ' + this.department + ','+'<br>' ;
        description += 'Project sod = ' + this.sod +','+'<br>' ;
        description += 'Project eod = ' + this.eod +'<br>' ;
  return description;
      }
    Project.prototype.addProject = function (memberObject) {
      this.memberList.push(memberObject);
    }
    
    
    };