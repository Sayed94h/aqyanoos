"use strict";

const fy = new Date().getFullYear(), pageTitle = document.title;
const pages = [
    {
        Name: "Home",
        Path: "/"
    },
    {
        Name: "Tutorials",
        Path: "/views/source-codes/source-codes.html"
    },
    {
        Name: "Questions",
        Path: "/views/main/questions.html"
    }, {
        Name: "About",
        Path: "/views/main/about.html"
    }
];

function setNavContent (p_)
{
    const queryString = window.location.href;
    const pageType = queryString.split("?")[1];
    let pt = "cr";
    if (pageType)
    {
        const type_ = pageType.split("=")[1];
        if (type_)
        {
            pt = type_;
            setAppName(type_);
        }
    }

    const tutorialListEl = document.getElementById("tutorial-list");
    if (tutorialListEl)
    {
        tutorialListEl.innerHTML = `
        <a href="./data-visualization-part01.html" class="tl-item dvp1">Data Visualization Part 1</a><br> <br>
        <a href="./text-editor-js.html" class="tl-item tejs">Text Editor JS</a> <br> <br>
        <a href="./hex-to-decimal.html" class="tl-item chtd">Convert Hex to decimal</a>  <br><br>   
        <a href="./custom-video-player-html-css-javascript.html" class="tl-item cvply">Custom Video Player Like YouTube</a>        

        `;
    }

    const navEl = document.getElementById("main-nav");
    if (navEl)
    {
        navEl.innerHTML = "";

        const navContent = document.createElement("nav");
        navContent.classList.add("main-nav-holder");

        p_.forEach(page =>
        {
            const link = document.createElement('a');
            link.setAttribute("href", page.Path);

            link.innerHTML = page.Name;
            link.classList.add(page.Name + "_page");

            if (pageTitle.includes(page.Name))
            {
                link.classList.add("current");
            }

            navContent.appendChild(link);
        });

        navEl.appendChild(navContent);
        setActiveSubNav();
    }

    setFooterContent(pt);
}

setNavContent(pages);

function setFooterContent (qs)
{
    const footerContent = `
<section class="container-footer">
    <section>
        <div>MAIN</div>
        <a href="/">Home</a>
        <a href="/views/source-codes/source-codes.html">Tutorials</a>
        <a href="/views/main/about.html">About</a>
    </section>
    <section>
        <div>
            CONTACTS
        </div>
        <a href="https://be.linkedin.com/in/sayed-kazimi-0507/" target="_blank">LinkedIn</a>

    </section>
    <section>
        <div>MORE...</div>
        <a href="/#my-apps">Android Apps</a>
        <a href="/views/main/questions.html">Questions ?</a>
        <a href="/privacy/privacy.html?page=${qs}">Privacy Policy</a>
    </section>

</section>
<div class="copyright">
    &copy; aqyanoos.com | <span id="current-year">${fy}</span>
</div>
`;

    const footerEl = document.getElementById("main-footer");
    footerEl.innerHTML = footerContent;
}

function aqyanoosCustomAlert (title, description)
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

function copyToClipboardWeb (txt)
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

function setAppName (pageType)
{
    const appName = document.querySelectorAll(".app_name");
    const nameDic = {
        cr: " Color Reference ",
        db: " Dream Board ",
        cw: " Color World ",
        hrc: " HTTP Response / Status Code ",
        te: " Text Editor "
    };

    if (nameDic[pageType])
    {
        appName.forEach(el =>
        {
            el.innerHTML = nameDic[pageType];
        });

        // if (nameDic[pageType] === "Dream Board")
        // {
        //     const dataSafety = document.querySelector(".data-safety");
        //     dataSafety.classList.add("hidden");
        // }
    }
}

function setActiveSubNav ()
{
    const subNav = [
        {name: "Data Visualization", klas: ".dvp1"},
        {name: "Text / Code Editor", klas: ".tejs"},
        {name: "Convert Hex to Decimal", klas: ".chtd"},
        {name: "Custom Video Player", klas: ".cvply"},
    ];

    subNav.forEach(x =>
    {
        if (pageTitle.includes(x.name))
        {
            const tut = document.querySelector(".Tutorials_page");
            tut.classList.add("current");
            document.querySelector(x.klas).classList.add("b-current");
        }
    });
}