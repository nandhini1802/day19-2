var div=document.createElement("div");
div.style.textAlign="center";
div.style.marginTop="30px";
document.body.style.backgroundColor="whitesmoke";

var h1 =document.createElement("h1");
h1.innerHTML="Emoji's";
h1.style.textAlign="center";
h1.style.marginTop="60px";

var label=document.createElement("label");
label.setAttribute("for","category");
label.style.marginRight="20px";
label.innerHTML="Choose Category :";

var selectvalue =document.createElement("select");
selectvalue.setAttribute("id","category");
selectvalue.setAttribute("name","category");
selectvalue.style.margin="10px";

function createoptionvalue(value1){
    var opt = document.createElement("option");
opt.value = value1;
opt.text = value1;
return opt;
}

var option1 = createoptionvalue("smileys-and-people");
var option2 = createoptionvalue("animals-and-nature");
var option3 = createoptionvalue("food-and-drink");
var option4 = createoptionvalue("travel-and-places");
var option5 = createoptionvalue("activities");
var option6 = createoptionvalue("objects");
var option7 =createoptionvalue("symbols");
var option8 = createoptionvalue("flags");
var option8 = createoptionvalue("NA");

selectvalue.append(option1,option2,option3,option4,option5,option6,option7,option8);

label.append(selectvalue);

var input =document.createElement("input");
input.setAttribute("type","radio");
input.setAttribute("id","option1");
input.setAttribute("value","All");
input.setAttribute("name","radioGroup");
input.checked=true;
input.style.margin="5px";


var label1=document.createElement("label");

label1.setAttribute("for","option1");
label1.innerHTML="All";
label1.style.margin="5px";

var input1 =document.createElement("input");
input1.setAttribute("type","radio");
input1.setAttribute("id","option2");
input1.setAttribute("value","Random");
input1.setAttribute("name","radioGroup");
input1.style.margin="5px";


var label2=document.createElement("label");

label2.setAttribute("for","option1");
label2.innerHTML="Random";
label2.style.margin="5px";

var subbutton = document.createElement("button");
subbutton.setAttribute("type", "submit");
subbutton.setAttribute("class", " btn btn-secondary");
subbutton.innerHTML = "Submit";

subbutton.addEventListener("click",foo);
var disp =document.createElement("div");
disp.setAttribute("type","text");
disp.style.marginTop="20px";
disp.style.backgroundColor="gray";;

async function foo(){

    let category=document.getElementById("category").value;
    let allorrandom = document.getElementsByName("radioGroup");
        let optionValue;
    for (let i = 0; i < allorrandom.length; i++) {
        if (allorrandom[i].checked) {
            optionValue = allorrandom[i].value;
        }
    }
    var res1=null; 
    console.log(optionValue);
    if(category!="NA"){
    let res=await fetch(`https://emojihub.yurace.pro/api/${optionValue}/category/${category}`);
     res1= await res.json();
    }else{
        let res=await fetch(`https://emojihub.yurace.pro/api/${optionValue}`);
     res1= await res.json();

    }


  if(optionValue=="Random"){
    var value=res1.unicode[0].split("+");
     disp.innerHTML = String.fromCodePoint(parseInt(value[1], 16)) ;
     
    }else if(optionValue=="All"){
        disp.innerHTML="";
        for(let i=0;i<res1.length;i++){
            var value=res1[i].unicode[0].split("+");
            disp.innerHTML += String.fromCodePoint(parseInt(value[1], 16)) ;
        }

    }
    
    
}

document.body.append(disp);   

var br=document.createElement("br");
var br1=document.createElement("br");
var br2=document.createElement("br");
var br3=document.createElement("br");

div.append(label,br,input,label1,input1,label2,br2,subbutton,br3,disp);
document.body.append(h1,div);