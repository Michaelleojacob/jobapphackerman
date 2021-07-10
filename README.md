# jobapphackerman by Michael Jacob<br><a href="https://github.com/Michaelleojacob/jobapphackerman" target="_blank">Repository</a> <br><a href="https://github.com/Michaelleojacob/jobapphackerman" target="_blank">(no) Live application</a>

# How to use:<br>Copy and paste the script file into a google drive appscript file. You can also open this up from a google doc's >tools< tab and click on >script editor<.<br>Once you have the code in appscript, you will need to make some changes to your resume, cover letter, and other material.<br>Anything that you want to automate and change dynamically should be thrown in a format like this: ##variable##.<br>For example: if I wanted my resume to include the company name every time I ran this script I would do two things:<br>1. Add ##companyname## to my resume.<br>2. add companyname = ""; at the top of the appscript file.<br> Edit the info inside the string like so: companyname = "Google". <br>Now I can add that last line at the bottom of the script to change my resume. It would look like:<br>body.replaceText("##companyname##", companyname);<br>>ALSO<<br>Make sure to edit the script so that you are targeting YOUR own google doc pages. You will need to get info from the URL and paste it in as a string like so:<br>let documentId = DriveApp.getFileById('1UDZNHoRERsVgMdanrAkzBwzhRbkvBFgWZCvosFkVZGY').makeCopy().getId();<br>that big 'meaty' part of random characters is the part you will need to copy and paste into the script, so that it will target and get YOUR doc's instead of mine.

# Built with:<br> google drive's appscript javascript

# High Priority on:<br>A working program.

# Highlight features:<br>Automating personalize resume, cover letter, and follow up material easily. Just edit the info at the top, and run the script. All 3 of my google docs will be tailored directly to the job i'm applying for.

# Future additions:<br>Code refactor. Right now it repeats itself a lot, i'm not super proud of that. But it is a good first draft. I'm sure I could make it easier to use, or more user friendly to get started with.

# Get in touch!:<br> michaelleojacob@gmail.com<br><a href="https://www.linkedin.com/public-profile/in/michael-leo-jacob" target="_blank">Linkedin</a><br><a href="https://https://github.com/Michaelleojacob" target="_blank">Github</a>
