"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useTranslations } from "next-intl";

import Alert from "react-bootstrap/Alert";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [thereError, setThereIsError] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [phoneNumberValue, setPhoneNumberValue] = useState();
  const t = useTranslations("default");

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    //  const NewData = {...data,Subject}
    setIsLoading(true);
    console.log(data);
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/contact-uses`;

    const res = await fetch(url, {
      cache: "no-cache",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });
    console.log(res);
    if (res.status !== 200) {
      setIsLoading(false); // <--
      setThereIsError("Something went wrong");
    } else {
      setIsLoading(false); // <-- Here
      setIsSuccessful(true);
      setPhoneNumberValue("");
    }
    reset();
  };

  return (
    <div className="inquiry-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-12">
            <div className="form-inner mb-30">
              <label>{t("Contact.fullName")}*</label>
              <input
                type="text"
                className={
                  errors.FULLNAME ? "border  border-1 border-danger " : ""
                }
                placeholder={t("Contact.placeholders.full_name")}
                {...register("FULLNAME", {
                  required: t("Contact.auth.full_name"),
                  minLength: {
                    value: 3,
                    message: "The name should at least 3 characters long",
                  },
                })}
              />
              {errors.FULLNAME && (
                <p
                  className="text-danger "
                  style={{ fontSize: "12px" }}
                  role="alert"
                >
                  {errors.FULLNAME.message}
                </p>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-inner mb-30">
              <label>
                {t("Contact.phonenumber")}{" "}
                <span>( {t("Contact.optional")})</span>
              </label>

              <PhoneInput
                international
                className={
                  errors.PHONENUMBER ? "border  border-1 border-danger " : ""
                }
                value={phoneNumberValue}
                placeholder="Ex- +880 13* ** ***"
                {...register("PHONENUMBER", {
                  value: phoneNumberValue,
                })}
                onChange={setPhoneNumberValue}
              />
              {errors.PHONENUMBER && (
                <p
                  className="text-danger "
                  style={{ fontSize: "12px" }}
                  role="alert"
                >
                  {errors.PHONENUMBER.message}
                </p>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-inner mb-30">
              <label>{t("Contact.Email")}*</label>
              <input
                type="email"
                className={
                  errors.EMAIL ? "border  border-1 border-danger " : ""
                }
                placeholder={t("Contact.placeholders.email")}
                {...register("EMAIL", {
                  required: "Email is Required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: t("Contact.auth.email"),
                  },
                })}
              />
              {errors.EMAIL && (
                <p
                  className="text-danger "
                  style={{ fontSize: "12px" }}
                  role="alert"
                >
                  {errors.EMAIL.message}
                </p>
              )}
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-inner mb-30">
              <label> {t("Contact.subject")}*</label>
              <input
                className={
                  errors.SUBJECT ? "border  border-1 border-danger " : ""
                }
                type="text"
                placeholder={t("Contact.placeholders.subject")}
                {...register("SUBJECT", {
                  required: t("Contact.auth.subject"),
                })}
              />
              {errors.SUBJECT && (
                <p
                  className="text-danger "
                  style={{ fontSize: "12px" }}
                  role="alert"
                >
                  {errors.SUBJECT.message}
                </p>
              )}
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-inner mb-30">
              <label> {t("Contact.message")}*</label>
              <textarea
                className={
                  errors.MESSAGE ? "border  border-1 border-danger " : ""
                }
                placeholder={t("Contact.placeholders.message")}
                defaultValue={""}
                {...register("MESSAGE", {
                  required: t("Contact.auth.message"),
                })}
              />
              {errors.MESSAGE && (
                <p
                  className="text-danger "
                  style={{ fontSize: "12px" }}
                  role="alert"
                >
                  {errors.MESSAGE.message}
                </p>
              )}
            </div>
          </div>
          <div className="col-md-12">
            <div className="col-md-12">
              <div className="form-inner">
                <button
                  type="submit"
                  className="primary-btn3"
                  disabled={isLoading}
                >
                  {t("Contact.submit")}
                </button>
              </div>
            </div>
            <div className="mt-4">
              {thereError && <Alert variant={"danger"}>{thereError}</Alert>}
              {isSuccessful && (
                <Alert variant={"success"}>{t("Contact.send")}</Alert>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
