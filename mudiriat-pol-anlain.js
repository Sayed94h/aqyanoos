


!(function () {
    "use strict"
    // const cats_ = ["Income-Work", "Income-Other", "Car", "Hobby", "Basic Needs", "Kitchen", "Food", "Clothes", "Children", "Restaurants", "Weekend", "Travel", "Drinks", "Bar", "Studies", "Living-room", "Bed-room", "Bath-room", "Other"]

    const addBtn = document.getElementById("CISMM-add-btn"), CISMMcat = document.querySelectorAll(".CISMM-category"),
        cancelNewPop = document.querySelector(".CISMM-cancel-btn"), subNewPop = document.querySelector(".CISMM-sub-btn"),
        subE = document.querySelector(".CISMM-sub-edit-btn"), cancelEPop = document.querySelector(".CISMM-ce-btn"),
        importBtn = document.getElementById("import-data"), exportBtn = document.getElementById("export-data");


    addBtn.addEventListener("click", toggleNewPop)
    cancelNewPop.addEventListener("click", toggleNewPop)
    cancelEPop.addEventListener("click", resetPop)
    importBtn.addEventListener("click", importData)

    exportBtn.addEventListener("click", exportData)

    subNewPop.addEventListener("click", function (e) {
        allSub(e, 1)

        document.querySelector(".CISMM-new-pop").classList.toggle("hidden")
    })

    subE.addEventListener("click", function (e) {
        allSub(e, 0)

        // reset popup
        resetPop(e)
    })

    window.onresize = function (e) {
        if (localStorage.getItem("CISMM")) {
            updateTableCISMM(decodeData_(localStorage.getItem("CISMM")))
        }
    }

    function allSub(e, add) {
        e.preventDefault();

        const form_ = document.querySelector(".CISMM-form"), uIn = {}

        const fD = new FormData(form_, subE);

        for (const [key, value] of fD) {
            uIn[key] = value;
        }

        if (uIn["category-n"]) {
            uIn["category"] = uIn["category-n"]
            delete uIn["category-n"]
            document.getElementById("CISMM-category-n").value = ""
        }

        const d_ = decodeData_(localStorage.getItem("CISMM"))

        if (add) {
            uIn["cD"] = new Date().toLocaleDateString()
            uIn["id"] = d_.length + 1
            d_.push(uIn)
        } else {
            // modify the obj
            d_.forEach(i => {
                if (i.id == uIn.id) {
                    i.title = uIn.title;
                    i.description = uIn.description;
                    i.amount = uIn.amount;
                    i.date = uIn.date;
                    i.category = uIn.category;
                    i.itemType = uIn.itemType;
                }
            })
        }

        form_.reset() // clear the form

        refCats(d_)
        updateTableCISMM(d_)
        localStorage.setItem("CISMM", encodeData_(d_))
    }

    function updateTableCISMM(data) {
        const svg = document.getElementById('columnChart');

        if (data.length === 0) {
            svg.classList.add("hidden")
            aqyanoosCustomAlert("Hello there,", "Happy to see you on our website. Now, your income and expenses list is empty. You can add stuff to your list by clicking on the green + button.")
            return
        } else {
            svg.classList.remove("hidden")
        }
        const tb_ = document.querySelector("#CISMM-rows")

        let c_ = "", t_ = 0, in_ = 0;
        data.forEach((d, ind) => {
            c_ += ("<tr><td>" + (ind + 1) + "<td>" + d.title + "</td>" + "<td>" + d.description + "</td>" + "<td>" + d.amount + "</td>"
                + "<td>" + d.date + "</td>" + "<td>" + d.cD + "</td>" + "<td>" + d.category + "</td>" +
                '<td><div id="' + (d.id) + '" class="flex spc-btw edit-col" > <div class="edit bg-c" ></div><div class="bar mx-5"></div><div class="delete bg-c"></div></div></td></tr>')

            if (d.itemType === "2") {
                in_ += Number(d.amount)
            } else {
                t_ += Number(d.amount)
            }
        })

        tb_.innerHTML = c_

        const to_ = document.getElementById("total")
        to_.innerHTML = t_.toFixed(2)

        if (in_) {
            to_.innerHTML = "<strong>In: </strong> " + (forN(in_)) + " vs <strong>Out: </strong>" + (forN(t_)) + "(" + (Math.round((t_ / in_) * 100)) + "%)"
        }

        const editCol = document.querySelectorAll("td .edit-col")
        editCol.forEach(e => {
            e.addEventListener("click", editDeleteItem)
        })

        // Generate charts
        const result = data.reduce((acc, { category, amount }) => {
            acc[category] = (acc[category] || 0) + Number(amount);
            return acc;
        }, {});
        createColumnChart(result);
    }

    function editDeleteItem(e) {
        const t_ = e.target;

        const dd = decodeData_(localStorage.getItem("CISMM"))

        if (t_.classList.contains("edit")) {

            const exact_ = dd.find(i => i.id == t_.parentElement.id)

            const ti_ = document.getElementById("CISMM-title"), des_ = document.getElementById("CISMM-description"),
                amt_ = document.getElementById("CISMM-amount"), da_ = document.getElementById("CISMM-date"),
                ca_ = document.getElementById("CISMM-category"), id_ = document.getElementById("CISMM-id");
            ti_.value = exact_.title; des_.value = exact_.description; amt_.value = exact_.amount; da_.value = exact_.date;
            ca_.value = exact_.category, id_.value = exact_.id;
            document.getElementById("CISMM-itemType").value = exact_.itemType || "1"

            resetPop(e, 1)
        }

        if (t_.classList.contains("delete")) {
            const res = confirmPromise("Are you sure you want to delete this?")

            res.then(rr => {
                if (rr) {
                    const ndd = dd.filter(i => i.id != t_.parentElement.id)

                    refCats(ndd)
                    updateTableCISMM(ndd)
                    localStorage.setItem("CISMM", encodeData_(ndd))
                }
            }).catch(er => console.log("error happened: "))
            // aqyanoosCustomConfirm("Warning", "Are you sure you want to delete this?", "delIte", t_.parentElement.id)
        }
    }

    function resetPop(e, edit) {
        e.preventDefault()
        document.querySelector(".CISMM-new-pop .pop-title").innerHTML = edit ? "Edit Item" : "Add New Item"

        subE.classList.toggle("hidden")
        subNewPop.classList.toggle("hidden")
        cancelNewPop.classList.toggle("hidden")
        cancelEPop.classList.toggle("hidden")
        document.querySelector(".CISMM-new-pop").classList.toggle("hidden")
    }

    function encodeData_(obj_) {
        // to short string
        let res_ = ""
        obj_.forEach(d => {
            res_ += d.id + "#$&;" + d.title + "#$&;" + d.description + "#$&;" + d.amount + "#$&;" + d.date + "#$&;" +
                d.cD + "#$&;" + d.category;
            
            res_ += "#$&;" + (d.itemType ? d.itemType : (x_.category.toLowerCase().includes("income") ? "2" : "1"));

            res_ += "&#$;";
        })

        return res_
    }

    function decodeData_(str_) {
        // to json
        let res_ = []
        const rows_ = str_.split("&#$;")

        rows_.forEach(r => {
            const t_ = r.split("#$&;")

            if (t_.length > 6) {
                res_.push({
                    id: t_[0],
                    title: t_[1],
                    description: t_[2],
                    amount: t_[3],
                    date: t_[4],
                    cD: t_[5],
                    category: t_[6],
                    itemType: t_[7] || (t_[6].toLowerCase().includes("income") ? "2" : "1"), // "1" = expense type
                })
            }
        })

        return res_
    }

    function toggleNewPop(e) {
        e.preventDefault()
        const CISMMNewPop = document.querySelector(".CISMM-new-pop")
        CISMMNewPop.classList.toggle("hidden")
    }

    function refCats(d_) {
        let c_ = "<option value='.' class='gray'>Category</option>"

        const uC = []
        d_.forEach(c => {
            if (!uC.includes(c.category)) {
                uC.push(c.category)
                c_ += "<option value='" + c.category + "'>" + c.category + "</option>"
            }
        })

        CISMMcat.forEach(el => { el.innerHTML = c_ })
    }

    // on page load
    if (CISMMcat) {

        if (localStorage.getItem("CISMM")) {
            const o1 = decodeData_(localStorage.getItem("CISMM"))
            refCats(o1)
            updateTableCISMM(o1)
        } else {
            localStorage.setItem("CISMM", "1")
            const demoL = [{ id: 1, title: "Travel", description: "My Travel expenses to Afghanistan. Demo Data.", amount: 980, category: "Travel", date: "8-22-2024", cD: "9/25/2024", },
            { id: 2, title: "Income", description: "My total income 2024. Demo Data.", amount: 54321, category: "Income", date: "12-29-2024", cD: "1/1/2025", },
            { id: 3, title: "Grocery", description: "My grocery in 2024. Demo Data.", amount: 15230, category: "Food", date: "1-1-2025", cD: "1/1/2025", }
            ]

            let i_i = 1
            const intID_ = setInterval(() => {
                updateTableCISMM(demoL.filter(i => i.id <= i_i))
                if (i_i === 3) {
                    clearInterval(intID_)
                    setTimeout(() => { aqyanoosCustomAlert("Hello", "The data you see, is just a demo. Click on the Green + button at the top right corner  to add your own data.") }, 2000)
                } else {
                    i_i += 1;
                }
            }, 2000)
        }
    }

    const resetF = document.querySelector(".CISMM-filter .res-f")
    resetF.addEventListener("click", rFil)
    const subF = document.querySelector(".CISMM-filter .sub-f")

    subF.addEventListener("click", apF)

    function apF() {
        let al_ = decodeData_(localStorage.getItem("CISMM"));
        const sF_ = document.querySelector(".CISMM-filter select"), tF_ = document.querySelector(".CISMM-filter #fil01"),
            aF_ = document.querySelector(".CISMM-filter #fil02"), dF_ = document.querySelector(".CISMM-filter #fil03")

        if (sF_.value != "" && sF_.value != ".") {
            al_ = al_.filter(i => i.category == sF_.value)
        }

        if (tF_.value !== "") {
            const inp = tF_.value.trim().toLowerCase().split(" ")
            al_ = al_.filter(ite => {
                for (let s = 0; s < inp.length; s++) {
                    if (ite.title.toLowerCase().includes(inp[s]) || ite.description.toLowerCase().includes(inp[s])) {
                        return ite
                    }
                }
            })
        }

        if (aF_.value !== "") {
            al_ = al_.filter(ite => ite.amount == aF_.value)
        }

        if (dF_.value !== "") {
            al_ = al_.filter(ite => ite.date == dF_.value)
        }

        updateTableCISMM(al_)
    }

    function rFil() {
        let al_ = decodeData_(localStorage.getItem("CISMM"));
        const sF_ = document.querySelector(".CISMM-filter select"), iF_ = document.querySelectorAll(".CISMM-filter input");
        sF_.value = ".";
        iF_.forEach(i => {
            i.value = i.defaultValue
        })
        updateTableCISMM(al_)
    }

    function exportData() {
        const a_ = localStorage.getItem("CISMM")
        if (a_) {
            const blob_ = new Blob([a_], { type: "text/plain" });
            const url_ = URL.createObjectURL(blob_);
            const aEl = document.createElement('a');
            aEl.href = url_;
            aEl.download = "money-manager-aqyanoos.com-" + (new Date().toISOString().split(".")[0].replaceAll(":", "")) + ".txt";
            aEl.click();
        }
    }

    function importData() {
        const openFileInput = document.getElementById("openFile");

        openFileInput.click();

        openFileInput.addEventListener('change', function (e) {
            const file_ = e.target.files[0];

            const reader_ = new FileReader();

            reader_.addEventListener('loadend', function (event) {
                localStorage.setItem("CISMM", event.target.result);
                const o1 = decodeData_(event.target.result)
                refCats(o1)
                updateTableCISMM(o1)
                // document.querySelector(".fp").innerHTML = '<input type="file" id="openFile" accept="text/plain">'
                openFileInput.value = ""
            });

            reader_.readAsText(file_);
        });
    }

    const cPer = document.getElementById("chart-period")
    if (cPer) {
        cPer.addEventListener("change", function (e) {
            let a_d = decodeData_(localStorage.getItem("CISMM"))
            if(a_d.length < 1) {
                aqyanoosCustomAlert("Not Enough Data", "Please add item to your income and expenses list by clicking on the green + button.")
                return
            }
            const v_ = cPer.value, nD = {};

            if (v_ === "2") {
                nD["Income"] = 0, nD["Expenses"] = 0;
                a_d.forEach(x_ => {
                    if (x_.itemType === "2") {
                        nD.Income += Number(x_.amount)
                    } else {
                        nD.Expenses += Number(x_.amount)
                    }
                });

                createColumnChart(nD, 1)
                return
            } if (v_ === "3") {
                a_d.forEach(x_ => {
                    if (x_.date.includes(new Date().getFullYear())) {
                        nD[x_.category] = (nD[x_.category] || 0) + Number(x_.amount)
                    }
                });
            } if (v_ === "4") {
                a_d.forEach(x_ => {
                    if (x_.date.includes(new Date().getFullYear() - 1)) {
                        nD[x_.category] = (nD[x_.category] || 0) + Number(x_.amount)
                    }
                });
            } if (v_ === "5") {
                a_d.forEach(x_ => {
                    if (new Date(x_.date).getTime() >= Date.now() - 2592000000) {
                        nD[x_.category] = (nD[x_.category] || 0) + Number(x_.amount)
                    }
                });
            } if (v_ === "6") {
                a_d.forEach(x_ => {
                    if (new Date(x_.date).getTime() >= Date.now() - 604800000) {
                        nD[x_.category] = (nD[x_.category] || 0) + Number(x_.amount)
                    }
                });
            } else {
                a_d.forEach(x_ => {
                    nD[x_.category] = (nD[x_.category] || 0) + Number(x_.amount)
                });
            }

            createColumnChart(nD)
        })
    }

    function createColumnChart(data, v_s) {
        const svg = document.getElementById('columnChart'), lbls = document.querySelector(".chart-lbls");
        // Constants for chart dimensions. Side text width is 80
        const cW = window.innerWidth - 80, cH = 300, pad = 20;

        let lblsCont = ""
        svg.innerHTML = '';

        const maxV = Math.max(...Object.values(data));
        const scaleX = 20;
        const barW = (cW - pad - 2 * scaleX) / Object.keys(data).length;
        const scaleY = (cH - 20 - 2 * pad) / maxV;

        const rn = () => (Math.round(Math.random() * (255 - 100) + 100))
        const cl = ["yellow", "#0ff", "#bdb76b", "#ff8c00", "red", "#edc9af", "green", "#50c878", "blue", "#f0f", "#ccf",
            "pink", "#ff7f50", "purple", "gold", "#faf0be", "#08e8de", "#007ba7", "#bdf", "#2f4f4f", "#b57edc", "#a4c639", "#4b5320",]
        Object.keys(data).forEach((d, i) => {
            const barHeight = data[d] * scaleY;
            const x = 2 * scaleX + pad + i * barW;
            const y = cH - pad - barHeight;

            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

            const color_ = v_s ? i === 0 ? "green" : "red" : cl[i] || "rgb(" + (rn()) + "," + (rn()) + "," + (rn()) + ")"
            rect.setAttribute('x', x);
            rect.setAttribute('y', y);
            rect.setAttribute('width', barW - 5);
            rect.setAttribute('height', barHeight);
            rect.setAttribute('fill', color_);
            svg.appendChild(rect);

            lblsCont += "<div class='CISMM020'><div style='background:" + color_ + ";' class='CISMM021'></div><div>: " + d + "</div></div>"
        });

        lbls.innerHTML = lblsCont

        for (let i = 0; i <= maxV; i += maxV / 9) {
            const y = cH - pad - i * scaleY;

            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', pad + 2 * scaleX);
            line.setAttribute('y1', y);
            line.setAttribute('x2', cW + 60);
            line.setAttribute('y2', y);
            line.setAttribute('stroke', '#333');
            line.setAttribute('stroke-width', '0.5');
            svg.appendChild(line);

            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', pad - scaleX);
            text.setAttribute('y', y + 5);
            text.setAttribute('font-size', '11px');
            text.setAttribute('fill', '#000');

            text.textContent = forN(i);
            svg.appendChild(text);
        }
    }

    function forN(i) {
        return i >= 1000000000000000000n ? ((i / 1000000000000000000n).toFixed(2)) + "QT" : i >= 1000000000000000 ? ((i / 1000000000000000).toFixed(2)) + "QD"
            : i >= 1000000000000 ? ((i / 1000000000000).toFixed(2)) + "T" : i >= 1000000000 ? ((i / 1000000000).toFixed(2)) + "B" : i >= 1000000 ? ((i / 1000000).toFixed(2)) + "M" :
                i >= 1000 ? ((i / 1000).toFixed(2)) + "K" : i.toFixed(2)
    }

    function aqyanoosCustomAlert(title, description) {
        if (document.querySelector('.custom-alert')) {
            document.querySelector('.custom-alert').remove();
        }

        const secEl = document.createElement('section');
        secEl.className = "custom-alert";
        secEl.innerHTML = `
        <section class="ca-container">
                <div class="ca-title">${title}</div>
                <hr>
                <div class="ca-description">${description}</div>
                
                <div class="ca-ok" onclick="document.querySelector('.custom-alert').remove()">OK</div>
            </section>
        `;

        document.body.appendChild(secEl);
    }

    function showConfirm(message, yesCallback, noCallback) {
        const modal = document.getElementById('customConfirm');
        const messageElement = document.getElementById('confirmMessage');

        messageElement.textContent = message;
        modal.classList.add('active');

        const yesBtn = document.getElementById('confirmYes');
        const noBtn = document.getElementById('confirmNo');

        yesBtn.onclick = () => {
            modal.classList.remove('active');
            if (yesCallback) yesCallback();
        };

        noBtn.onclick = () => {
            modal.classList.remove('active');
            if (noCallback) noCallback();
        };

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    function confirmPromise(message) {
        return new Promise((resolve) => {
            showConfirm(message, () => resolve(true), () => resolve(false));
        });
    }


}())

