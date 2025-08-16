(()=>{let l=document.querySelectorAll(".tab-btn"),s=document.querySelectorAll(".tab-content");var e=document.getElementById("add-experience");let i=document.getElementById("experience-fields");var t,c=document.getElementById("add-education");let o=document.getElementById("education-fields"),r=document.getElementById("addFoto"),q=(l.forEach(t=>{t.addEventListener("click",()=>{var e=t.getAttribute("data-tab");l.forEach(e=>e.classList.remove("active")),s.forEach(e=>e.classList.remove("active")),t.classList.add("active"),document.getElementById(e+"-tab").classList.add("active")})}),{per:{},customStl:{},exp:[],edu:[],skills:[],secT:[],secP:[],hasImg:!0,selT:"t1",singleCol:!1});function d(e,t){var e=e||{title:"",company:"",start:"",end:"",description:""},l=document.createElement("div");return l.className="experience-item",l.innerHTML=`
            <div class="form-group">
                <label>Job Title</label>
                <input type="text" class="exp-title" placeholder="Senior Developer" value="${e.title||""}">
            </div>
            <div class="form-group">
                <label>Company</label>
                <input type="text" class="exp-company" placeholder="Tech Corp Inc." value="${e.company||""}">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Start Date</label>
                    <input type="text" class="exp-start" placeholder="MM/YYYY" value="${e.start||""}">
                </div>
                <div class="form-group">
                    <label>End Date</label>
                    <input type="text" class="exp-end" placeholder="MM/YYYY or Present" value="${e.end||""}">
                </div>
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea class="exp-description" rows="3" placeholder="Responsibilities and achievements...">${e.description||""}</textarea>
            </div>
            <button class="remove-btn ${0===t?" hidden":""}">X</button>
        `,i.appendChild(l),l}function n(e,t){var e=e||{degree:"",institution:"",start:"",end:"",description:""},l=document.createElement("div");return l.className="education-item",l.innerHTML=`
            <div class="form-group">
                <label>Degree</label>
                <input type="text" class="edu-degree" placeholder="Bachelor of Science" value="${e.degree||""}">
            </div>
            <div class="form-group">
                <label>Institution</label>
                <input type="text" class="edu-institution" placeholder="University of Technology" value="${e.institution||""}">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Start Date</label>
                    <input type="text" class="edu-start" placeholder="MM/YYYY" value="${e.start||""}">
                </div>
                <div class="form-group">
                    <label>End Date</label>
                    <input type="text" class="edu-end" placeholder="MM/YYYY or Present" value="${e.end||""}">
                </div>
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea class="edu-description" rows="2" placeholder="Relevant coursework or achievements...">${e.description||""}</textarea>
            </div>
            <button class="remove-btn ${0===t?" hidden":""}">X</button>
        `,o.appendChild(l),l}function a(e,t){e.querySelector(".remove-btn").addEventListener("click",()=>{t.removeChild(e),u()}),e.querySelectorAll("input, textarea").forEach(e=>{e.addEventListener("input",u)})}function u(){q.per.name=document.getElementById("name").value,q.per.birthY=document.getElementById("birthY").value,q.per.title=document.getElementById("title").value,q.per.email=document.getElementById("email").value,q.per.phone=document.getElementById("phone").value,q.per.address=document.getElementById("address").value,q.per.summary=document.getElementById("summary").value,q.per.linkedin=document.getElementById("linkedin").value,q.per.github=document.getElementById("github").value,q.per.portfolio=document.getElementById("portfolio").value,q.per.hobbies=document.getElementById("hobbies").value,q.per.references=document.getElementById("references").value,q.exp=[],q.edu=[],q.skills=[],document.querySelectorAll("#skills-tab .form-group").forEach(e=>{var t=e.querySelector(".skt");t&&q.skills.push({t_:t.value,c_:e.querySelector(".skc").value,s_:document.querySelector("#"+t.id.slice(0,4)+" select").value,id:t.id[3]})}),q.secT=[],document.querySelectorAll(".i2, .ii2").forEach(e=>{q.secT.push({id:e.id,v:e.value})}),q.secP=[],q.singleCol="1"===document.getElementById("resCol").value,q.singleCol?document.querySelectorAll(".cst").forEach(e=>{e.classList.add("hidden")}):document.querySelectorAll(".cst .i3").forEach(e=>{e.parentElement.classList.remove("hidden"),q.secP.push({id:e.id,v:e.value})}),document.querySelectorAll(".experience-item").forEach(e=>{e.querySelector(".exp-title")&&q.exp.push({title:e.querySelector(".exp-title").value,company:e.querySelector(".exp-company").value,start:e.querySelector(".exp-start").value,end:e.querySelector(".exp-end").value,description:e.querySelector(".exp-description").value})}),document.querySelectorAll(".education-item").forEach(e=>{e.querySelector(".edu-degree")&&q.edu.push({degree:e.querySelector(".edu-degree").value,institution:e.querySelector(".edu-institution").value,start:e.querySelector(".edu-start").value,end:e.querySelector(".edu-end").value,description:e.querySelector(".edu-description").value})}),localStorage.setItem("resAq",JSON.stringify(q)),m()}function I(t){var e=q.secT.find(e=>e.id===t);return!!e&&e.v}function m(){var e=document.getElementById("resume-preview"),t=q.selT,{name:l,title:s,birthY:i,phone:c,email:o,address:r,summary:d,photo:n,linkedin:a,github:u,portfolio:m,hobbies:p,references:v}=q.per;let h="",g="",y="";var{ps:$,upd:f,foc:b}=q.customStl,S=Object.keys(q.customStl),E=e=>`<a href="${e}">${e}</a>`,f=f&&"2"===f,x=f&&(!b||2!==b),l=`<div class="resume-info ${x?" iAf":""}"><h1 class="resume-name">${l||"Your Name"}</h1>
                                    <p class="resume-title">${s||"Your Professional Title"}</p></div>`,s=a?` <div><strong>${I("st6")||"LinkedIn"}</strong>: ${E(a)} </div>`:"",a=(s=(s+=u?` <div><strong>${I("st7")||"GitHub"}</strong>: ${E(u)} </div>`:"")+(m?` <div><strong>${I("st8")||"Portfolio"}</strong>: ${E(m)} </div>`:""),`<div class="resume-contact">${i||r?`<p class="my-5">${i?`<span>°  ${i}</span>`:""}
                        ${i&&r?'<span class="mx-20 bold">|</span>':""}${r?`<span> ${r}</span>`:""}</p>`:""}
                        ${o?`<p> ${o}</p>`:""}${c?`<p> ${c}</p>`:""}${!q.hasImg||"t5"!==t&&"t4"!==t?"":s}</div>`),u=S.includes("ps")&&!$||!d?"":`<p class="resume-summary">${d}</p>`;if(q.hasImg){E=`<img src="${n||"/images/aqyanoos-founder.png"}" alt="Profile Photo" class="resume-photo">`;let e=b&&"2"===b?`<div class="i-u-c"><div class="i1"><div class="photo">${E}</div></div>
                                <div class="i1 ${f?" isA":""}">${f?l+a:a+l}</div>
                              </div><div class="mt-20">${u}</div>`:`<div class="i1">${x?l+`<div class="photo">${E}</div>
                    `:`<div class="photo">${E}</div>`+l}</div><div class="i1">${a+u}</div>`;"t1"!==t&&"t2"!==t&&"t3"!==t||(y=`<div class="temp1 ${b&&"2"===b?" iUc":""}  ${"t2"===t?" a":"t3"===t?" b":""}">${e}</div> `),"t4"===t&&(y=`<div class="temp3">${l}<div class="flex xp"><div class="photo i1">${E}</div>
                        <div class="i1">${a}</div></div><div class="mt-20">${u}</div></div>`),"t5"===t&&(y=`<div class="temp5"><div class="flex xp">
                        <div class="photo i1">${E}</div><div class=" i1 ">${a}</div></div>${l+u}</div> `)}else y=`<div class="no-img">${l+u+a}</div>`;m=0<q.exp.length?`<div class="resume-section">
                    <h2 class="section-title">${I("st1")||"Work Experience"} </h2>${q.exp.map(e=>`
                    <div class="experience-item"><div class="experience-header"><div class="experience-title">${e.title||"Job Title"}</div>
                    <div class="flex spc-btw"><div class="experience-company">${e.company||""}</div>
                    <div class="experience-dates">${e.start||"Start"} - ${e.end||"End"}</div></div></div>
                    ${e.description?`<p class="experience-description">${e.description.replaceAll("\n","<br>")}</p>`:""}
                        </div>`).join("")}</div>`:"",i=0<q.edu.length?`<div class="resume-section">
                    <h2 class="section-title">${I("st2")||"Education / Courses"}</h2>${q.edu.map(e=>`
                    <div class="education-item"><div class="education-header"><div class="education-degree">${e.degree||"Degree"}</div>
                    <div class="flex spc-btw"><div class="education-institution">${e.institution||""}</div>
                    <div class="education-dates">${e.start||"Start"} - ${e.end||"End"}</div></div></div>${e.description?`<p class="education-description">${e.description.replaceAll("\n","<br>")}</p>`:""}</div>`).join("")}</div>`:"",r=`<div class="resume-section">${q.skills.filter(e=>0<e.c_.length).map(e=>`<h2 class="section-title">${e.t_}</h2><div class="skills-list  ${e.s_}">${e.c_.split("\n").map(e=>`<div>${e.trim()}</div>`).join("")}</div>`).join("")}</div>`,o=p?`<div class="resume-section"><h2 class="section-title">${I("st4")||"Hobbies & Interests"}</h2><p>${p.replaceAll("\n","<br>")}</p></div>`:"",c=v||s&&"t4"!==t&&"t5"!==t?`<div class="resume-section ref-sec"><h2 class="section-title">${I("st5")||"References"}</h2>
                <div class="cusRef">${v.replaceAll("\n","<br>")}</div>
                ${!q.hasImg||"t5"!==t&&"t4"!==t?s:""}</div>`:"",S=q.secP.find(e=>"1"===e.v),$=q.secP.find(e=>"2"===e.v);if(q.singleCol=q.singleCol||Boolean(!S||!$),q.singleCol)h=m+i+r+o+c;else{let l={1:m,2:i,3:r,4:o,5:c};q.secP.forEach(e=>{var t=l[Number(e.id[2])];"1"===e.v?g+=t:h+=t})}e.innerHTML=`<div class="resume template-${t}"><div class="resume-header">${y}</div>
                ${q.singleCol?`<div class="single-col">${h}</div>`:`<div class="resume-content flex spc-btw">
                        <div class="res-left">${h}</div><div class="res-right">${g}</div></div></div>`} `;d=document.querySelector(".resume-photo");d&&(d.style="width: "+.7*d.parentElement.offsetWidth+"px;height:"+.7*d.parentElement.offsetWidth+"px;"),q.hasImg?document.querySelector("#photo").classList.remove("hidden"):document.querySelector("#photo").classList.add("hidden")}function p(c){var o=document.getElementById("customStyle");if(0<Object.keys(c).length){let e=".template-"+q.selT,{tc:t,fc:l,fs:s,ff:i}=c;var c=e=>s?`font-size: ${(s*e).toFixed(2)}px;`:"",r=e=>e?`color:${e};`:"";o.innerHTML=`.resume-preview {${i?`font-family:${i};`:""}}
        ${e} .resume-contact {${t?`background: linear-gradient(${t}, ${t}91, ${t});`:""}${r(l)}${c(.9)}}
        ${e} .resume-contact a {${r(l)}}
        ${e} .resume-header {${t?`border-bottom-color: ${t};`:""}}
        ${e} .section-title {${t?`border-bottom-color: ${t};`+r(t):""}${c(1.09)}}
        ${e} .resume-name {${r(t)}${c(1.58)}}
        ${e} .resume-photo {${t?`border-color: ${t};box-shadow: -9px 0px 2px 6px ${t}91;`:""}}
        .resume-title {${c(1.25)}}.experience-company,.education-institution {${c(.9)}}
        .experience-dates,.education-dates {${c(.8)}}.experience-title,.education-degree,
        .experience-description,.education-description,.skills-list,.resume-summary,.resume-section p,div.cusRef {${c(1)}}
        .ref-sec div,.resume-contact div {${c(.71)}}div.cusRef {${c(1)}}`}else o.innerHTML=""}document.querySelectorAll("#skills-tab div.sls").forEach(e=>{e&&(e.innerHTML=`Select a list style:<select ><option value="x">Select</option>
<option value="x1">•</option><option value="x2">✓</option><option value="x3">-</option>
<option value="x4">○</option><option value="x5">⁘</option><option value="x6">■</option>
<option value="x7">●</option><option value="x8">◆</option><option value="x9">◉</option>
</select>`)}),localStorage.getItem("resAq")?((q=JSON.parse(localStorage.getItem("resAq"))).customStl&&p(q.customStl),m(),(t=Object.keys(q.per))[t.indexOf("photo")]="",t.forEach(e=>{document.getElementById(e)&&(document.getElementById(e).value=q.per[e])}),(t=[...q.secT,...q.secP]).forEach(e=>{document.getElementById(e.id)&&(document.getElementById(e.id).value=e.v)}),q.singleCol?document.querySelectorAll(".cst").forEach(e=>{e.classList.add("hidden")}):document.querySelectorAll(".cst").forEach(e=>{e.classList.remove("hidden")}),q.skills.forEach(e=>{var t=document.getElementById("hs-"+e.id+"-i");t&&(t.value=e.t_,t.parentElement.querySelector(".skc").value=e.c_,document.querySelector("#hs-"+e.id+" select").value=e.s_)}),0<q.exp.length&&(i.innerHTML="",q.exp.forEach((e,t)=>{a(d(e,t),i)})),0<q.edu.length&&(o.innerHTML="",q.edu.forEach((e,t)=>{a(n(e,t),o)})),r.checked=q.hasImg,Object.keys(q.customStl).forEach(e=>{var t=document.getElementById("ct"+e);t&&("ps"===e?t.checked=q.customStl[e]:t.value=q.customStl[e])})):u(),e.addEventListener("click",()=>{a(d(0,2),i)}),c.addEventListener("click",()=>{a(n(0,2),o)}),document.querySelectorAll(".template-option").forEach(e=>{e.getAttribute("data-template")===q.selT?e.classList.add("selected"):e.classList.remove("selected"),e.addEventListener("click",()=>{document.querySelector(".template-option.selected").classList.remove("selected"),e.classList.add("selected"),q.selT=e.getAttribute("data-template"),q.customStl={},q.customStl.foc=0,document.getElementById("ctfoc").value="0",q.customStl.upd=0,document.getElementById("ctupd").value="0",q.customStl.ps=!0,document.getElementById("ctps").checked=!0,p(q.customStl),localStorage.setItem("resAq",JSON.stringify(q)),m()})}),document.querySelectorAll(".form-section input, .form-section textarea").forEach(e=>{e.addEventListener("input",u)}),document.querySelectorAll(".t-custom-s input, .t-custom-s select").forEach(e=>{e.addEventListener("input",function(e){"ctps"===e.target.id?q.customStl[e.target.id.slice(2)]=e.target.checked:q.customStl[e.target.id.slice(2)]=e.target.value,p(q.customStl),localStorage.setItem("resAq",JSON.stringify(q)),"ctps"!==e.target.id&&"ctfoc"!==e.target.id&&"ctupd"!==e.target.id||m()})}),r.addEventListener("change",function(e){q.hasImg=e.target.checked,localStorage.setItem("resAq",JSON.stringify(q)),m()}),document.querySelector("#personal-tab #photo").onchange=function(e){e.target.files[0]&&(q.per.photo=URL.createObjectURL(e.target.files[0]),localStorage.setItem("resAq",JSON.stringify(q)),m())},document.querySelectorAll(".tab-content select").forEach(e=>{e.addEventListener("change",u)}),document.getElementById("print-resume").addEventListener("click",()=>{var e=document.title;document.title="aqyanoos.com-free-online-resume-builder",document.url="",window.print(),document.title=e}),document.getElementById("reset-form").addEventListener("click",()=>{if(confirm("Are you sure you want to reset all fields?")){document.querySelectorAll(".tab-content input, .tab-content textarea").forEach(e=>{"button"===e.type&&"checkbox"===e.type||(e.value=""),"checkbox"==e.type&&(e.checked=!0)});var t=document.querySelectorAll(".experience-item"),l=document.querySelectorAll(".education-item");for(let e=1;e<t.length;e++)t[e].parentNode.removeChild(t[e]);for(let e=1;e<l.length;e++)l[e].parentNode.removeChild(l[e]);document.querySelectorAll(".tab-content select").forEach(e=>e.selectedIndex=0),q.singleCol=!1,q.hasImg=!0,q.per={},q.exp=[],q.edu=[],q.skills=[],q.secT=[],q.secP=[],localStorage.setItem("resAq",JSON.stringify(q)),m()}})})();