let ProjectData = [];
let MemberData = [];
let IssueData = [];


function addProjectJsonToList(){
    for (let projectInfo of projectList) {
        const project = new Project();
        project.init(projectInfo.project_id, projectInfo.name,projectInfo.members,
        projectInfo.department, projectInfo.sod, projectInfo.eod);
        ProjectData.push(project);
      }
}
function addMemberJsonToList(){
    for (let memberObject of memberList) {
        const member = new Member();
        member.init(memberObject. member_id, memberObject.name,memberObject.technology);
        MemberData.push(member);
      }
}
function addIssueJsonToList(){
    for (let issueObject of issueList) {
        const issue = new Issue();
        issue.init(issueObject.issue_id,issueObject.issue_name,issueObject.department,
        issueObject.pendingissue, issueObject.fixeddata);
        IssueData.push(issue);
      }
}

function show(ele) {
  document.getElementById('jumbo').style.display="block";
  document.getElementById('loginDetails').style.display="block";
  document.getElementById('loginData').style.display="block";

  let projectDetails = getProjectListById(ele.value);
  let personsList = ' ';
  if( projectDetails != null) { 
    personsList += '' + projectDetails.describe();
  }
document.getElementById('msg').innerHTML =  personsList 
}

function showIssues(element) {
  document.getElementById('jumboValue').style.display="block";
  document.getElementById('jumbo2').style.display="block";

  let issueDetails = getIssueListById(element.value);
  let issueList = ' ';
  if( issueDetails != null) { 
    issueList += '' + issueDetails.describe();
  }
document.getElementById('issueMsg').innerHTML=issueList;
  }

function addIssueInfo(){
  let ele = document.getElementById('sel1');
  for(const issueObj of IssueData){
    ele.innerHTML = ele.innerHTML + '<option value=" ' + issueObj.issue_id + ' ">' + issueObj.department+ '</option>';
  }
}

function getProjectList(pproject_id) {
 for (const project of ProjectData) {
    if (project.project_id === pproject_id) {
      return project;
    }
  }
  return null;
}




getProjectListById = (projectId) =>{
   const projectObject = ProjectData.filter(project => project.project_id ==  projectId);
   return projectObject[0];
  
}
getIssueListById = (issueId) =>{
    const issueObject =IssueData.filter(issueObject => issueObject.issue_id  ==  issueId);
    return issueObject[0];
}

getMemberListById = (memberId) =>{
  const memberObject  = MemberData.filter(memberObject =>  memberObject. member_id  ==  memberId);
  return memberObject[0];
}

