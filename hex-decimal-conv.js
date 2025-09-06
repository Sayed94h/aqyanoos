const numberConvertor = (v_, t) => {
    const resultEl = document.getElementById("result");
    let res_ = 0;
    if (v_) {
        if (t.includes("d2h")) {
            res_ = Number(v_);
            if (!res_) {
                aqyanoosCustomAlert("Warning", "Please enter values between 0 - 9");
                return;
            }

            res_ = res_.toString(16);
        } else {
            let base = "0x" + v_;
            res_ = Number(base);
            if (!res_) {
                aqyanoosCustomAlert("Warning", "Please enter values between 0 - 9 and A - F (included)");
                return;
            }
        }
    }
    resultEl.innerHTML = res_;
};

const subBtn = document.querySelector(".submit-btn")
if (subBtn) {
    subBtn.addEventListener("click", function () {
        const userIn = document.querySelector('input.hd-conv')
        numberConvertor(userIn.value, userIn.className)
    })
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