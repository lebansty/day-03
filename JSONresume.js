let userData={
   personalDetails:{ byTheNameOf:"Lebansty Valan", dob:'24/09/1997',address:'xxxstreet,yyycity,zzzstate,pin:123654',phone:9995684632,mail:'xxxx@zmail.com'
   },
   sslc:{ school:'xxxxSchool', percentage:90},
   hse:{school:'xxxxSchool',percentage:80},
   ug:{college:'yyyyCollege',cgpa:6.3},
   certification:{Crti1:'NEBOSH IGC UK',certi2:'IOSH MANGING SAFETY UK'},
   techinicalSkills:{programingLanguage:'c#,javaScript'},
   strengthAndAbility:{
      lne:'Good communication and interpersonal skills. Highly motivated and result oriented. Committed team player with flexible approach towards work. Travel and relocate to any place as per situations' }
   



   }
   let resume=[];
   for(let key in userData){
      resume.push(userData[key]);
   }
   
 let objJSON=JSON.stringify(resume);
 console.log(resume);
 console.log(objJSON);


  