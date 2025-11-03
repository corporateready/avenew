import React from "react";
import { motion } from "motion/react";
import styles from "./hero-form.module.scss";
import FormButton from "./form-button";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useMediaQuery } from "react-responsive";

const Index = ({ handleToggleModal }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePhone = (phone) => {
    setPhone(phone);
  };

  console.log(name, email, phone);

  const formSubmitTrack = () => {
    handleToggleModal();
    // analytics?.identify("form_submitted", {
    //   form_name: "descarca_prezentare_pdf_ro",
    //   form_type: "click_form",
    //   form_location: "hero",
    //   element_location: "bottom_form",
    //   element_type: "button",
    //   element_text: "trimite",
    //   action_type: "click",
    //   name: nameValue,
    //   phone: phoneValue,
    //   email: emailValue,
    //   location: userLocation,
    //   domain_source: "artima.md",
    // });

    // analytics?.track("form_submitted", {
    //   form_name: "descarca_prezentare_pdf_ro",
    //   form_type: "click_form",
    //   form_location: "hero",
    //   element_location: "bottom_form",
    //   element_type: "button",
    //   element_text: "trimite",
    //   action_type: "click",
    //   name: nameValue,
    //   phone: phoneValue,
    //   email: emailValue,
    //   location: userLocation,
    //   domain_source: "artima.md",
    //   fbp: isFBP,
    //   fbc: isFBC,
    //   eventID: isEventId,
    //   pageview_event_id: isPageViewEventId,
    //   external_id: isExternalId,
    // }
    // );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={styles.hero__form}
      onClick={handleToggleModal}
    >
      <div className={styles.form__wrapper}>
        <button
          className="w-[22rem] h-[22rem] sm:w-[24rem] sm:h-[24rem] absolute right-[-6rem] top-[-32rem] sm:top-[-36rem] sm:right-[-4rem] -translate-x-1/2 z-[5] sm:hover:cursor-pointer"
          onClick={handleToggleModal}
        >
          <svg
            className="w-full h-full absolute top-0 left-0"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 1L1 17M1 1L17 17"
              stroke="#494B54"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={styles.hero__form_inner}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.hero__form_progress__wrapper}>
            <span className={styles.hero__form_progress__wrapper__line}></span>
            <span className="text-[6rem] text-white font-semibold absolute top-1/2  left-[48%] -translate-x-1/2 -translate-y-1/2 z-10">
              50%
            </span>
          </div>
          <p className={styles.hero__form_title}>
            Enter your contact details {""}
            <br className="block" /> to receive more information
          </p>
          <form action="" className={styles.hero__form_content}>
            <input
              type="text"
              name="name"
              placeholder="Name, Surname"
              value={name}
              onChange={handleChangeName}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChangeEmail}
            />
            <div className={styles.phone__input}>
              <PhoneInput
                name="phone"
                // inputProps={{
                //   id: "phone",
                //   name: "phone",
                // }}
                defaultCountry="md"
                style={{
                  "--react-international-phone-flag-width": "40rem",
                  "--react-international-phone-flag-height": "20rem",
                  "--react-international-phone-background-color": "none",
                  "--react-international-phone-text-color": "#B5B5B5",
                  "--react-international-phone-border-color": "#494B54",
                  "--react-international-phone-border-radius": "7rem",
                  "--react-international-phone-width": "100%",
                  "--react-international-phone-height": `${
                    isMobile ? "45rem" : "50rem"
                  }`,
                  "--react-international-phone-dropdown-item-background-color":
                    "#060916",
                  "--react-international-phone-dropdown-top": isMobile
                    ? "45rem"
                    : "55rem",
                  "--react-international-phone-font-size": `${
                    isMobile ? "13rem" : "17rem"
                  }`,
                }}
                value={phone}
                onChange={handleChangePhone}
              />
            </div>
            <FormButton formSubmitTrack={formSubmitTrack} />
          </form>
          <span className={styles.button__sparkle_1}></span>
          <span className={styles.button__sparkle_2}></span>
          <span className={styles.button__sparkle_3}></span>
          <span className={styles.button__sparkle_4}></span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Index;
