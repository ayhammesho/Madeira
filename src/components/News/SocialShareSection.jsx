"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinIcon,
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  WhatsappIcon,
} from "react-share";

const SocialShareSection = ({ blogImage }) => {
  const t = useTranslations("default");
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="blog-tag-social-area">
      <div className="social-area">
        <h6>{t("News.share")}</h6>
        <ul className="social-link d-flex align-items-center">
          <li>
            <a>
              <FacebookShareButton url={pathname}>
                <FacebookIcon size={25} round={true} />
              </FacebookShareButton>
            </a>
          </li>
          <li>
            <a>
              <TwitterShareButton
                url={process.env.NEXT_PUBLIC_BACKEND_URI + pathname}
              >
                <TwitterIcon size={25} round={true} />
              </TwitterShareButton>
            </a>
          </li>
          <li>
            <a>
              <LinkedinShareButton
                url={process.env.NEXT_PUBLIC_BACKEND_URI + pathname}
              >
                <LinkedinIcon size={25} round={true} />
              </LinkedinShareButton>
            </a>
          </li>
          <li>
            <a>
              <RedditShareButton
                url={process.env.NEXT_PUBLIC_BACKEND_URI + pathname}
              >
                <RedditIcon size={25} round={true} />
              </RedditShareButton>
            </a>
          </li>
          <li>
            <a>
              <PinterestShareButton
                media={process.env.NEXT_PUBLIC_BACKEND_URI + blogImage}
                url={process.env.NEXT_PUBLIC_BACKEND_URI + pathname}
              >
                <PinterestIcon size={25} round={true} />
              </PinterestShareButton>
            </a>
          </li>
          <li>
            <a>
              <TelegramShareButton
                url={process.env.NEXT_PUBLIC_BACKEND_URI + pathname}
              >
                <TelegramIcon size={25} round={true} />
              </TelegramShareButton>
            </a>
          </li>
          <li>
            <a>
              <WhatsappShareButton
                url={process.env.NEXT_PUBLIC_BACKEND_URI + pathname}
              >
                <WhatsappIcon size={25} round={true} />
              </WhatsappShareButton>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialShareSection;
