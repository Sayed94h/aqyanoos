
function Footer ()
{
    const fy = new Date().getFullYear();
    if (document.location.pathname === "/online-text-editor-online-code-editor-online-notepad")
    {
        return (
            <></>
        );
    }

    return (
        <footer className="footer" id="main-footer">
            <section className="container-footer">
                <section>
                    <div>MAIN</div>
                    <a href="/">Home</a>
                    <a href="/youtube-tutorials-source-code">Tutorials</a>
                    <a href="/about">About</a>
                </section>
                <section>
                    <div>
                        CONTACTS
                    </div>
                    <a href="https://be.linkedin.com/in/sayed-kazimi-0507/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
                    <a href="https://www.youtube.com/@aqyanoos" target="_blank" rel="noreferrer noopener">YouTube</a>

                </section>
                <section>
                    <div>MORE...</div>
                    <a href="/#my-apps">Android Apps</a>
                    <a href="/questions">Questions ?</a>
                    <a href="/privacy/color-reference">Privacy Policy</a>
                </section>

            </section>
            <div className="copyright">
                &copy; aqyanoos.com | <span id="current-year">{fy}</span>
            </div>
        </footer>
    );
}

export default Footer;
