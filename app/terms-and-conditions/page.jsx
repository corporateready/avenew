"use client";
import React from 'react'
import styles from "./styles.module.scss"
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/navigation";

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
          <p className={styles.headLine__title}>Terms and Conditions</p>
          <p className={styles.description}>Welcome to AVENEW BOTANICA!</p>
          <p className={styles.description}>
            These terms and conditions outline the rules and regulations for the
            use of "AVENEW CAPITAL" S.R.L.'s Website, located at avenew.md.
          </p>
          <p className={styles.description}>
            By accessing this website we assume you accept these terms and
            conditions. Do not continue to use AVENEW BOTANICA if you do not
            agree to take all of the terms and conditions stated on this page.
          </p>
          <p className={styles.description}>
            The following terminology applies to these Terms and Conditions,
            Privacy Statement and Disclaimer Notice and all Agreements:
            "Client", "You" and "Your" refers to you, the person log on this
            website and compliant to the Company’s terms and conditions. "The
            Company", "Ourselves", "We", "Our" and "Us", refers to our Company.
            "Party", "Parties", or "Us", refers to both the Client and
            ourselves. All terms refer to the offer, acceptance and
            consideration of payment necessary to undertake the process of our
            assistance to the Client in the most appropriate manner for the
            express purpose of meeting the Client’s needs in respect of
            provision of the Company’s stated services, in accordance with and
            subject to, prevailing law of Netherlands. Any use of the above
            terminology or other words in the singular, plural, capitalization
            and/or he/she or they, are taken as interchangeable and therefore as
            referring to same.
          </p>
          <p className={styles.title}>Cookies</p>
          <p className={styles.description}>
            We employ the use of cookies. By accessing AVENEW BOTANICA, you
            agreed to use cookies in agreement with the "AVENEW CAPITAL" S.R.L.
            Privacy Policy.
          </p>{" "}
          <p className={styles.description}>
            Most interactive websites use cookies to let us retrieve the user’s
            details for each visit. Cookies are used by our website to enable
            the functionality of certain areas to make it easier for people
            visiting our website. Some of our affiliate/advertising partners may
            also use cookies.
          </p>
          <p className={styles.title}>License</p>
          <p className={styles.description}>
            Unless otherwise stated, "AVENEW CAPITAL" S.R.L. and/or its
            licensors own the intellectual property rights for all material on
            AVENEW BOTANICA. All intellectual property rights are reserved. You
            may access this from AVENEW BOTANICA for your own personal use
            subjected to restrictions set in these terms and conditions.
          </p>
          <p className={styles.description}>You must not:</p>
          <p className={styles.description}>
            Republish material from AVENEW BOTANICA. Sell, rent or sub-license
            material from AVENEW BOTANICA. Reproduce, duplicate or copy material
            from AVENEW BOTANICA. Redistribute content from AVENEW BOTANICA.
            Parts of this website offer an opportunity for users to post and
            exchange opinions and information in certain areas of the website.
            "AVENEW CAPITAL" S.R.L. does not filter, edit, publish or review
            Comments prior to their presence on the website. Comments do not
            reflect the views and opinions of "AVENEW CAPITAL" S.R.L.,its agents
            and/or affiliates. Comments reflect the views and opinions of the
            person who post their views and opinions. To the extent permitted by
            applicable laws, "AVENEW CAPITAL" S.R.L. shall not be liable for the
            Comments or for any liability, damages or expenses caused and/or
            suffered as a result of any use of and/or posting of and/or
            appearance of the Comments on this website.
          </p>{" "}
          <p className={styles.description}>
            "AVENEW CAPITAL" S.R.L. reserves the right to monitor all Comments
            and to remove any Comments which can be considered inappropriate,
            offensive or causes breach of these Terms and Conditions.
          </p>{" "}
          <p className={styles.description}>You warrant and represent that:</p>
          <p className={styles.description}>
            You are entitled to post the Comments on our website and have all
            necessary licenses and consents to do so; The Comments do not invade
            any intellectual property right, including without limitation
            copyright, patent or trademark of any third party; The Comments do
            not contain any defamatory, libelous, offensive, indecent or
            otherwise unlawful material which is an invasion of privacy The
            Comments will not be used to solicit or promote business or custom
            or present commercial activities or unlawful activity. You hereby
            grant "AVENEW CAPITAL" S.R.L. a non-exclusive license to use,
            reproduce, edit and authorize others to use, reproduce and edit any
            of your Comments in any and all forms, formats or media.
          </p>
          <p className={styles.title}>Hyperlinking to our Content</p>
          <p className={styles.description}>
            The following organizations may link to our Website without prior
            written approval:
          </p>
          <p className={styles.description}>
            Government agencies; Search engines; News organizations; Online
            directory distributors may link to our Website in the same manner as
            they hyperlink to the Websites of other listed businesses; and
            System wide Accredited Businesses except soliciting non-profit
            organizations, charity shopping malls, and charity fundraising
            groups which may not hyperlink to our Web site. These organizations
            may link to our home page, to publications or to other Website
            information so long as the link: (a) is not in any way deceptive;
            (b) does not falsely imply sponsorship, endorsement or approval of
            the linking party and its products and/or services; and (c) fits
            within the context of the linking party’s site. We may consider and
            approve other link requests from the following types of
            organizations: commonly-known consumer and/or business information
            sources; dot.com community sites; associations or other groups
            representing charities; online directory distributors; internet
            portals; accounting, law and consulting firms; and educational
            institutions and trade associations. We will approve link requests
            from these organizations if we decide that: (a) the link would not
            make us look unfavorably to ourselves or to our accredited
            businesses; (b) the organization does not have any negative records
            with us; (c) the benefit to us from the visibility of the hyperlink
            compensates the absence of "AVENEW CAPITAL" S.R.L. and (d) the link
            is in the context of general resource information. These
            organizations may link to our home page so long as the link: (a) is
            not in any way deceptive; (b) does not falsely imply sponsorship,
            endorsement or approval of the linking party and its products or
            services; and (c) fits within the context of the linking party’s
            site.
          </p>
          <p className={styles.description}>
            If you are one of the organizations listed in paragraph 2 above and
            are interested in linking to our website, you must inform us by
            sending an e-mail to "AVENEW CAPITAL" S.R.L. Please include your
            name, your organization name, contact information as well as the URL
            of your site, a list of any URLs from which you intend to link to
            our Website, and a list of the URLs on our site to which you would
            like to link. Wait 2-3 weeks for a response.
          </p>
          <p className={styles.description}>
            Approved organizations may hyperlink to our Website as follows:
          </p>{" "}
          <p className={styles.description}>
            By use of our corporate name; or By use of the uniform resource
            locator being linked to; or By use of any other description of our
            Website being linked to that makes sense within the context and
            format of content on the linking party’s site. No use of "AVENEW
            CAPITAL " S.R.L.'s logo or other artwork will be allowed for linking
            absent a trademark license agreement.
          </p>
          <p className={styles.title}>iFrames</p>
          <p className={styles.description}>
            Without prior approval and written permission, you may not create
            frames around our Webpages that alter in any way the visual
            presentation or appearance of our Website.
          </p>
          <p className={styles.title}>Content Liability</p>
          <p className={styles.description}>
            We shall not be hold responsible for any content that appears on
            your Website. You agree to protect and defend us against all claims
            that is rising on your Website. No link(s) should appear on any
            Website that may be interpreted as libelous, obscene or criminal, or
            which infringes, otherwise violates, or advocates the infringement
            or other violation of, any third party rights.
          </p>
          <p className={styles.title}>Your Privacy</p>
          <p className={styles.description}>Please read Privacy Policy</p>
          <p className={styles.title}>Reservation of Rights</p>
          <p className={styles.description}>
            We reserve the right to request that you remove all links or any
            particular link to our Website. You approve to immediately remove
            all links to our Website upon request. We also reserve the right to
            amen these terms and conditions and it’s linking policy at any time.
            By continuously linking to our Website, you agree to be bound to and
            follow these linking terms and conditions.
          </p>
          <p className={styles.title}>Removal of links from our website</p>
          <p className={styles.description}>
            If you find any link on our Website that is offensive for any
            reason, you are free to contact and inform us any moment. We will
            consider requests to remove links but we are not obligated to or so
            or to respond to you directly.
          </p>
          <p className={styles.description}>
            We do not ensure that the information on this website is correct, we
            do not warrant its completeness or accuracy; nor do we promise to
            ensure that the website remains available or that the material on
            the website is kept up to date.
          </p>
          <p className={styles.title}>Disclaimer</p>
          <p className={styles.description}>
            To the maximum extent permitted by applicable law, we exclude all
            representations, warranties and conditions relating to our website
            and the use of this website. Nothing in this disclaimer will:
          </p>
          <p className={styles.description}>
            {" "}
            limit or exclude our or your liability for death or personal injury;
            limit or exclude our or your liability for fraud or fraudulent
            misrepresentation; limit any of our or your liabilities in any way
            that is not permitted under applicable law; or exclude any of our or
            your liabilities that may not be excluded under applicable law. The
            limitations and prohibitions of liability set in this Section and
            elsewhere in this disclaimer: (a) are subject to the preceding
            paragraph; and (b) govern all liabilities arising under the
            disclaimer, including liabilities arising in contract, in tort and
            for breach of statutory duty.
          </p>
          <p className={styles.description}>
            As long as the website and the information and services on the
            website are provided free of charge, we will not be liable for any
            loss or damage of any nature.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page