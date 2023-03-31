
function TopNav (props)
{

    return (
        <>
            <section className=" main-nav">
                <nav className="main-nav-holder">
                    <a href="/" className='Home_page'>Home</a>
                    <a href="/youtube-tutorials-source-code" className={`Tutorials_page ${props.cls === 'Tutorials_page' ? ' current' : ''}`}>Tutorials</a>
                    <a href="/questions" className={`Questions_page ${props.cls === 'Questions_page' ? ' current' : ''}`}>Questions</a>
                    <a href="/about" className={`About_page ${props.cls === 'About_page' ? ' current' : ''}`}>About</a>
                </nav>
            </section>
        </>
    );
}

export default TopNav;