// import ContactForm from "@/components/Contact us/ContactForm";
// import ContactInformation from "@/components/Contact us/ContactInformation";
// import ContactMap from "@/components/Contact us/ContactMap";
// import { getGlobalSettings } from "@/app/libs/getData";
"use client";
import { useTranslations } from "next-intl";

function ContactPage({ params: { locale } }) {
  const t = useTranslations("default");
  // const globalSettings = await getGlobalSettings(locale);

  // const companyEmail = globalSettings?.attributes?.email;

  // const companyPhone = globalSettings?.attributes?.Phone_Number;

  // const companyLocation = globalSettings?.attributes?.location_text;
  // const companyMap = globalSettings?.attributes?.MapLink;

  return (
    <div className="contact-area contact-page overflow-hidden bg-gray default-padding">
      <div className="sahpe-right-bottom">
        <img src="../assets/img/shape/16.png" alt="Image Not Found" />
      </div>
      <div className="container">
        <div className="row align-center">
          <div className="col-tact-stye-one col-xl-7 col-lg-7">
            <div className="contact-form-style-one mb-md-50">
              <img
                src="../assets/img/illustration/10.png"
                alt="Image Not Found"
              />
              <h5 className="sub-title">{t("Contact.subtitle")}</h5>
              <h2 className="heading">{t("Contact.title")}</h2>
              <form className="contact-form contact-form">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder={t("Contact.form_name")}
                        type="text"
                      />
                      <span className="alert-error"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder={t("Contact.form_email")}
                        type="email"
                      />
                      <span className="alert-error"></span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder={t("Contact.form_phone")}
                        type="text"
                      />
                      <span className="alert-error"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group comments">
                      <textarea
                        className="form-control"
                        id="comments"
                        name="comments"
                        placeholder={t("Contact.form_message")} //" *"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <button type="button" name="submit" id="submit">
                      <i className="fa fa-paper-plane"></i>
                      {t("Contact.cta")}
                    </button>
                  </div>
                </div>
                {/* <!-- Alert Message --> */}
                <div className="col-lg-12 alert-notification">
                  <div id="message" className="alert-msg"></div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-tact-stye-one col-xl-5 col-lg-5 pl-80 pl-md-15 pl-xs-15">
            <div className="contact-style-one-info">
              <h2>
                {t("Contact.contact_info_title")}

                <span>
                  {t("Contact.contact_info_subtitle")}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M14.4,111.6c0,0,202.9-33.7,471.2,0c0,0-194-8.9-397.3,24.7c0,0,141.9-5.9,309.2,0"
                      style={{ animationPlayState: "running" }}
                    ></path>
                  </svg>
                </span>
              </h2>
              <p>{t("Contact.contact_info_desc")}</p>
              <ul>
                <li>
                  <div className="content">
                    <h5 className="title">
                      {" "}
                      {t("Contact.contact_info_phone")}
                    </h5>
                    <a href="#">+971 000 000 000</a>
                  </div>
                </li>
                <li>
                  <div className="info">
                    <h5 className="title">
                      {" "}
                      {t("Contact.contact_info_email")}
                    </h5>
                    <a href="mailto:info@madeira.ae">info@madeira.ae</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

{
  /* <div className="contact-page pt-100 mb-100">
        <div className="container">
          <div className="row g-4 mb-100">
            <div className="col-lg-5">
              <ContactInformation
                companyEmail={companyEmail}
                companyPhone={companyPhone}
                companyLocation={companyLocation}
              />
            </div>
            <div className="col-lg-7">
              {" "}
              <ContactForm />{" "}
            </div>
          </div>
        </div>
      </div>
      <ContactMap companyMap={companyMap} /> */
}
