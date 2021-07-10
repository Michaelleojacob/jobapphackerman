function findNReplace(){
  //vc = company name, vr = role, vl = location, fn = first name/full name
  //edit these strings, and even add new ones here.
  //If you add something, make sure to throw it down at the bottom where the script actually edits.
  //Target things in the docs by using ##variable##. (if you want to keep it consistent with how I wrote it.)
    vc = "";
    vr = "";
    vl = "";
    fn = "";
  
    //gets the date.
    const monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"];
      const dateObj = new Date();
      const month = monthNames[dateObj.getMonth()];
      const day = String(dateObj.getDate()).padStart(2, '0');
      const year = dateObj.getFullYear();
      const output = month + " " + day  + ',' + year;
  
      
    //Make a copy of the template file
    //to use this section you will need to copy from your own google doc. this part comes from the URL.
    let documentId = DriveApp.getFileById('1UDZNHoRERsVgMdanrAkzBwzhRbkvBFgWZCvosFkVZGY').makeCopy().getId();
    let coverletter = DriveApp.getFileById('1YcP4stz2CDEMWwhxVz8nSb-ONTVlyA76iSA3IfFxsCk').makeCopy().getId();
    let summary = DriveApp.getFileById('1Czstb5c3G8ryPzFpWEkjm58Oa9IIvblCTMEbMh0yaqI').makeCopy().getId();
  
        
    //Rename the copied file
    //rename it however you want. I'm sure you don't want "michae jacob" in your doc's title.
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