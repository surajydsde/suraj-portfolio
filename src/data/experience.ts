export interface ExperienceEntry {
  id: string
  period: string
  role: string
  company: string
  description: string
}

export const experience: ExperienceEntry[] = [
  {
    id: 'tcs',
    period: 'Jul 2025 – Present',
    role: 'Frontend Engineer',
    company: 'Tata Consultancy Services (TCS)',
    description:
      'Architecting frontend applications from scratch with React.js, integrating REST APIs, MFA/RBAC auth, and CI/CD pipelines onto Nginx. Received "Star of the Month" for delivery.',
  },
  {
    id: 'eclerx',
    period: 'Nov 2022 – Jul 2025',
    role: 'Associate Process Manager — React JS Developer',
    company: 'eClerx Services Ltd',
    description:
      'Built React.js applications and landing pages for a global payments organization; reusable components cut future dev effort by ~50%. Mentored 10+ engineers and shipped a Chrome extension that cut manual testing by ~40%.',
  },
  {
    id: 'cloudesign',
    period: 'Sep 2020 – Nov 2022',
    role: 'SDE — React JS / Full Stack Developer',
    company: 'Cloudesign Technology Solutions',
    description:
      'Built and deployed full-stack applications using React.js and AWS (EC2, S3, RDS), including Nginx and SSL configuration for production infrastructure.',
  },
  {
    id: 'sanda',
    period: 'Aug 2019 – Feb 2020',
    role: 'Software Developer',
    company: 'Sanda Office Management Services Ltd',
    description:
      'Developed responsive websites and e-commerce storefronts with WooCommerce and secure payment gateway integrations.',
  },
  {
    id: 'webeaters',
    period: 'Apr 2019 – Aug 2019',
    role: 'Frontend Developer',
    company: 'Webeaters Technologies Pvt Ltd',
    description:
      'Translated Figma designs into responsive web applications using HTML, CSS, JavaScript, and PHP.',
  },
  {
    id: 'os-infosolutions',
    period: 'Jan 2018 – Apr 2019',
    role: 'PHP Developer',
    company: 'OS Infosolutions Private Limited',
    description:
      'Developed dynamic web applications with PHP and MySQL, designed email templates, and integrated Amazon SES.',
  },
]
