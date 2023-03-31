import TE from "../textEditor_icon.png";
import HRC from "../hrc_icon.png";
import CR from "../cw_icon.PNG";
import DB from "../db_icon.png";
import "./Home.css";

function Home ()
{
    function toYr (d)
    {
        const days = Math.round((Date.now() - new Date(d)) / 1000 / 60 / 60 / 24);
        if (days > 364)
        {
            let yr = Math.floor(days / 365);
            yr = yr + " year" + (yr > 1 ? "s" : "");
            let days_ = days % 365;
            days_ = days_ > 0 ? " and " + days_ + " day" + (days_ > 1 ? "s" : "") : "";
            return yr + days_ + " ago";
        } else
        {
            return days > 1 ? days + " days ago" : " Today";
        }
    };

    const difFRhrc = toYr("2022-02-09");
    const difFRtextEditor = toYr("2022-02-23");
    const difFRCR = toYr("2023-01-9");
    const difFRDB = toYr("2023-02-22");

    return (
        <article>
            {/* <!-- side notes --> */}
            {/* <!-- showcase --> */}
            <section className="showcase d-flex f-col space-around fc-white txt-select-none">
                <section className="d-flex first">
                    <section id="logo_txt" className=" txt-c">
                        {/* <!-- <img src="./images/app_icons/android-chrome-512x512.png" alt="logo"> --> */}
                        <div className="txt-c d-flex space-between">
                            <span className="fc-black">A</span>
                            <span className="fc-red">q</span>
                            <span className="fc-green">y</span>
                            <span className="fc-gold">a</span>
                        </div>
                        <div className="fc-blue txt-c">NOOS</div>
                    </section>
                    <section className="second-b">
                        <div className="d-flex aln-c">
                            <div className="fs-10 p0 ms-15">A</div>
                            <div className="fs-2 px-10">qyanoos Creates useful applications and programs for everyone!</div>
                        </div>
                    </section>
                </section>
            </section>

            {/* <!-- navigation --> */}
            <section id="main-nav">
                <section className="d-flex nav">
                    <nav>
                        <a href="#home-page" className="current">Home</a>
                        <a href="/youtube-tutorials-source-code">Tutorials</a>
                        <a href="/about">About</a>
                    </nav>
                </section>
                <hr />
                <section className="d-flex nav">
                    <nav className="home-second-nav">
                        <a href="https://www.youtube.com/@aqyanoos" target="_blank" rel="noreferrer">YouTube</a> <span>|</span>
                        <a href="/online-text-editor-online-code-editor-online-notepad">Online Text Editor</a> <span>|</span>
                        <a href="/how-to-convert-decimal-to-hex">Hex / Decimal Convertor</a>
                    </nav>
                </section>
            </section>

            {/* <!-- short intro --> */}

            <section className="home-text">
                <h2 className="hdr">Aqyanoos is unique</h2>
                <hr />
                <p>
                    <em className="fc-d txt-b"> Aqyanoos does not create applications to collect users information, to
                        track users or
                        spy on users. We want to be the only software company that does not abuse the users of its
                        applications and
                        softwares. </em>
                </p>
                <p>
                    We do not collect your device information such as
                    device name, IP Address, network information, internet information, location, device resolutions,...
                    We do not spy on you: we do not collect your activities on our web applications or mobile
                    applications such
                    as how you use the app, when you use the app, how often you use the app, what you do with the
                    app,...
                </p>
                <p>
                    We do not have any access to your device's storage and if we would have access to your device's
                    storage then we
                    never go through your personal data, we do not do anything with your other files, we do not check
                    your other
                    files, we do not look at your personal files, we do not steal your private/personal files...
                    We sincerely respect your privacy and your private files!
                </p>
                <p>
                    <em className="fc-d txt-b">BECAUSE we do not collect any data from you, our applications are very light
                        and fast. The
                        size of our mobile
                        applications are less than 3MB. </em>
                </p>
                <p>
                    We do not have access to your camera or microphone and we do not ask your permission to allow us to
                    have access to
                    your camera or microphone unless it is necessary for you to do something with the app using your
                    camera or
                    microphone.
                </p>
                <p>
                    <em className="fc-d txt-b">
                        BECAUSE we do not collect any data from you and we do not track you, this makes our applications
                        very unique and
                        special among other millions applications. </em>
                </p>
            </section>

            {/* <!-- Android apps --> */}
            <section>
                <h2 className="hdr">Our Android Applications</h2>
                <hr />
                <section className="table-holder">

                    <table id="my-apps">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Details</th>
                                <th>Description</th>
                                <th>Install Link</th>
                                <th>Logo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="txt-c">HTTP Response Code <br />Or <br />HTTP Status Code</td>
                                <td className="details">
                                    <span className="txt-b">First Release:</span> Feb 9, 2022 <br />
                                    <span className="txt-b">Published: </span><span id="dif-FRhrc">{difFRhrc}</span> <br />
                                    <span className="txt-b">Version:</span> 1.1.2 <br />
                                    <span className="txt-b">Downloads:</span> 100+
                                </td>
                                <td className="des">
                                    This android app helps you Search, Practice and Learn HTTP Status Codes or HTTP Response Codes.
                                    Check the application on Google Play by clicking <a
                                        href="https://play.google.com/store/apps/details?id=com.aqyanoos.httpresponsecode"
                                        target="_blank" rel="noreferrer noopener">here</a>.
                                </td>
                                <td>
                                    Check the app <a href="https://play.google.com/store/apps/details?id=com.aqyanoos.httpresponsecode"
                                        target="_blank" rel="noreferrer noopener">here</a>.
                                </td>
                                <td className="icon txt-c">
                                    <img src={HRC} alt="http status code or http response code" />
                                </td>
                            </tr>

                            <tr>
                                <td className="txt-c">Dream Board</td>
                                <td className="details">
                                    <span className="txt-b">First Release:</span> Feb 22, 2023 <br />
                                    <span className="txt-b">Published: </span><span id="dif-FRDB">{difFRDB}</span> <br />
                                    <span className="txt-b">Version:</span> 1.0.2 <br />
                                    <span className="txt-b">Downloads:</span> 50+
                                </td>
                                <td className="des">
                                    If you like drawing anything on your smartphone then this app is perfect for you. Draw anything with
                                    different pen size, pen color,
                                    background color, pen transparency,...and save your drawing as image on your device. Check the app on
                                    Google Play to learn more about it.
                                    Check the application on Google Play by clicking <a
                                        href="https://play.google.com/store/apps/details?id=com.aqyanoos.dreamboard" target="_blank" rel="noreferrer noopener">here</a>.
                                </td>
                                <td>
                                    Check the app <a href="https://play.google.com/store/apps/details?id=com.aqyanoos.dreamboard"
                                        target="_blank" rel="noreferrer noopener">here</a>.
                                </td>
                                <td className="icon txt-c">
                                    <img src={DB} alt="Dream Board" />
                                </td>
                            </tr>

                            <tr>
                                <td className="txt-c">Color Reference</td>
                                <td className="details">
                                    <span className="txt-b">First Release:</span> Jan 9, 2023 <br />
                                    <span className="txt-b">Published: </span><span id="dif-FRCR">{difFRCR}</span> <br />
                                    <span className="txt-b">Version:</span> 1.0.6 <br />
                                    <span className="txt-b">Downloads:</span> 100+
                                </td>
                                <td className="des">
                                    This android app is created to help you with colors. This is a perfect application for those who deal with
                                    colors everyday.
                                    Check the application on Google Play by clicking <a
                                        href="https://play.google.com/store/apps/details?id=com.aqyanoos.colorreference"
                                        target="_blank" rel="noopener noreferrer">here</a>.
                                </td>
                                <td>
                                    Check the app <a href="https://play.google.com/store/apps/details?id=com.aqyanoos.colorreference"
                                        target="_blank" rel="noopener noreferrer">here</a>.
                                </td>
                                <td className="icon txt-c">
                                    <img src={CR} alt="Color Reference" />
                                </td>
                            </tr>

                            <tr>
                                <td className="txt-c">Text Editor <br />Or<br /> Code Editor</td>
                                <td className="details">
                                    <span className="txt-b">First Release:</span> Feb 23, 2022 <br />
                                    <span className="txt-b">Published: </span><span id="dif-FRtextEditor">{difFRtextEditor}</span> <br />
                                    <span className="txt-b">Version:</span> 1.0.0 <br />
                                    <span className="txt-b">Downloads:</span> 100+
                                </td>
                                <td className="des">
                                    This android app is able to create new files and edit files. This is almost like Windows Notepad.
                                    With this Android application you can create custom files with custom extensions. This Text Editor is
                                    very helpful especially for developers and programmers. This is a great Code Editor.
                                    Check the application on Google Play by clicking <a
                                        href="https://play.google.com/store/apps/details?id=com.aqyanoos.texteditor" target="_blank" rel="noreferrer noopener">here</a>.
                                </td>
                                <td>
                                    Check the app <a href="https://play.google.com/store/apps/details?id=com.aqyanoos.texteditor"
                                        target="_blank" rel="noreferrer noopener">here</a>.
                                </td>
                                <td className="icon txt-c">
                                    <img src={TE}
                                        alt="Text Editor for Android devices or Code Editor for Android devices" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </section>


            <div className="mt-50"></div>
        </article>
    );
};

export default Home;