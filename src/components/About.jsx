
// import "../generateContent";
import TopNav from "./TopNav";
function About ()
{
    document.title = "About Aqyanoos";

    return (
        <>
            {/* <!-- nav bar --> */}
            <TopNav cls="About_page" />

            <header className="hidden feature-hdr">
                <div>Aqyanoos creates useful applications for everyone.</div>
            </header>

            {/* <!-- main part of the web page --> */}
            <section id="about">

                <h2>
                    About Aqyanoos
                </h2>

                <section>
                    <section>
                        <p>
                            Aqyanoos is planning to create useful, informational, educational and user friendly applications
                            and tools.
                        </p>
                        <p>
                            Aqyanoos would like to create applications and tools for everyone!
                        </p>
                        <p>Everyone, every single individual in each part of the world is important!</p>
                        <p>That is why, Aqyanoos is planning to create applications and tools for everyone.</p>
                        <p>No matter what you do, what your job is,... you need some automation, tools that would make your work
                            and
                            your life easy.</p>
                    </section>

                    <section>
                        <h2>Our main goal:</h2>
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
                </section>
            </section>
        </>
    );
}

export default About;