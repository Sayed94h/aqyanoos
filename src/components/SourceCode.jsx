import TopNav from "./TopNav";
import {copyToClipboardWeb, setPageData} from "../Libs";
import {videoTuto, tEditor, dV_, hToD} from "./TutorialsContent";

function SourceCode (props)
{
    let defaultContent = "", data_ = null;
    let htmlCode = "", cssCode = "", jsCode = "", info = "";
    //3= video player, 4 = hex-to-decimal, 6 = te, 7 = data-visualization
    if (props.name === '3')
    {
        data_ = videoTuto;
        setPageData(
            'Custom Video Player Exactly Like YouTube Video Player',
            "How to create video player using html css and javascript?",
            "create custom video player exactly like youtube video player with pure html css and javascript",
            "html, css, javascript, js, build custom video player, build custom video player with javascript, build custom video player using html css and javascript"
        );
    }

    if (props.name === '4')
    {
        data_ = hToD;
        setPageData(
            'Convert Hex to Decimal using JavaScript',
            "How to convert Hex to Decimal using javascript?",
            "Convert hex to decimal with javascript and html page",
            "html, css, javascript, js, hex to decimal, decimal to hex, hex convertor, decimal convertor, convert hext to decimal using javascript, convert decimal to hex using javascript"
        );
    }

    if (props.name === '6')
    {
        data_ = tEditor;
        setPageData(
            'Online Text / Code Editor JavaScript',
            "How to create online text or code editor using html css and javascript?",
            "Here I teach you how to create a text or code editor with pure html css and javascript",
            "html, css, javascript, js, build online text editor, build online text editor with javascript, build code editor using html css and javascript, create text editor, build code editor, create your own notepad"
        );
    }

    if (props.name === '7')
    {
        data_ = dV_;
        setPageData(
            'Data Visualization Part 1',
            "How to create your own data visualization library using html css and javascript?",
            "create your own data visualization library exactly like youtube your own data visualization library with pure html css and javascript",
            "html, css, javascript, js, build your own data visualization library, build data visualization library with javascript, build data visualization tools using html css and javascript"
        );
    }

    if (props.name === '5')
    {
        setPageData(
            'Source Code of my YouTube Tutorials',
            "Learn to code and become the best programmer?",
            "Visit our website if you would like to become a perfect programmer and find your dream job in IT in some months",
            "html, css, javascript, js, java, python, c#, c++, learn coding, learn programming, learn javascript, learn python, learn html, learn css, learn c#, learn c++"
        );
    }

    if (data_)
    {
        htmlCode = data_.htmlCode;
        cssCode = data_.cssCode;
        jsCode = data_.jsCode;
        info = data_.info;
        defaultContent = htmlCode;
    }

    const injectContent = (e) =>
    {
        const t = e.target;
        const rawCodeHolder = document.querySelector(".raw-code");

        const currents_ = document.querySelector(".c");
        currents_.classList.remove("c");

        t.classList.add("c");

        switch (t.textContent)
        {
            case "HTML":
                rawCodeHolder.value = htmlCode.trim();
                break;
            case "CSS":
                rawCodeHolder.value = cssCode;
                break;
            case "JS":
                rawCodeHolder.value = jsCode;
                break;
            default:
                break
        }
    };

    // set page meta data

    return (
        <>
            {/* <!-- nav bar --> */}
            <TopNav cls="Tutorials_page" />

            {/* <!-- main header --> */}
            <header className="page-header">
                <h3>Source Codes of my YouTube Tutorials</h3>
            </header>
            <section id="main" className="source-codes">
                <article>
                    <nav id="tutorial-list">
                        <a href="/youtube-tutorials-source-code/data-visualization-part01" className={`tl-item dvp1 ${props.name === '7' ? " b-current" : ''}`}>Data Visualization Part 1</a><br /> <br />
                        <a href="/youtube-tutorials-source-code/online-text-editor-javascript" className={`tl-item tejs ${props.name === '6' ? " b-current" : ''}`}>Text Editor JS</a> <br /> <br />
                        <a href="/youtube-tutorials-source-code/convert-hex-to-decimal" className={`tl-item chtd ${props.name === '4' ? " b-current" : ''}`}>Convert Hex to decimal</a>  <br /><br />
                        <a href="/youtube-tutorials-source-code/custom-video-player-html-css-javascript" className={`tl-item cvply ${props.name === '3' ? " b-current" : ''}`}>Custom Video Player Like YouTube</a>
                    </nav>
                    {/* original */}
                    <section className={` ${props.name === '5' ? "" : " hidden"}`}>
                        <p>
                            <strong>Useful information</strong> <br /> <br />
                            In this page you find the source codes of my YouTube Tutorials.
                            Select the article from the above list and you will see the source codes(html, css and javascript).
                            I hope you find my Tutorials helpful.
                            <br /> <br />
                            <em>Use your knowledge for good!</em>
                        </p>
                    </section>

                    {/* injected */}
                    <section className={`sc ${props.name === '5' ? " hidden" : ""}`}>
                        <h3>Useful information</h3>
                        <p dangerouslySetInnerHTML={{__html: info}}></p>
                        <header className="sc-nav">
                            <div className="html c" onClick={(e) => {injectContent(e);}}>HTML</div>
                            <div className="css" onClick={(e) => {injectContent(e);}}>CSS</div>
                            <div className="js" onClick={(e) => {injectContent(e);}}>JS</div>
                            <div className="btn copy-raw-code"
                                onClick={(e) => {copyToClipboardWeb(document.querySelector('.raw-code').value);}}>Copy</div>
                        </header>
                        <div className="sc-wrapper">
                            <textarea name="html" id="html-view" className="raw-code" readOnly defaultValue={defaultContent}></textarea>
                        </div>
                    </section>
                </article>
            </section>
            <div className="source-space"></div>
        </>
    );
}

export default SourceCode;