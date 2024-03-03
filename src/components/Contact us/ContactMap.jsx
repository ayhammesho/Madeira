import React from "react";

const ContactMap = ({ companyMap }) => {
  return (
    <div className="contact-map">
      <iframe
        src={companyMap}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default ContactMap;
