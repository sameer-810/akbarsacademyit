// legalContent.js - Privacy Policy and Terms & Conditions text rendered by LegalPage.
// Each section has a heading, optional paragraphs and optional bullet points.

const LAST_UPDATED = '1 November 2026';
const INSTITUTE = "Akbar's Academy I.T. Institute";
const EMAIL = 'info@akbarsacademy.com';
const ADDRESS = 'G/A-4/6, Cheeta Camp, Mumbai, Maharashtra, India';
const PHONE = '+91 97690 73820';

export const privacyPolicy = {
  slug: 'privacy-policy',
  title: 'Privacy Policy',
  lastUpdated: LAST_UPDATED,
  intro: `${INSTITUTE} ("we", "us", "our") respects your privacy. This policy explains what personal information we collect through this website, how we use it, who we share it with, and the choices you have. By using this website or submitting an enquiry, you agree to this policy.`,
  sections: [
    {
      heading: '1. Information we collect',
      paragraphs: ['We collect the following information when you use this website:'],
      bullets: [
        'Enquiry and admission form: your full name, phone number, email address, the course you are interested in, and any message you write.',
        'WhatsApp and phone contact: when you contact us on WhatsApp or by phone, we receive your number, your name as shown on WhatsApp, and the content of your messages.',
        'Usage data: pages visited, approximate location, device and browser type, and referring website, collected through Google Analytics cookies (see section 5).'
      ]
    },
    {
      heading: '2. How we use your information',
      bullets: [
        'To respond to your enquiry and provide course counselling.',
        'To process your admission and maintain your enrollment record.',
        'To contact you about batch timings, fees, course updates and offers from the institute.',
        'To understand how visitors use our website so we can improve it.',
        'To comply with legal obligations and resolve disputes.'
      ]
    },
    {
      heading: '3. Where your information is stored',
      paragraphs: [
        'Enquiry form submissions are saved in a private Google Sheet owned by the institute and accessible only to authorised staff. WhatsApp conversations are stored on the institute\'s WhatsApp account. We keep enquiry data for as long as needed to follow up with you and, if you enroll, for the duration of your course and the period required by applicable law.'
      ]
    },
    {
      heading: '4. Sharing of information',
      paragraphs: ['We do not sell or rent your personal information. We share it only with:'],
      bullets: [
        'Service providers that help us run the website and manage enquiries, such as Google (Google Sheets, Google Analytics, Google Maps) and WhatsApp (Meta). These providers process data under their own privacy policies.',
        'Certification or examination bodies, where required to issue your certificate.',
        'Government authorities or courts, where required by law.'
      ]
    },
    {
      heading: '5. Cookies and analytics',
      paragraphs: [
        'This website uses Google Analytics, which sets cookies to measure how visitors use the site. The data is aggregated and does not directly identify you. The embedded Google Map may also set cookies controlled by Google. You can block or delete cookies through your browser settings; the website will still work without them.'
      ]
    },
    {
      heading: '6. Your rights',
      paragraphs: ['Under the Digital Personal Data Protection Act, 2023 and other applicable Indian law, you may:'],
      bullets: [
        'Ask what personal information we hold about you.',
        'Ask us to correct or update inaccurate information.',
        'Ask us to delete your information, unless we are required to keep it.',
        'Withdraw consent to marketing messages at any time by replying "STOP" on WhatsApp or emailing us.'
      ],
      after: `To exercise any of these rights, contact us at ${EMAIL} or ${PHONE}.`
    },
    {
      heading: '7. Security',
      paragraphs: [
        'We take reasonable technical and organisational steps to protect your information, including restricting access to enrollment records to authorised staff. No method of transmission over the internet is completely secure, so we cannot guarantee absolute security.'
      ]
    },
    {
      heading: "8. Children's privacy",
      paragraphs: [
        'Our courses are intended for learners aged 16 and above. If you are under 18, please submit an enquiry only with the consent of a parent or guardian. If we learn that we have collected information from a child without such consent, we will delete it.'
      ]
    },
    {
      heading: '9. Changes to this policy',
      paragraphs: [
        'We may update this policy from time to time. The latest version will always be published on this page with the "last updated" date shown above.'
      ]
    },
    {
      heading: '10. Contact us',
      paragraphs: [`${INSTITUTE}`, ADDRESS, `Phone / WhatsApp: ${PHONE}`, `Email: ${EMAIL}`]
    }
  ]
};

export const termsAndConditions = {
  slug: 'terms-and-conditions',
  title: 'Terms & Conditions',
  lastUpdated: LAST_UPDATED,
  intro: `These Terms & Conditions govern your use of this website and your enrollment in any course offered by ${INSTITUTE}. By submitting an enquiry, paying a fee, or attending a class, you agree to these terms. Please read them carefully.`,
  sections: [
    {
      heading: '1. Enrollment and eligibility',
      bullets: [
        'An enquiry submitted through this website is not an admission. Admission is confirmed only after counselling, submission of the required documents and payment of the fee.',
        'Learners must be at least 16 years of age. Learners under 18 require the consent of a parent or guardian.',
        'The institute may refuse or cancel admission if the information provided is false or incomplete.'
      ]
    },
    {
      heading: '2. Fees and payment',
      bullets: [
        'Course fees are listed on this website and in the course brochures. Fees may change without notice, but the fee agreed at the time of admission will apply to you.',
        'Fees may be paid in cash, by bank transfer, or through an installment plan agreed in writing at the time of admission.',
        'Installments must be paid on the agreed dates. The institute may suspend access to classes, exams or certificates until overdue amounts are paid.',
        'A receipt will be issued for every payment. Please keep your receipts for your records.'
      ]
    },
    {
      heading: '3. Refunds and cancellation',
      bullets: [
        'If you withdraw within 7 days of your first class and are not satisfied with the course, you may request a refund of the fee paid, less any registration or material charges stated at admission.',
        'No refund is payable after this 7-day period, including for non-attendance, change of personal circumstances, or discontinuation.',
        'If the institute cancels a batch and cannot offer you an alternative batch, you will receive a full refund of the fee paid for that course.',
        'Refunds are processed to the original payment method within 15 working days of approval.'
      ]
    },
    {
      heading: '4. Batches, schedule and attendance',
      bullets: [
        'Batch timings and duration are set by the institute and may be adjusted with reasonable notice.',
        'Regular attendance is expected. Learners who miss sessions may be asked to join a later batch, subject to availability.',
        'The institute may reschedule classes due to public holidays, faculty unavailability or circumstances beyond its control.'
      ]
    },
    {
      heading: '5. Certification',
      bullets: [
        'A course completion certificate is issued only to learners who complete the course, submit the practical project, and clear all fee dues.',
        'Certificates for externally administered programmes (such as vendor or government certifications) are issued by the respective body under its own rules and timelines.',
        'The institute does not guarantee employment. Placement assistance, where offered, means sharing job openings, CV guidance and interview preparation.'
      ]
    },
    {
      heading: '6. Course materials and intellectual property',
      bullets: [
        'All course content, brochures, notes, recordings and software provided by the institute are its property or licensed to it.',
        'Materials are for your personal learning only. You may not copy, share, sell, record or publish them without written permission.',
        'Projects you build during the course belong to you, but the institute may showcase them, with your name, as examples of student work unless you object in writing.'
      ]
    },
    {
      heading: '7. Code of conduct',
      bullets: [
        'Treat faculty, staff and fellow learners with respect. Harassment, discrimination or disruptive behaviour will not be tolerated.',
        'Use the institute\'s computers, networks and lab environments only for course work. Security testing taught in any course must be practised only on authorised lab systems.',
        'Damage to institute property caused by negligence or misuse will be charged to the learner.',
        'The institute may suspend or expel a learner for serious or repeated breaches of this code, without refund.'
      ]
    },
    {
      heading: '8. Use of this website',
      bullets: [
        'The content on this website is for general information about our courses. We try to keep it accurate but do not guarantee that it is complete or error-free.',
        'You must not use this website to submit false information, send spam, or attempt to interfere with its operation.',
        'Links to third-party websites (such as Google Maps or WhatsApp) are provided for convenience. We are not responsible for their content or practices.'
      ]
    },
    {
      heading: '9. Limitation of liability',
      paragraphs: [
        'To the extent permitted by law, the institute is not liable for any indirect or consequential loss, loss of earnings, or loss of data arising from your use of this website or enrollment in a course. Our total liability to you for any claim is limited to the fee you have paid for the course concerned.'
      ]
    },
    {
      heading: '10. Governing law and disputes',
      paragraphs: [
        'These terms are governed by the laws of India. Any dispute will be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra. We encourage you to raise any concern with us first so we can try to resolve it directly.'
      ]
    },
    {
      heading: '11. Changes to these terms',
      paragraphs: [
        'We may update these terms from time to time. Changes apply from the date they are published on this page and do not affect fees already agreed at admission.'
      ]
    },
    {
      heading: '12. Contact us',
      paragraphs: [`${INSTITUTE}`, ADDRESS, `Phone / WhatsApp: ${PHONE}`, `Email: ${EMAIL}`]
    }
  ]
};

export const legalPages = {
  [privacyPolicy.slug]: privacyPolicy,
  [termsAndConditions.slug]: termsAndConditions
};
