var readlinesync = require("readline-sync");

var score = 0;

var name = readlinesync.question("What is your name ? ");
console.log("  ");
console.log("Hello "+name+", welcome to quiz on AMAN."); 
console.log("  ");

function ques(question,ans)
{ var u_ans = readlinesync.question(question);
  if (u_ans == ans) 
  {
    console.log("You are right.");
    score = score + 1;
  } 
  else 
  {
    console.log("You are Wrong.");
  }
  console.log("Current Score : ",score);
}

var ques_ans = [{ question: "What is his age? ", 
               ans: "21"},
            { question: "Where does he live ? ",
               ans: "Howrah"},
            { question: "What is his birth day? ",
               ans: "29/6"},
               {question:"what is my surname?",ans:"sharma"},
               { question:"who is my guru?",ans:"tanay"} ];
for(var i= 0; i<ques_ans.length; i=i+1)
{
 1
   ques(ques_ans[i].question,ques_ans[i].ans);
   console.log(" ");
}
console.log("-----");
console.log("Final Score : ",score);
