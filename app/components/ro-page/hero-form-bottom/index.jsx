import React from "react";
import { motion } from "motion/react";
import styles from "./hero-form.module.scss";
import FormButton from "./form-button";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/navigation";

const Index = ({ handleToggleModalBottom  }) => {
  const router = useRouter();
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

  const handleChangePhone = (value) => {
    let cleanedValue = value.replace(/^\+0+/, "+3730");
    cleanedValue = cleanedValue.replace(/^\+3730/, "+373");

     setPhone(cleanedValue);
  };

  console.log(name, email, phone);

  const formSubmitTrack = () => {
    router.push("/thank-you-ro");
    // handleToggleModalBottom();
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
      onClick={handleToggleModalBottom}
    >
      <div className={styles.form__wrapper}>
        <button
          className="w-[22rem] h-[22rem] sm:w-[24rem] sm:h-[24rem] absolute right-[-6rem] top-[-32rem] sm:top-[-36rem] sm:right-[-4rem] -translate-x-1/2 z-[5] sm:hover:cursor-pointer"
          onClick={handleToggleModalBottom}
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
            <span className="text-[8rem] text-white font-semibold absolute top-1/2 left-[47%] -translate-x-1/2 -translate-y-1/2 z-10">
              50%
            </span>
          </div>
          <p className={styles.hero__form_title}>
            Introdu datele tale de contact
            <br /> pentru a primi detalii
          </p>
          <form action="" className={styles.hero__form_content}>
            <input
              type="text"
              name="name"
              placeholder="Nume, Prenume"
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
                // className="text-[20rem] placeholder:text-[27rem]"
                isValid={(value, country) => {
                  if (value.match(/3730/)) {
                    setPhoneValue("+373");
                  } else {
                    return true;
                  }
                }}
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
                    isMobile ? "43rem" : "50rem"
                  }`,
                  "--react-international-phone-dropdown-item-background-color":
                    "#060916",
                  "--react-international-phone-dropdown-top": "60rem",
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
          <motion.span
            className={styles.button__sparkle_1}
            // initial={{ scale: 1 }}
            // animate={{ scale: [1, 1.5, 1] }}
            // exit={{ scale: 1 }}
            // transition={{
            //   duration: 1,
            //   repeat: Infinity,
            //   repeatType: "reverse",
            // }}
          ></motion.span>
          <motion.span
            className={styles.button__sparkle_2}
            // initial={{ scale: 1 }}
            // animate={{ scale: [1, 1.5, 1] }}
            // exit={{ scale: 1 }}
            // transition={{
            //   duration: 1,
            //   delay: 0.5,
            //   repeat: Infinity,
            //   repeatType: "reverse",
            // }}
          ></motion.span>
          <motion.span
            // initial={{ scale: 1 }}
            // animate={{ scale: [1, 1.5, 1] }}
            // exit={{ scale: 1 }}
            // transition={{
            //   duration: 1,
            //   delay: 1,
            //   repeat: Infinity,
            //   repeatType: "reverse",
            // }}
            className={styles.button__sparkle_3}
          ></motion.span>
          <motion.span
            // initial={{ scale: 1 }}
            // animate={{ scale: [1, 1.5, 1] }}
            // exit={{ scale: 1 }}
            // transition={{
            //   duration: 0.5,
            //   delay: 1.5,
            //   repeat: Infinity,
            //   repeatType: "reverse",
            // }}
            className={styles.button__sparkle_4}
          ></motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Index;
