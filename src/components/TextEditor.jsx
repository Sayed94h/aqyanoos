import {aqyanoosCustomAlert, setPageData} from "../Libs";

function TextEditor ()
{

    setPageData(
        "Online Text Editor - Online Code Editor",
        "online text editor - online code editor - online notepad",
        "A great online text or code editor. Create, read, open and save any text based files online",
        "online, text, editor, code, text editor, code editor, online text editor, online code editor"
    );

    let fileName = '';

    function readFile (e)
    {
        const content_ = document.getElementById('content');
        const openFileInput = document.getElementById("openFile");

        openFileInput.click();

        openFileInput.addEventListener('change', function (e)
        {
            const file_ = e.target.files[0];

            fileName = file_.name;

            const reader_ = new FileReader();
            // you can use 'load', 'loadend' as the event type
            reader_.addEventListener('loadend', function (event)
            {
                content_.value = event.target.result;
            });

            reader_.readAsText(file_);
        });
    }

    function saveFile (e)
    {
        const content_ = document.getElementById('content');
        if (!fileName)
        {
            newFileName();
        }

        const contentOfFile = content_.value;
        const blob_ = new Blob([contentOfFile], {type: 'text/plain'});
        const url_ = URL.createObjectURL(blob_);
        const aEl = document.createElement('a');
        aEl.href = url_;
        aEl.download = fileName;
        aEl.click();
    }

    function newFileName (e)
    {
        fileName = promptResult();
    }

    function promptResult ()
    {
        // Todo: check if the user has provided any extension for the file or not
        let msg = "Please give a name for the new file and also an extension for it: ";
        let userInput = window.prompt(msg);
        if (userInput)
        {
            return userInput;
        } else
        {
            const askAgian = window.confirm("You have not given any name for the new file. Would you like to give a name and an extension?");
            if (askAgian)
            {
                userInput = window.prompt(msg);
                if (userInput)
                {
                    return userInput;
                }
            }
            aqyanoosCustomAlert("Warning", "You did not give any name and extension for your file, so we gave the default name(Aqyanoos.txt)");

            return 'Aqyanoos.txt';
        }
    }

    return (
        <section className="body-te-sfd">
            <section className="text-editor-js">
                <header className="te-sfd">
                    <div className="ms-8 txt-b te-title">Text Editor</div>
                    <button id="open" className="ms-8 te-sfd" onClick={(e) => {readFile(e);}}>Open</button>
                    <button id="save" className="ms-8 te-sfd" onClick={(e) => {saveFile(e);}}>Save</button>
                    <button id="new-file" className="ms-8 te-sfd" onClick={(e) => {newFileName(e);}}>New File</button>
                    <div className="ms-8 te-nav-h"><a href="/">Home</a></div>
                </header>
                <section className="te-sfd">
                    <textarea name="content" id="content" className="te-sfd" defaultValue={""}></textarea>
                </section>
            </section>

            <input type="file" className="hidden te-sfd" id="openFile"></input>

        </section>
    );
}

export default TextEditor;