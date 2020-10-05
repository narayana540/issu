function Issue() {
};
Issue.issue_id = ' ';
Issue.issue_name = ' ';
Issue.department = '';
Issue.pendingissue = '';
Issue.fixeddata = ''; 

Issue.prototype.init = function(issue_id,issue_name,department, pendingissue,fixeddata) {
  this.issue_id = Number(issue_id);
  this.issue_name = issue_name;
  this.department = department;
 this.pendingissue = pendingissue;
  this.fixeddata = fixeddata;
}
Issue.prototype.describe = function() {
  var description = '';
  description += '  Issue Name = ';
  description += this.issue_name +'<br>';
  description += '  Issue department= ';
  description += this.department +'<br>';
  description += '  Issue pendingissue = ';
  description += this.pendingissue +'<br>';
  description += '  Issue fixeddata = ';
  description += this.fixeddata+'<br>';
  description += '\n'; 
  return description;
}