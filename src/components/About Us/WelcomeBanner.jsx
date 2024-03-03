import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const WelcomeBanner = ({ WelcomeSectionData }) => {
  return (
    <div className="welcome-banner-section pb-100 pt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="welcome-wrap text-center">
              <div
                className="section-title1 text-center wow fadeInUp"
                data-wow-delay="200ms"
              >
                {/* <span>(Since-1994)</span> */}
                <span>{WelcomeSectionData?.Subtitle}</span>
                <h2>{WelcomeSectionData?.Title}</h2>
              </div>
              <div
                className="welcome-content wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div>
                  <BlocksRenderer content={WelcomeSectionData?.Content} />
                </div>
              </div>
              <div className="author-area wow fadeInUp" data-wow-delay="400ms">
                {/* <img src="../assets/img/inner-page/signature.svg" alt="" /> */}
                <h6>{WelcomeSectionData?.MangerName}</h6>
                <span>{WelcomeSectionData?.JobTitle}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
