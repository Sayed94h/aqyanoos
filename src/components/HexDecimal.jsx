
import "./HexDecimal.css";
import {aqyanoosCustomAlert, setPageData} from "../Libs";

function HexDecimal (props)
{
    // if (props.name === "decimal")
    // {
    //     setPageData(
    //         "Convert decimal integer to hex",
    //         "How to convert Decimal or integer to hex or hexadecimal using javascript?",
    //         "Convert hex to decimal with javascript and html page",
    //         "hex, decimal, integer, hexadecimal, convert, converter, html, js, javascript"
    //     );
    // } else {
    //     setPageData(
    //         "Convert Hex to decimal",
    //         "How to convert Hex to Decimal using javascript?",
    //         "Convert hex to decimal with javascript and html page",
    //         "hex, decimal, integer, hexadecimal, convert, converter, html, js, javascript"
    //     );
    // }

    setPageData(
        `Convert   ${props.name === "decimal" ? "decimal integer to hex" : "Hex to decimal"}`,
        `How to convert ${props.name === "decimal" ? "Decimal or integer to hex or hexadecimal" : "Hex to Decimal"}  using javascript?`,
        `Convert  ${props.name === "decimal" ? "Decimal to Hex" : "Hex to Decimal"} with javascript and html page`,
        "hex, decimal, integer, hexadecimal, convert, converter, html, js, javascript"
    );


    const numberConvertor = (v_) =>
    {
        const resultEl = document.getElementById("result");
        let res_ = 0;
        if (props.name === "decimal")
        {
            if (v_)
            {
                res_ = Number(v_);
                if (!res_)
                {
                    aqyanoosCustomAlert("Warning", "Please enter values between 0 - 9");
                    return;
                }

                res_ = res_.toString(16);
            }
        } else
        {
            if (v_)
            {
                let base = "0x" + v_;
                res_ = Number(base);
                if (!res_)
                {
                    // aqyanoosCustomAlert("Warning", "Please enter values between 0 - 9 and A-F");
                    aqyanoosCustomAlert("Warning", "Please enter values between 0 - 9 and A-F");
                    return;
                }
            }
        }

        resultEl.innerHTML = res_;
    };

    return (
        <>
            <header className="hd">
                <div className="bold txt-center">{props.name === "decimal" ? "Convert decimal or integer to Hex or Hexadecimal" : "Convert Hex or Hexadecimal to decimal or integer"}</div>
            </header>
            <section id="hex-decimal">
                <div className="my-9 tl-items">
                    <div>
                        <a href="/">Home</a>
                    </div>

                    <div>
                        <a href="/how-to-convert-hex-to-decimal">Convert Hex to Decimal</a>
                    </div>

                    <div>
                        <a href="/how-to-convert-decimal-to-hex" className="">Convert Decimal to Hex</a>
                    </div>

                    <div>
                        <a href="https://www.youtube.com/@aqyanoos" target="_blank" rel="noreferrer noopener">YouTube</a>
                    </div>

                    <div>
                        <a href="/online-text-editor-online-code-editor-online-notepad">Online Text Editor</a>
                    </div>
                </div>
                <div className="bold my-9">
                    {props.name === "decimal" ? "Enter Decimal Number or integer" : "Enter Hex Number"}
                </div>
                <input type="text" className="xyz-25ext-57sjdfsj hd" placeholder={props.name === "decimal" ? "Enter Decimal number" : "Enter Hex number"} onChange={(e) => {numberConvertor(e.target.value);}} />
                <button className="hd" onClick={(e) => {numberConvertor(document.querySelector('input.xyz-25ext-57sjdfsj').value);}}>Submit</button>
                <div>
                    <h3>
                        {props.name === "decimal" ? "Result in Hex or Hexadecimal" : "Result in Decimal or Integer"}
                    </h3>
                    <div id="result"></div>
                </div>
            </section>

        </>
    );
}

export default HexDecimal;