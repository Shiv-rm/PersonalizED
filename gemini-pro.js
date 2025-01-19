//import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

//dotenv.config();
const genAI=new GoogleGenerativeAI("Your Gemini Key");
 const model=genAI.getGenerativeModel({model:"gemini-pro"});
 const prompt = "How to make a chair";

const result = await model.generateContent(prompt);
const abc=result.response.text()
console.log(abc);
console.log("Its manipulation time : ");
/*
for(let i=1;i+2<abc.length;i++)
{
    if((abc[i-1]=='\n')&&(abc[i]=='*')&&(abc[i+1]=='*'))
    {
        let line="";
        while(abc[i]!='*')
        {
            line=line+abc[i];
            i++;
        }
        console.log(line);
    }
}
*/
let count=0;
for(let i=0;i<abc.length;i++)
{
    if(abc[i]=="*")
    {
        count++;
    }
}
console.log("The count is "+count);
 
