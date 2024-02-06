import React from "react";
import "./statistic.scss";
import statistic from "../../assets/icon-brand-recognition.svg";
import detailed from "../../assets/icon-detailed-records.svg";
import customize from "../../assets/icon-fully-customizable.svg";

const Statistics = () => {
  return (
    <main role="main">
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
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
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
    </main>
  );
};

export default Statistics;
