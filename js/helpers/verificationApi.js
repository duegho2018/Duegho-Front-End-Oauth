import {request}  from './ajaxRequestHelper.js';
import {getData}  from './ajaxRequestHelper.js';

let requestVerification= (url)=>
{
	request(url,"post",getData(document.getElementById("form"))).then((response)=>{
  });
};

document.getElementById("submitButton").addEventListener("click",function()
{
   requestVerification("http://localhost:8080/send_code");
});