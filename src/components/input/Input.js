import React, { useState, useRef } from "react";

import "./input.scss";
import statistic from "../../assets/icon-brand-recognition.svg";
import detailed from "../../assets/icon-detailed-records.svg";
import customize from "../../assets/icon-fully-customizable.svg";

const Input = () => {
  const [ogLink, setOgLink] = useState("");
  const [link, setLink] = useState("");
  const [results, setResults] = useState([]);
  const [inputError, setInputError] = useState("");
  const resultRef = useRef(null);
  const [copyToggle, setCopyToggle] = useState("Copy");
  const handleCopyClick = () => {
    const resultText = resultRef.current.innerText;
    copyToClipboard(resultText);
    setCopyToggle("Copied!");
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Success:", text);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleInputChange = (event) => {
    setLink(event.target.value);
    setOgLink(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newLink = link.trim();
    if (!newLink) {
      setInputError("Please add a link!");
      return;
    }

    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlPattern.test(newLink)) {
      setInputError("Please add a correct link!");
      return;
    }

    try {
      const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
        method: "POST",
        headers: {
          Authorization: "Bearer a5c7b9124a020374d7355836d33826bece04af60",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ long_url: newLink }),
      });

      if (!response.ok) {
        throw new Error("Failed to shorten the link");
      }

      const data = await response.json();
      setResults((prevResults) => [...prevResults, data.link]);
      setLink("");
    } catch (error) {
      console.error("Error:", error);
      setInputError("Failed to shorten the link");
    }
  };

  return (
    <aside>
      <div className="shorten">
        <form className="inputs" onSubmit={handleSubmit}>
          <div className="inputs__wrapper">
            <div>
              <input
                type="text"
                className={`inputs__input ${inputError ? "input__error" : ""}`}
                placeholder="Shorten a link here..."
                value={link}
                onChange={handleInputChange}
              />
              <div className="error">{inputError}</div>
              <svg
                className="inputs__svg"
                xmlns="http://www.w3.org/2000/svg"
                width="582"
                height="139"
                viewBox="0 0 582 139"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M-134 90.0765C-134 142.8 -118.5 180.562 -61 204.953C-3.5 229.344 52.055 207.087 107.786 219.847C163.517 232.608 163.517 314.809 216 365.396C268.483 415.983 379.142 428.27 469.119 376.948C559.096 325.626 599.885 205.796 573 135.141C546.115 64.4854 494.593 0 246 0C-2.59314 0 -134 37.3533 -134 90.0765Z"
                  fill="#4B3F6B"
                />
              </svg>
            </div>

            <div>
              <button className="inputs__btn">Shorten It!</button>
              <svg
                className="inputs__curves"
                xmlns="http://www.w3.org/2000/svg"
                width="463"
                height="168"
                viewBox="0 0 463 168"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 -93.9235C0 -41.2004 15.5 -3.43848 73 20.9529C130.5 45.3442 186.055 23.0865 241.786 35.847C297.517 48.6075 297.517 130.809 350 181.396C402.483 231.983 513.142 244.27 603.119 192.948C693.096 141.626 733.885 21.7965 707 -48.8591C680.115 -119.515 628.593 -184 380 -184C131.407 -184 0 -146.647 0 -93.9235Z"
                  fill="#4B3F6B"
                />
              </svg>
            </div>
          </div>
        </form>
        <div className="results">
          {results.length > 0 && (
            <>
              {results.map((result, index) => (
                <div className="result" key={index}>
                  <div className="result__link">
                    {ogLink.length > 50 ? ogLink.slice(0, 50) + "..." : ogLink}
                  </div>
                  <div className="result__shortly">
                    <div className="result__link-shortly" ref={resultRef}>
                      {result}
                    </div>

                    <button
                      className={`${
                        copyToggle === "Copied!"
                          ? "result__link-btn copied__link"
                          : "result__link-btn"
                      }`}
                      onClick={handleCopyClick}
                    >
                      {copyToggle}
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="statistic">
          <div className="statistic__title">Advanced Statistics</div>
          <div className="statistic__subtitle">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </div>

          <div className="statistic__tabs">
            <div className="statistic__tabs-item">
              <div className="wrapper">
                <img
                  src={statistic}
                  alt="statistic"
                  className="statistic__tabs-img"
                />
              </div>
              <div className="statistic__tabs-title">Brand Recognition</div>
              <div className="statistic__tabs-text">
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </div>
            </div>

            <div className="line"></div>

            <div className="statistic__tabs-item">
              <div className="wrapper">
                <img
                  src={detailed}
                  alt="detailed"
                  className="statistic__tabs-img"
                />
              </div>
              <div className="statistic__tabs-title">Detailed Records</div>
              <div className="statistic__tabs-text">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </div>
            </div>

            <div className="line"></div>

            <div className="statistic__tabs-item">
              <div className="wrapper">
                <img
                  src={customize}
                  alt="customize"
                  className="statistic__tabs-img dif"
                />
              </div>
              <div className="statistic__tabs-title">Fully Customizable</div>
              <div className="statistic__tabs-text">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Input;
