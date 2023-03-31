
export const gv = {
    endpoint: "https://everydaysmarter.herokuapp.com/",
    path: window.location.pathname,
    date: new Date().toJSON().split("T")[0],
    time: new Date().toJSON().split("T")[1],
    dn: navigator.userAgentData.platform
};

const difFRhrc = Math.round((new Date(today) - (new Date("2022-02-09"))) / 1000 / 60 / 60 / 24);
const difFRtextEditor = Math.round((new Date(today) - (new Date("2022-02-23"))) / 1000 / 60 / 60 / 24);

export const myApps = [
    {
        Name: "HTTP Response Code",
        Details: [
            {
                title: "First Release: ",
                text: "Feb 9, 2022"
            },
            {
                title: "",
                text: difFRhrc + " Days ago"
            },
            {
                title: "Version: ",
                text: "1.0.6"
            },
            {
                title: "Downloads: ",
                text: "20+"
            }
        ],
        Description: "This android app helps you Search, Practice and Learn HTTP Status Codes or HTTP Response Codes." +
            "Check the application on Google Play by clicking" +
            "<a href='https://play.google.com/store/apps/details?id=com.aqyanoos.httpresponsecode' target='_blank'>here</a>.",
        Install_Link: 'Check the app <a href="https://play.google.com/store/apps/details?id=com.aqyanoos.httpresponsecode" target="_blank">here</a>',
        Icon: '<img src="./images/hrc_icon.png" alt="http status code">'
    },
    {
        Name: "Text Editor",
        Details: [
            {
                title: "First Release: ",
                text: "Feb 23, 2022"
            },
            {
                title: "",
                text: difFRtextEditor + " Days ago"
            },
            {
                title: "Version: ",
                text: "1.0.0"
            },
            {
                title: "Downloads: ",
                text: "10+"
            }
        ],
        Description: "This android app is able to create new file and edit files. This is almost like Windows Notepad." +
            "With this Android application you can create custom files with custom extensions. This Text Editor is" +
            "very helpful especially for developers and programmers. This is a great Code Editor." +
            "Check the application on Google Play by clicking <a href='https://play.google.com/store/apps/details?id=com.aqyanoos.texteditor' target='_blank'>here</a>.",
        Install_Link: 'Check the app <a href="https://play.google.com/store/apps/details?id=com.aqyanoos.texteditor" target="_blank">here</a>',
        Icon: '<img src="./images/textEditor_icon.png" alt="Text Editor">'
    }
];