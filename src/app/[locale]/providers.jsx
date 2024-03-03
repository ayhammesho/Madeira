"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";
import { useState, useEffect } from "react";
import { getGlobalSettings } from "../libs/getData";

// import logo from "../../../public/assets/img/LOGO_cutted.png";

export function WhatsAppProvider({ lang, children }) {
  const [isLoading, setIsLoading] = useState(true);
  // const [whatsAppData, setWhatsAppData] = useState({});

  // useEffect(() => {
  //   const getWhatsAppData = async () => {
  //     const data = await getGlobalSettings(lang);
  //     const whatsApp = data?.attributes?.WHATSAPPSETTINGS;
  //     setWhatsAppData(whatsApp);
  //   };
  //   getWhatsAppData();
  // }, [lang]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {!isLoading && (
        <FloatingWhatsApp
          style={!isLoading ? { opacity: 1, height: "auto" } : { opacity: 0 }}
          className="whatsapp-transition"
          phoneNumber="+971 000 000 000"
          accountName="Madeira"
          chatMessage="We would love to hear you"
          // placeholder="I want to know more about your products"
          avatar={"../../assets/img/logo-white.png"}
        />
      )}

      {children}
    </div>
  );
}
