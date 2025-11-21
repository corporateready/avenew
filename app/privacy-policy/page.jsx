"use client"
import React from 'react'
import styles from "./styles.module.scss"
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.back();
  };
  return (
    <div className={styles.terms}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.header__content}>
            <div onClick={handleLogoClick} className="hover:cursor-pointer">
              <Image
                src="/Avenew-botanica-transparent.png"
                width={120}
                height={40}
                alt="Botanica Avenew gray logo"
                className={styles.logo}
                style={{ width: "auto", height: "auto" }}
              />
            </div>

            <Link href={"tel:+37376039073"} className={styles.phone}>
              <span>+373 76 039 073</span>
              <svg
                width="26"
                height="26"
                className="inline-block sm:hidden"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.3135 18.529C24.3115 18.527 24.3159 18.5311 24.3135 18.529ZM21.7465 16.1459C21.9748 16.3574 22.2202 16.5848 22.4657 16.8125L21.7465 16.1459Z"
                  fill="black"
                />
                <path
                  d="M4.78698 0.0078019C5.45366 -0.043413 6.12179 0.154448 6.72545 0.692372L6.84557 0.804677L6.85729 0.815419L6.86706 0.827138L10.2167 4.55663L10.2284 4.5703L10.2391 4.58397C10.5408 4.97192 10.8335 5.60722 10.8358 6.35253C10.8381 7.11916 10.5325 7.96083 9.70006 8.72167C9.67866 8.74072 9.65312 8.76076 9.62472 8.78304C9.50678 8.87557 9.33955 9.00678 9.21471 9.26659C9.07785 9.55145 8.97485 10.0565 9.35143 10.8906C10.1634 12.2245 11.5913 13.9229 13.0262 15.0029C13.7522 15.5493 14.4359 15.9035 15.0106 16.0058C15.5512 16.102 15.9737 15.9776 16.3085 15.5664C16.8159 14.9571 17.5458 14.5615 18.3378 14.4678C19.1296 14.3741 19.9291 14.5845 20.5682 15.0566L20.5995 15.0801L20.6258 15.1064C20.6258 15.1064 20.8438 15.3091 21.1971 15.6367L21.7465 16.1459L22.4657 16.8125L22.7361 17.0632C23.1021 17.4026 23.4541 17.7289 23.7323 17.9873C23.8862 18.1302 24.0181 18.253 24.1173 18.3455L24.1532 18.3789C24.1975 18.4202 24.2353 18.4556 24.2628 18.4813L24.2733 18.4912L24.3135 18.529L24.3387 18.5537L24.4491 18.6758C24.9797 19.2899 25.1612 19.9594 25.0809 20.6221C24.9986 21.3012 24.6482 21.9222 24.245 22.4355C23.4416 23.4582 22.2919 24.2251 21.9237 24.4189C20.5235 25.265 18.8604 25.2383 17.2245 24.79C15.5749 24.3381 13.882 23.4403 12.3622 22.4512C10.838 21.4592 9.46341 20.3596 8.44909 19.4824C7.49643 18.6585 6.83694 18.0079 6.67174 17.8232L6.65768 17.8085C6.27752 17.4111 4.03018 15.0615 2.25573 12.1836C1.35754 10.7269 0.563296 9.1075 0.20397 7.51854C-0.155919 5.92685 -0.0896454 4.31308 0.810416 2.93651C1.04699 2.54631 1.86568 1.47569 2.91979 0.746083C3.45869 0.373096 4.10018 0.0605765 4.78698 0.0078019ZM4.85436 1.87011C4.44505 1.91577 3.93784 2.24133 3.43737 2.71386C2.95566 3.16872 2.56231 3.68131 2.38366 3.95214C1.77893 4.888 1.74283 6.09119 2.11608 7.45897C2.48894 8.82522 3.25103 10.2793 4.12487 11.6289C5.86943 14.3233 7.9879 16.4953 8.04672 16.5556C8.32479 16.8318 10.5602 19.0219 13.2684 20.8262C14.6324 21.7348 16.0912 22.5278 17.4618 22.9385C18.8379 23.3508 20.0465 23.3547 20.9891 22.8047C21.2738 22.6383 21.8131 22.271 22.2958 21.8154C22.7987 21.3407 23.1427 20.8604 23.203 20.4736C23.219 20.3605 23.2079 20.2454 23.1708 20.1367C23.1335 20.0275 23.0707 19.9275 22.9862 19.8447L19.3798 16.4971C19.3356 16.466 19.1485 16.3434 18.8837 16.3086C18.6196 16.2739 18.2207 16.316 17.745 16.7627C17.1057 17.5607 15.4879 18.4797 13.286 17.3848L13.2714 17.3779L13.2567 17.3691C11.6149 16.4112 10.1786 15.1487 9.02917 13.6514C8.52817 13.0591 8.07963 12.4246 7.68932 11.7568L7.6776 11.7383L7.66881 11.7187C7.14119 10.6002 7.1245 9.63039 7.36901 8.85839C7.59903 8.13228 8.05033 7.61233 8.45788 7.32226C8.92987 6.87593 8.98339 6.49704 8.9569 6.24706C8.92988 5.99256 8.81186 5.80296 8.77331 5.74706L5.49303 2.09374C5.4133 2.01407 5.31566 1.9521 5.2069 1.91308C5.09467 1.87287 4.97365 1.85747 4.85436 1.87011Z"
                  fill="black"
                />
              </svg>
            </Link>
          </div>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.terms__content}>
          <p className={styles.headLine__title}>
            Privacy Policy for "AVENEW CAPITAL" S.R.L.
          </p>
          <p className={styles.description}>
            At AVENEW Botanica, accessible from avenew.md, one of our main
            priorities is the privacy of our visitors. This Privacy Policy
            document contains types of information that is collected and
            recorded by AVENEW Botanica and how we use it. If you have
            additional questions or require more information about our Privacy
            Policy, do not hesitate to contact us. This Privacy Policy applies
            only to our online activities and is valid for visitors to our
            website with regards to the information that they shared and/or
            collect in AVENEW Botanica. This policy is not applicable to any
            information collected offline or via channels other than this
            website.
          </p>
          <p className={styles.title}>Consent</p>
          <p className={styles.description}>
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </p>{" "}
          <p className={styles.title}>Information we collect</p>
          <p className={styles.description}>
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information. If you
            contact us directly, we may receive additional information about you
            such as your name, email address, phone number, the contents of the
            message and/or attachments you may send us, and any other
            information you may choose to provide. When you register for an
            Account, we may ask for your contact information, including items
            such as name, company name, address, email address, and telephone
            number.
          </p>
          <p className={styles.title}>How we use your information</p>
          <p className={styles.description}>
            We use the information we collect in various ways, including to:
            Provide, operate, and maintain our website Improve, personalize, and
            expand our website Understand and analyze how you use our website
            Develop new products, services, features, and functionality
            Communicate with you, either directly or through one of our
            partners, including for customer service, to provide you with
            updates and other information relating to the website, and for
            marketing and promotional purposes Send you emails Find and prevent
            fraud By contacting the official representatives of AVENEW Botanica
            through the official page on Facebook or Instagram, by calling the
            phone number indicated on the official website of the project, or by
            leaving a request on the website, including using other official
            communication channels of the company, namely: WhatsApp, Viber,
            Telegram and e-mail, you automatically consent to the processing of
            your contact data (phone number) in advertising campaigns and
            receiving SMS mailings.
          </p>
          <p className={styles.title}>Log Files</p>
          <p className={styles.description}>
            AVENEW Botanica follows a standard procedure of using log files.
            These files log visitors when they visit websites. All hosting
            companies do this and a part of hosting services' analytics. The
            information collected by log files include internet protocol (IP)
            addresses, browser type, Internet Service Provider (ISP), date and
            time stamp, referring/exit pages, and possibly the number of clicks.
            These are not linked to any information that is personally
            identifiable. The purpose of the information is for analyzing
            trends, administering the site, tracking users' movement on the
            website, and gathering demographic information.
          </p>
          <p className={styles.title}>Cookies and Web Beacons</p>
          <p className={styles.description}>
            Like any other website, AVENEW Botanica uses 'cookies'. These
            cookies are used to store information including visitors'
            preferences, and the pages on the website that the visitor accessed
            or visited. The information is used to optimize the users'
            experience by customizing our web page content based on visitors'
            browser type and/or other information.
          </p>
          <p className={styles.title}>Advertising Partners Privacy Policies</p>
          <p className={styles.description}>
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of AVENEW Botanica. Third-party ad servers or
            ad networks uses technologies like cookies, JavaScript, or Web
            Beacons that are used in their respective advertisements and links
            that appear on AVENEW Botanica, which are sent directly to users'
            browser. They automatically receive your IP address when this
            occurs. These technologies are used to measure the effectiveness of
            their advertising campaigns and/or to personalize the advertising
            content that you see on websites that you visit. Note that AVENEW
            Botanica has no access to or control over these cookies that are
            used by third-party advertisers.
          </p>
          <p className={styles.title}>Third Party Privacy Policies</p>
          <p className={styles.description}>
            AVENEW Botanica Privacy Policy does not apply to other advertisers
            or websites. Thus, we are advising you to consult the respective
            Privacy Policies of these third-party ad servers for more detailed
            information. It may include their practices and instructions about
            how to opt-out of certain options. You can choose to disable cookies
            through your individual browser options. To know more detailed
            information about cookie management with specific web browsers, it
            can be found at the browsers' respective websites.
          </p>
          <p className={styles.title}>
            CCPA Privacy Rights (Do Not Sell My Personal Information)
          </p>
          <p className={styles.description}>
            Under the CCPA, among other rights, California consumers have the
            right to: Request that a business that collects a consumer's
            personal data disclose the categories and specific pieces of
            personal data that a business has collected about consumers. Request
            that a business delete any personal data about the consumer that a
            business has collected. Request that a business that sells a
            consumer's personal data, not sell the consumer's personal data. If
            you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </p>
          <p className={styles.title}>GDPR Data Protection Rights</p>
          <p className={styles.description}>
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following: The
            right to access – You have the right to request copies of your
            personal data. We may charge you a small fee for this service. The
            right to rectification – You have the right to request that we
            correct any information you believe is inaccurate. You also have the
            right to request that we complete the information you believe is
            incomplete. The right to erasure – You have the right to request
            that we erase your personal data, under certain conditions. The
            right to restrict processing – You have the right to request that we
            restrict the processing of your personal data, under certain
            conditions. The right to object to processing – You have the right
            to object to our processing of your personal data, under certain
            conditions. The right to data portability – You have the right to
            request that we transfer the data that we have collected to another
            organization, or directly to you, under certain conditions. If you
            make a request, we have one month to respond to you. If you would
            like to exercise any of these rights, please contact us.
          </p>
          <p className={styles.title}>Children's Information</p>
          <p className={styles.description}>
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
            AVENEW Botanica does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page