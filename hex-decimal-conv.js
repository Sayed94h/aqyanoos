let numberConvertor=(e,t)=>{var n=document.getElementById("result");let r=0;if(e)if(t.includes("d2h")){if(!(r=Number(e)))return void aqyanoosCustomAlert("Warning","Please enter values between 0 - 9");r=r.toString(16)}else if(!(r=Number("0x"+e)))return void aqyanoosCustomAlert("Warning","Please enter values between 0 - 9 and A - F (included)");n.innerHTML=r},subBtn=document.querySelector(".submit-btn");function aqyanoosCustomAlert(e,t){document.querySelector(".custom-alert")&&document.querySelector(".custom-alert").remove();var n=document.createElement("section");n.className="custom-alert",n.innerHTML=`
    <section class="ca-container">
            <div class="ca-title">${e}</div>
            <hr>
            <div class="ca-description">${t}</div>
            <div class="ca-ok" onclick="document.querySelector('.custom-alert').remove()">OK</div>
        </section>
    `,document.body.appendChild(n)}subBtn&&subBtn.addEventListener("click",function(){var e=document.querySelector("input.hd-conv");numberConvertor(e.value,e.className)});