function addProjectData() {
     document.getElementById('hiddenData').style.display="block";
    addProjectJsonToList();
    addMemberJsonToList();
    addIssueJsonToList();
   let ele = document.getElementById('sel');
    for (let projectData of projectList) {
      ele.innerHTML = ele.innerHTML + '<option value="' + projectData.project_id + '">' + projectData.name + '</option>';
    }
  
  }

function getProjectDetails(){
  let projectId = document.getElementById('projectIdCondition').value;
  let projectDetails = getProjectListById(projectId);
  let personsList = ' ';
  if( projectDetails != null) { 
    personsList += '' + projectDetails.describe();
  
  }
  let listElement = document.getElementById('projectDetails');
  listElement.innerHTML = personsList;  
}

function getIssueDetails() {
  selVal=document.getElementById('issueIdCondition').value;
  if(selVal!=0){
    document.getElementById('selctedItem').style.display="block";
  }
  
 let issueIdCondition = document.getElementById('issueIdCondition').value;
  let issueDetails = getIssueListById(issueIdCondition);
  let issueList = ' ';
 if( issueDetails != null) { 
    issueList += '' + issueDetails.describe();
    addIssueInfo();
  }
   document.getElementById('issueMsg').innerHTML =issueList;
}
