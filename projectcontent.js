const projectList = [{
    project_id: 1001,
    name: 'RecruitEx',  
    members: [2001, 2002],
    department:'Sales',
    sod:'21-08-2018',
    eod:'18-09-2019'
   },
  {
    project_id: 1002,
    name: 'OBS',
    members: [2003,2004],
 department:'HR',
 sod:'21-01-2019',
 eod:'11-08-2019'
}
];
  const memberList = [{
    member_id: 2001,
    name: 'Madhurupa',
    technology: 'Angular'
   },
  {
    member_id: 2002,
    name: 'Naga',
    projects: [1001],
    technology: 'Java'
   
  },
  {
    member_id: 2003,
    name: 'Vidya',
    technology: 'Angular'
   },
  {
    member_id: 2004,
    name: 'Mounika',
    technology: 'Java'
}
  ]
  const issueList = [{
    issue_id: 3001,
    issue_name:'error occured in login page',
    department:'Sales',
    pendingissue:'need to complete the login issues',
    fixeddata:'fixed the button colors',
},
  {
   issue_id: 3002,
   issue_name:'error occured Candidates Api',
    department:'HR', 
    pendingissue:'need to complete occured issue in Api',
    fixeddata:'fixed the query',
  
  }
 
  ]
