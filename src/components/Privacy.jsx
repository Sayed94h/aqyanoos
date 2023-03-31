
function Privacy (props)
{

    document.title = "Privacy Policy";
    let appName = props.name === "cr" ? " Color Reference " : props.name === "db" ? " Dream Board " :
        props.name === "te" ? " Text Editor " : props.name === "hrc" ? " HTTP Response / Status Code " : " Color Reference ";

    return (
        <>
            <article id="privacy-policy">
                <h1>Privacy Policy</h1>
                <p>This is the Privacy Policy of <span className="app_name">{appName}</span> software.</p>
                <p>Please read the Privacy Policy carefully before using, installing or accepting the <span
                    className="app_name">{appName}</span> software.</p>
                <h2>End-User License Agreement (EULA) of <span className="app_name">{appName}</span></h2>

                <p>This End-User License Agreement ("EULA") is a legal agreement between you and <span
                    className="company_name">Aqyanoos</span>. Our EULA was created by <a
                        href="https://www.eulatemplate.com" target="_blank" rel="noreferrer">EULA
                        Template</a> for <span className="app_name">{appName}</span>.</p>

                <p>This EULA agreement governs your acquisition and use of our <span className="app_name">{appName}</span>
                    software
                    ("Software") directly from <span className="company_name">Aqyanoos</span> or indirectly through a <span
                        className="company_name">Aqyanoos</span> authorized reseller or distributor (a "Reseller"). </p>

                <p>Please read this EULA agreement carefully before completing the installation process and using the <span
                    className="app_name">{appName}</span> software. It provides a license to use the <span
                        className="app_name">{appName}</span> software and contains warranty information and liability
                    disclaimers.</p>

                <p>If you register for a free trial of the <span className="app_name">{appName}</span> software, this EULA
                    agreement
                    will also govern that trial. By clicking "accept" or installing and/or using the <span
                        className="app_name">{appName}</span> software, you are confirming your acceptance of the Software and
                    agreeing to become bound
                    by
                    the terms of this EULA agreement.</p>

                <p>If you are entering into this EULA agreement on behalf of a company or other legal entity, you represent that
                    you
                    have the authority to bind such entity and its affiliates to these terms and conditions. If you do not have
                    such
                    authority or if you do not agree with the terms and conditions of this EULA agreement, do not install or use
                    the
                    Software, and you must not accept this EULA agreement.</p>

                <p>This EULA agreement shall apply only to the Software supplied by <span className="company_name">Aqyanoos</span>
                    herewith regardless of whether other software is referred to or described herein. The terms also apply to
                    any
                    <span className="company_name">Aqyanoos</span> updates, supplements, Internet-based services, and support
                    services
                    for the Software, unless other terms accompany those items on delivery. If so, those terms apply.
                </p>

                <h3>License Grant</h3>

                <p><span className="company_name">Aqyanoos</span> hereby grants you a personal, non-transferable, non-exclusive
                    licence
                    to use the <span className="app_name">{appName}</span> software on your devices in accordance with the
                    terms
                    of
                    this EULA agreement.</p>

                <p>You are permitted to load the <span className="app_name">{appName}</span> software (for example a PC,
                    laptop,
                    mobile or tablet) under your control. You are responsible for ensuring your device meets the minimum
                    requirements of the <span className="app_name">{appName}</span> software.</p>

                <p>You are not permitted to:</p>

                <ul>
                    <li>Edit, alter, modify, adapt, translate or otherwise change the whole or any part of the Software nor
                        permit
                        the whole or any part of the Software to be combined with or become incorporated in any other software,
                        nor
                        decompile, disassemble or reverse engineer the Software or attempt to do any such things</li>
                    <li>Reproduce, copy, distribute, resell or otherwise use the Software for any commercial purpose</li>
                    <li>Allow any third party to use the Software on behalf of or for the benefit of any third party</li>
                    <li>Use the Software in any way which breaches any applicable local, national or international law</li>
                    <li>use the Software for any purpose that <span className="company_name">Aqyanoos</span> considers is a breach
                        of
                        this EULA agreement</li>
                </ul>

                <h3>Intellectual Property and Ownership</h3>

                <p><span className="company_name">Aqyanoos</span> shall at all times retain ownership of the Software as originally
                    downloaded by you and all subsequent downloads of the Software by you. The Software (and the copyright, and
                    other intellectual property rights of whatever nature in the Software, including any modifications made
                    thereto)
                    are and shall remain the property of <span className="company_name">Aqyanoos</span>.</p>

                <p><span className="company_name">Aqyanoos</span> reserves the right to grant licences to use the Software to third
                    parties.</p>

                <h3>Termination</h3>

                <p>This EULA agreement is effective from the date you first use the Software and shall continue until
                    terminated.
                    You may terminate it at any time upon written notice to <span className="company_name">Aqyanoos</span>.</p>

                <p>It will also terminate immediately if you fail to comply with any term of this EULA agreement. Upon such
                    termination, the licenses granted by this EULA agreement will immediately terminate and you agree to stop
                    all
                    access and use of the Software. The provisions that by their nature continue and survive will survive any
                    termination of this EULA agreement.</p>

                <h3>Governing Law</h3>

                <p>This EULA agreement, and any dispute arising out of or in connection with this EULA agreement, shall be
                    governed
                    by and construed in accordance with the laws of <span className="country">be</span>.</p>

                <section className="data-safety">
                    <h2>Data Safety</h2>
                    <h3>User Data</h3>
                    <p>
                        The <span className="app_name">{appName}</span> software does not collect any information about a
                        user,
                        and does not collect any
                        information about the device. The <span className="app_name">{appName}</span> software does not
                        collect
                        user data, does not use user data
                        and does not share user data. In fact, all softwares made by <span className="company_name">Aqyanoos</span>
                        do
                        not do anything with user data.
                        Our softwares do not collect, do not share and do not use any information about users and devices.
                    </p>

                    <h3>Personal and Sensitive User Data</h3>
                    <p>
                        To use the <span className="app_name">{appName}</span> software, you do not need to be authenticated,
                        we
                        do not sell anything
                        so you will not be asked to provide use payment information. The <span className="app_name">{appName}</span> software does not collect
                        authentication information, does not collect financial and payment information, has no access to the
                        phonebook, has no access to the
                        SMS, has no access to call related data, has no access to health data, health connect data, inventory of
                        other apps on the device, microphone, camera, and other sensitive device or usage data.
                        We do not collect, use or share information related to users and devices.
                    </p>

                    <section className={`google-ads ${props.name === "te" ? " hidden" : ''}`}>
                        <h3>Google Ads</h3>
                        <p>
                            The <span className="app_name">{appName}</span> software uses Google Mobile Ads SDK.
                            The SDK collects and shares some data automatically.
                            It collects information related to the performance of the app and the SDK, including crash logs, app
                            launch time, hang rate, and energy usage, it collects Android advertising (ad) ID, app set ID, and,
                            if applicable, other identifiers related to signed-in accounts on the device...
                            <a href="https://developers.google.com/admob/android/privacy/play-data-disclosure" target="_blank" rel="noreferrer noopener">
                                read more on Google Ads Policy page</a>. <br />
                            <span className="company_name">Aqyanoos</span> as the developer and as the owner of
                            the <span className="app_name">{appName}</span> software has no control over the collection of
                            data by the Google Mobile Ads SDK.
                        </p>
                    </section>
                </section>

            </article>
        </>
    );
}

export default Privacy;