!(function () {

    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const addExperienceBtn = document.getElementById('add-experience');
    const experienceFields = document.getElementById('experience-fields');
    const addEducationBtn = document.getElementById('add-education');
    const educationFields = document.getElementById('education-fields');
    const addFoto = document.getElementById("addFoto");

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });

    let f_D = {
        per: {}, customStl: {},
        exp: [], edu: [], skills: [], secT: [], secP: [],
        hasImg: true, selT: 't1', singleCol: false
    };

    document.querySelectorAll("#skills-tab div.sls").forEach(d_ => {
        if (d_) {
            d_.innerHTML = `Select a list style:<select ><option value="x">Select</option>
<option value="x1">•</option><option value="x2">✓</option><option value="x3">-</option>
<option value="x4">○</option><option value="x5">⁘</option><option value="x6">■</option>
<option value="x7">●</option><option value="x8">◆</option><option value="x9">◉</option>
</select>` }
    })

    if (localStorage.getItem("resAq")) {
        f_D = JSON.parse(localStorage.getItem("resAq"))
        if (f_D.customStl) {
            genStl(f_D.customStl)
        }
        updateOnInputChange()
        populateData()
    } else {
        updateResumePreview();
    }

    function expHtml(obj, ind) {
        const x_ = obj || { title: '', company: '', start: '', end: '', description: '' }
        const newExperience = document.createElement('div');
        newExperience.className = 'experience-item';
        newExperience.innerHTML = `
            <div class="form-group">
                <label>Job Title</label>
                <input type="text" class="exp-title" placeholder="Senior Developer" value="${x_.title || ''}">
            </div>
            <div class="form-group">
                <label>Company</label>
                <input type="text" class="exp-company" placeholder="Tech Corp Inc." value="${x_.company || ''}">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Start Date</label>
                    <input type="text" class="exp-start" placeholder="MM/YYYY" value="${x_.start || ''}">
                </div>
                <div class="form-group">
                    <label>End Date</label>
                    <input type="text" class="exp-end" placeholder="MM/YYYY or Present" value="${x_.end || ''}">
                </div>
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea class="exp-description" rows="3" placeholder="Responsibilities and achievements...">${x_.description || ''}</textarea>
            </div>
            <button class="remove-btn ${ind === 0 ? ' hidden' : ''}">X</button>
        `;

        experienceFields.appendChild(newExperience);
        return newExperience
    }

    addExperienceBtn.addEventListener('click', () => { eduExpEv(expHtml(0, 2), experienceFields) });

    function eduHtml(obj, ind) {
        const x_ = obj || { degree: '', institution: '', start: '', end: '', description: '' }
        const newEducation = document.createElement('div');
        newEducation.className = 'education-item';
        newEducation.innerHTML = `
            <div class="form-group">
                <label>Degree</label>
                <input type="text" class="edu-degree" placeholder="Bachelor of Science" value="${x_.degree || ''}">
            </div>
            <div class="form-group">
                <label>Institution</label>
                <input type="text" class="edu-institution" placeholder="University of Technology" value="${x_.institution || ''}">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Start Date</label>
                    <input type="text" class="edu-start" placeholder="MM/YYYY" value="${x_.start || ''}">
                </div>
                <div class="form-group">
                    <label>End Date</label>
                    <input type="text" class="edu-end" placeholder="MM/YYYY or Present" value="${x_.end || ''}">
                </div>
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea class="edu-description" rows="2" placeholder="Relevant coursework or achievements...">${x_.description || ''}</textarea>
            </div>
            <button class="remove-btn ${ind === 0 ? ' hidden' : ''}">X</button>
        `;

        educationFields.appendChild(newEducation);
        return newEducation;
    }

    function eduExpEv(nE, pE) {
        nE.querySelector('.remove-btn').addEventListener('click', () => {
            pE.removeChild(nE);
            updateResumePreview();
        });

        const inputs = nE.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', updateResumePreview);
        });
    }

    addEducationBtn.addEventListener('click', () => { eduExpEv(eduHtml(0, 2), educationFields) });

    // Template selection
    const tOpt = document.querySelectorAll('.template-option');
    tOpt.forEach(option => {
        if (option.getAttribute('data-template') === f_D.selT) {
            option.classList.add("selected")
        } else {
            option.classList.remove("selected")
        }

        option.addEventListener('click', () => {
            document.querySelector(".template-option.selected").classList.remove('selected')
            option.classList.add('selected');
            f_D.selT = option.getAttribute('data-template');
            f_D.customStl = {}
            f_D.customStl["foc"] = 0; document.getElementById("ctfoc").value = "0"
            f_D.customStl["upd"] = 0; document.getElementById("ctupd").value = "0"
            f_D.customStl["ps"] = true; document.getElementById("ctps").checked = true

            genStl(f_D.customStl)
            localStorage.setItem("resAq", JSON.stringify(f_D))
            updateOnInputChange()
        });
    });

    // Input event listeners for all form fields
    const allInputs = document.querySelectorAll('.form-section input, .form-section textarea');
    allInputs.forEach(input => {
        input.addEventListener('input', updateResumePreview);
    });

    const cusInps = document.querySelectorAll('.t-custom-s input, .t-custom-s select');
    cusInps.forEach(input => {
        input.addEventListener('input', function (e) {
            if (e.target.id === "ctps") {
                f_D.customStl[e.target.id.slice(2)] = e.target.checked
            } else {
                f_D.customStl[e.target.id.slice(2)] = e.target.value
            }

            genStl(f_D.customStl)

            localStorage.setItem("resAq", JSON.stringify(f_D))
            if (e.target.id === "ctps" || e.target.id === "ctfoc" || e.target.id === "ctupd") {
                updateOnInputChange()
            }
        });
    });

    addFoto.addEventListener("change", function (e) {
        f_D.hasImg = e.target.checked
        localStorage.setItem("resAq", JSON.stringify(f_D))
        updateOnInputChange()
    })

    document.querySelector("#personal-tab #photo").onchange = function (e) {
        if (e.target.files[0]) {
            f_D.per.photo = URL.createObjectURL(e.target.files[0])
            // updateResumePreview()
            localStorage.setItem("resAq", JSON.stringify(f_D))
            updateOnInputChange()
        }
    }

    document.querySelectorAll(".tab-content select").forEach(s => {
        s.addEventListener("change", updateResumePreview)
    })

    function updateResumePreview() {
        f_D.per.name = document.getElementById('name').value;
        f_D.per.birthY = document.getElementById('birthY').value;
        f_D.per.title = document.getElementById('title').value;
        f_D.per.email = document.getElementById('email').value;
        f_D.per.phone = document.getElementById('phone').value;
        f_D.per.address = document.getElementById('address').value;
        f_D.per.summary = document.getElementById('summary').value;
        f_D.per.linkedin = document.getElementById('linkedin').value;
        f_D.per.github = document.getElementById('github').value;
        f_D.per.portfolio = document.getElementById('portfolio').value;
        f_D.per.hobbies = document.getElementById('hobbies').value;
        f_D.per.references = document.getElementById('references').value;

        f_D.exp = [];
        f_D.edu = [];
        f_D.skills = [];

        document.querySelectorAll("#skills-tab .form-group").forEach(f => {
            const ti_ = f.querySelector(".skt")
            if (ti_) {
                f_D.skills.push({
                    t_: ti_.value,
                    c_: f.querySelector(".skc").value,
                    s_: document.querySelector("#" + ti_.id.slice(0, 4) + " select").value,
                    id: ti_.id[3]
                })
            }
        })

        // get section titles and pos
        f_D.secT = []; document.querySelectorAll(".i2, .ii2").forEach(t => { f_D.secT.push({ id: t.id, v: t.value }) })
        f_D.secP = [], f_D.singleCol = document.getElementById("resCol").value === "1";
        if (f_D.singleCol) {
            document.querySelectorAll(".cst").forEach(p => { p.classList.add("hidden") })
        } else {
            document.querySelectorAll(".cst .i3").forEach(p => { p.parentElement.classList.remove("hidden"); f_D.secP.push({ id: p.id, v: p.value }) })
        }

        document.querySelectorAll('.experience-item').forEach(item => {
            if (item.querySelector('.exp-title')) {
                f_D.exp.push({
                    title: item.querySelector('.exp-title').value,
                    company: item.querySelector('.exp-company').value,
                    start: item.querySelector('.exp-start').value,
                    end: item.querySelector('.exp-end').value,
                    description: item.querySelector('.exp-description').value
                });
            }
        });

        document.querySelectorAll('.education-item').forEach(item => {
            if (item.querySelector('.edu-degree')) {
                f_D.edu.push({
                    degree: item.querySelector('.edu-degree').value,
                    institution: item.querySelector('.edu-institution').value,
                    start: item.querySelector('.edu-start').value,
                    end: item.querySelector('.edu-end').value,
                    description: item.querySelector('.edu-description').value
                });
            }
        });

        localStorage.setItem("resAq", JSON.stringify(f_D))
        updateOnInputChange()
    }

    function secTv(id) {
        const x_ = f_D.secT.find(i => i.id === id)
        return x_ ? x_.v : false
    }

    function updateOnInputChange() {
        const resumePreview = document.getElementById('resume-preview'), temX = f_D.selT;
        const { name, title, birthY, phone, email, address, summary, photo, linkedin, github, portfolio, hobbies, references } = f_D.per
        let lS = "", rS = "", resHdr = "";
        const { ps, upd, foc } = f_D.customStl;
        const csAr = Object.keys(f_D.customStl);
        const toL = (l) => `<a href="${l}">${l}</a>`;
        const isA = upd && upd === "2"
        const iAf = isA && (!foc || foc !== 2) ;

        const resInfo = `<div class="resume-info ${iAf? ' iAf': ''}"><h1 class="resume-name">${name || 'Your Name'}</h1>
                                    <p class="resume-title">${title || 'Your Professional Title'}</p></div>`;

        let links_ = linkedin ? ` <div><strong>${secTv("st6") || 'LinkedIn'}</strong>: ${toL(linkedin)} </div>` : '';
        links_ += github ? ` <div><strong>${secTv("st7") || 'GitHub'}</strong>: ${toL(github)} </div>` : '';
        links_ += portfolio ? ` <div><strong>${secTv("st8") || 'Portfolio'}</strong>: ${toL(portfolio)} </div>` : '';

        const resCont = `<div class="resume-contact">${birthY || address ? `<p class="my-5">${birthY ? `<span>°  ${birthY}</span>` : ''}
                        ${birthY && address ? '<span class="mx-20 bold">|</span>' : ''}${address ? `<span> ${address}</span>` : ''}</p>` : ''}
                        ${email ? `<p> ${email}</p>` : ''}${phone ? `<p> ${phone}</p>` : ''}${f_D.hasImg && (temX === "t5" || temX === "t4") ? links_ : ''}</div>`;

        const ps_ = (!csAr.includes("ps") || ps) && summary ? `<p class="resume-summary">${summary}</p>` : '';

        if (f_D.hasImg) {
            const resFo = `<img src="${photo || ''}" alt="Select Profile Photo" class="resume-photo">`;

            let customTxt = `<div class="i1">${iAf ? `${resInfo}<div class="photo">${resFo}</div>
                    `: `<div class="photo">${resFo}</div>${resInfo}`}</div><div class="i1">${resCont + ps_}</div>`

            if (foc && foc === "2") {
                customTxt = `<div class="i-u-c"><div class="i1"><div class="photo">${resFo}</div></div>
                                <div class="i1 ${isA ? ' isA':''}">${isA ? resInfo + resCont: resCont + resInfo}</div>
                              </div><div class="mt-20">${ps_}</div>`}


            if (temX === "t1" || temX === "t2" || temX === "t3") {
                resHdr = `<div class="temp1 ${foc && foc === "2"? ' iUc': ''}  ${temX === "t2" ? ' a' : temX === "t3" ? ' b' : ''}">${customTxt}</div> `
            }

            if (temX === "t4") {
                resHdr = `<div class="temp3">${resInfo}<div class="flex xp"><div class="photo i1">${resFo}</div>
                        <div class="i1">${resCont}</div></div><div class="mt-20">${ps_}</div></div>`
            }

            if (temX === "t5") {
                resHdr = `<div class="temp5"><div class="flex xp">
                        <div class="photo i1">${resFo}</div><div class=" i1 ">${resCont}</div></div>${resInfo + ps_}</div> `
            }
        } else {
            resHdr = `<div class="no-img">${resInfo + ps_ + resCont}</div>`
        }

        const workExp = f_D.exp.length > 0 ? `<div class="resume-section">
                    <h2 class="section-title">${secTv("st1") || 'Work Experience'} </h2>${f_D.exp.map(exp => `
                    <div class="experience-item"><div class="experience-header"><div class="experience-title">${exp.title || 'Job Title'}</div>
                    <div class="flex spc-btw"><div class="experience-company">${exp.company ? exp.company : ''}</div>
                    <div class="experience-dates">${exp.start || 'Start'} - ${exp.end || 'End'}</div></div></div>
                    ${exp.description ? `<p class="experience-description">${exp.description.replaceAll("\n", "<br>")}</p>` : ''}
                        </div>`).join('')}</div>` : '';

        const edu = f_D.edu.length > 0 ? `<div class="resume-section">
                    <h2 class="section-title">${secTv("st2") || 'Education / Courses'}</h2>${f_D.edu.map(edu => `
                    <div class="education-item"><div class="education-header"><div class="education-degree">${edu.degree || 'Degree'}</div>
                    <div class="flex spc-btw"><div class="education-institution">${edu.institution ? edu.institution : ''}</div>
                    <div class="education-dates">${edu.start || 'Start'} - ${edu.end || 'End'}</div></div></div>${edu.description ?
                `<p class="education-description">${edu.description.replaceAll("\n", "<br>")}</p>` : ''}</div>`).join('')}</div>` : '';


        const skls = `<div class="resume-section">${f_D.skills.filter(i_ => i_.c_.length > 0).map(s =>
            `<h2 class="section-title">${s.t_}</h2><div class="skills-list  ${s.s_}">${s.c_.split('\n').map(c2 => `<div>${c2.trim()}</div>`).join('')}</div>`).join("")}</div>`;

        const hob_ = hobbies ? `<div class="resume-section"><h2 class="section-title">${secTv("st4") ||
            'Hobbies & Interests'}</h2><p>${hobbies.replaceAll("\n", "<br>")}</p></div>` : '';


        const ref_ = references || (links_ && temX !== "t4" && temX !== "t5") ? `<div class="resume-section ref-sec"><h2 class="section-title">${secTv("st5") || 'References'}</h2>
                <div class="cusRef">${references.replaceAll("\n", "<br>")}</div>
                ${f_D.hasImg && (temX === "t5" || temX === "t4") ? '' : links_}</div>` : '';

        const noR = f_D.secP.find(f_ => f_.v === "1"), noL = f_D.secP.find(f_ => f_.v === "2");

        f_D.singleCol = f_D.singleCol || Boolean(!noR || !noL)

        if (f_D.singleCol) {
            lS = workExp + edu + skls + hob_ + ref_
        } else {
            const comps = { 1: workExp, 2: edu, 3: skls, 4: hob_, 5: ref_ }

            f_D.secP.forEach(m_ => {
                const rComp = comps[Number(m_.id[2])]
                if (m_.v === "1") {
                    rS = rS + rComp
                } else {
                    lS = lS + rComp
                }
            })
        }

        resumePreview.innerHTML = `<div class="resume template-${temX}"><div class="resume-header">${resHdr}</div>
                ${f_D.singleCol ? `<div class="single-col">${lS}</div>`: `<div class="resume-content flex spc-btw">
                        <div class="res-left">${lS}</div><div class="res-right">${rS}</div></div></div>`} `;

        const rF = document.querySelector(".resume-photo")
        if (rF) {rF.style = "width: " + (rF.parentElement.offsetWidth * 0.7) + "px;height:" + (rF.parentElement.offsetWidth * 0.7) + "px;"}

        if (f_D.hasImg) {
            document.querySelector("#photo").classList.remove("hidden")
        } else {
            document.querySelector("#photo").classList.add("hidden")
        }
    }

    function genStl(sT) {
        const sE_ = document.getElementById("customStyle");
        if (Object.keys(sT).length > 0) {
            const t_ = ".template-" + f_D.selT, { tc, fc, fs, ff } = sT;

        const tF = (z_) => fs ? `font-size: ${(fs * z_).toFixed(2)}px;` : "";
        const tCo = (c_) => c_ ? `color:${c_};` : "";
        sE_.innerHTML = `.resume-preview {${ff ? `font-family:${ff};` : ''}}
        ${t_} .resume-contact {${tc ? `background: linear-gradient(${tc}, ${tc}91, ${tc});` : ''}${tCo(fc)}${tF(0.9)}}
        ${t_} .resume-contact a {${tCo(fc)}}
        ${t_} .resume-header {${tc ? `border-bottom-color: ${tc};` : ''}}
        ${t_} .section-title {${tc ? `border-bottom-color: ${tc};${tCo(tc)}` : ''}${tF(1.09)}}
        ${t_} .resume-name {${tCo(tc)}${tF(1.58)}}
        ${t_} .resume-photo {${tc ? `border-color: ${tc};box-shadow: -9px 0px 2px 6px ${tc}91;` : ''}}
        .resume-title {${tF(1.25)}}.experience-company,.education-institution {${tF(0.9)}}
        .experience-dates,.education-dates {${tF(0.8)}}.experience-title,.education-degree,
        .experience-description,.education-description,.skills-list,.resume-summary,.resume-section p,div.cusRef {${tF(1)}}
        .ref-sec div,.resume-contact div {${tF(0.71)}}div.cusRef {${tF(1)}}`;
        } else {
            sE_.innerHTML = ""
        }        
    }

    function populateData() {
        // personal info
        const ks = Object.keys(f_D.per)
        ks[ks.indexOf("photo")] = ""

        ks.forEach(k => {
            if (document.getElementById(k)) {
                document.getElementById(k).value = f_D.per[k]
            }
        })

        const al_ = [...f_D.secT, ...f_D.secP]
        al_.forEach(t => {
            if (document.getElementById(t.id)) {
                document.getElementById(t.id).value = t.v
            }
        })

        if (f_D.singleCol) {
            document.querySelectorAll(".cst").forEach(p => { p.classList.add("hidden") })
        } else {
            document.querySelectorAll(".cst").forEach(p => { p.classList.remove("hidden") })
        }

        f_D.skills.forEach(sk => {
            const tiX = document.getElementById("hs-" + sk.id + "-i")
            if (tiX) {
                tiX.value = sk.t_
                tiX.parentElement.querySelector(".skc").value = sk.c_
                document.querySelector("#hs-" + sk.id + " select").value = sk.s_
            }
        })

        if (f_D.exp.length > 0) {
            experienceFields.innerHTML = ""
            f_D.exp.forEach((ex, ind) => {
                eduExpEv(expHtml(ex, ind), experienceFields)
            })
        }

        if (f_D.edu.length > 0) {
            educationFields.innerHTML = ""
            f_D.edu.forEach((ed, ind) => {
                eduExpEv(eduHtml(ed, ind), educationFields)
            })
        }

        addFoto.checked = f_D.hasImg

        Object.keys(f_D.customStl).forEach(k_ => {
            const el_ = document.getElementById("ct" + k_)
            if (el_) {
                if (k_ === "ps") {
                    el_.checked = f_D.customStl[k_]
                } else {
                    el_.value = f_D.customStl[k_]
                }
            }
        })
    }

    const printBtn = document.getElementById('print-resume');
    printBtn.addEventListener('click', () => {
        const dT = document.title
        document.title = "aqyanoos.com-free-online-resume-builder";
        document.url = "";
        window.print();
        document.title = dT
    });

    const resetBtn = document.getElementById('reset-form');

    resetBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all fields?')) {
            document.querySelectorAll('.tab-content input, .tab-content textarea').forEach(input => {
                if (input.type !== 'button' || input.type !== "checkbox") {
                    input.value = '';
                }

                if (input.type == "checkbox") {
                    input.checked = true;
                }
            });

            // Remove all but the first experience and education items
            const experienceItems = document.querySelectorAll('.experience-item');
            const educationItems = document.querySelectorAll('.education-item');

            for (let i = 1; i < experienceItems.length; i++) {
                experienceItems[i].parentNode.removeChild(experienceItems[i]);
            }

            for (let i = 1; i < educationItems.length; i++) {
                educationItems[i].parentNode.removeChild(educationItems[i]);
            }

            document.querySelectorAll(".tab-content select").forEach(s=> s.selectedIndex = 0)

            f_D.singleCol = false;
            f_D.hasImg = true;
            f_D.per = {};
            f_D.exp = [];
            f_D.edu = [];
            f_D.skills = [];
            f_D.secT = [];
            f_D.secP = [];
            localStorage.setItem("resAq", JSON.stringify(f_D))
            updateOnInputChange()
        }
    });
})();