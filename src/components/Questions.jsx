import TopNav from "./TopNav";
function Questions ()
{
    document.title = "Ask anything!";

    return (
        <>
            {/* <!-- nav bar --> */}
            <TopNav cls="Questions_page" />

            <header className="hidden feature-hdr">
                <div>Aqyanoos.com creates useful applications for everyone.</div>
            </header>

            {/* <!-- main part of the web page --> */}
            <div id="questions">

                <h2>
                    Do you have any question?
                </h2>

                <p>
                    We love to hear from you. If you have any question please send your question using the below form and we
                    contact you or answer your question(s) as soon as we can.
                    Thank you!
                </p>

                <div className="questions-form-holder">
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSfFsq95D2zcepfHVazcV8qPXGtxNT1mk7ll65Dw_iyYGFxIJg/viewform?embedded=true"
                        width="1040" height="1212" frameBorder="0" marginHeight="0" marginWidth="0" title="contact form">Loading…</iframe>
                </div>
            </div>
        </>
    );
}

export default Questions;