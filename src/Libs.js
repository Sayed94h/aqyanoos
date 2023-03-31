export function aqyanoosCustomAlert (title, description)
{
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

export function copyToClipboardWeb (txt)
{
    navigator.permissions.query({name: "clipboard-write"}).then((result) =>
    {
        if (result.state === "granted" || result.state === "prompt")
        {
            navigator.clipboard.writeText(txt).then(() =>
            {
                aqyanoosCustomAlert("Copy Code", "You have successfully copied the code to clipboard");
            }, () =>
            {
                aqyanoosCustomAlert("Copy Code", "Copying code to clipboard failed, please try again!");
            });
        }
    });
}

export function setPageData (title, mTitle, mDes, mKeys)
{
    document.title = title;
    const mT = document.querySelector("meta[name='title']");
    const mD = document.querySelector("meta[name='description']");
    const mK = document.querySelector("meta[name='keywords']");

    mT.content = mTitle;
    mD.content = mDes;
    mK.content = mKeys;
}