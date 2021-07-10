function findNReplace(){
    vc = "";
    vr = "";
    vl = "";
    fn = "";
  
    const monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"];
      const dateObj = new Date();
      const month = monthNames[dateObj.getMonth()];
      const day = String(dateObj.getDate()).padStart(2, '0');
      const year = dateObj.getFullYear();
      const output = month + " " + day  + ',' + year;
  
  // info related to this(resume) document
      
    //Make a copy of the template file
    let documentId = DriveApp.getFileById('1UDZNHoRERsVgMdanrAkzBwzhRbkvBFgWZCvosFkVZGY').makeCopy().getId();
    let coverletter = DriveApp.getFileById('1YcP4stz2CDEMWwhxVz8nSb-ONTVlyA76iSA3IfFxsCk').makeCopy().getId();
    let summary = DriveApp.getFileById('1Czstb5c3G8ryPzFpWEkjm58Oa9IIvblCTMEbMh0yaqI').makeCopy().getId();
  
        
    //Rename the copied file
    DriveApp.getFileById(documentId).setName(vc + " Resume - Michael Jacob " + output);  
    DriveApp.getFileById(coverletter).setName(vc + " CL - Michael Jacob " + output);
    DriveApp.getFileById(summary).setName(vc + " Summary " + output);
        
    //Get the document body as a variable
    let body = DocumentApp.openById(documentId).getBody();
    let clbody = DocumentApp.openById(coverletter).getBody();
    let sbody = DocumentApp.openById(summary).getBody();
  
  //this.resume
    body.replaceText("##vc##", vc);
    body.replaceText("##vr##", vr);
    body.replaceText("##vl##", vl);
    body.replaceText("##fn##", fn);
    body.replaceText("##date##", output);
    body.replaceText("##year##", year);
  
  //this.coverletter
    clbody.replaceText("##vc##", vc);
    clbody.replaceText("##vr##", vr);
    clbody.replaceText("##vl##", vl);
    clbody.replaceText("##fn##", fn);
    clbody.replaceText("##date##", output);
  
  //this.summary
    sbody.replaceText("##vc##", vc);
    sbody.replaceText("##vr##", vr);
    sbody.replaceText("##vl##", vl);
    sbody.replaceText("##fn##", fn);
    sbody.replaceText("##date##", output);
  }