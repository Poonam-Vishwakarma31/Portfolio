document.addEventListener("DOMContentLoaded",(event)=>{
    let text=["Poonam Vishwakarma","Web Developer"]
    count=0;
    index=0;
    currentText="";
    letter="";

    (function type(){
        if(count===text.length){
            count=0;
        }
        currentText=text[count];
        letter=currentText.slice(0,++index);
        // 
        const h1=document.querySelector(".home .left h1");
        h1.textContent=letter;

        if(letter.length===currentText.length){
            count++;
            index=0;
            setTimeout(type,1000);
        }else{
            setTimeout(type,100);
        }
    }())


})
