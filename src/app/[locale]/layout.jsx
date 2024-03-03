import { Inter } from "next/font/google";

import { notFound } from "next/navigation";

import { NextIntlClientProvider, useMessages } from "next-intl";

//
import "@/../public/assets/css/animate.min.css";
import "@/../public/assets/css/bootstrap.min.css";
import "@/../public/assets/css/flaticon-set.css";
import "@/../public/assets/css/font-awesome.min.css";
import "@/../public/assets/css/helper.css";
import "@/../public/assets/css/magnific-popup.css";
import "@/../public/assets/css/shop.css";
import "@/../public/assets/css/style.css";
import "@/../public/assets/css/swiper-bundle.min.css";
import "@/../public/assets/css/unit-test.css";
import "@/../public/assets/css/validnavs.css";

import { WhatsAppProvider } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Madeira",
  // description: "Generated by create next app",
};

export default function LocaleLayout({ children, params: { locale } }) {
  const messages = useMessages();

  return (
    <html lang={locale} dir={locale == "ar" ? "rtl" : "ltr"}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <WhatsAppProvider lang={locale}>{children}</WhatsAppProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
