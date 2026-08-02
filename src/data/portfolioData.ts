import {
  EducationItem,
  WorkExperience,
  InternshipExperience,
  ProjectExperience,
  CertificationItem,
  SocialLink,
} from '../types';

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'PSG Sarvajana Higher Secondary School',
    period: '2021 - 2023',
    score: '96%',
  },
  {
    institution: 'Kongunadu Arts and Science College',
    period: '2023 - 2026',
    score: 'CGPA - 9.2',
  },
];

export const WORK_DATA: WorkExperience = {
  id: 'work-1',
  title: 'AI Agent Evaluator',
  company: 'Scaler AI Labs',
  type: '(Remote / Freelance)',
  period: 'Dec 2025 - Present',
  overview:
    'Evaluated AI agents across multiple enterprise software ecosystems to assess workflow accuracy, tool usage, and task completion quality.',
  highlights: [
    'Successfully completed 250+ evaluation tasks.',
    'Worked across 30+ enterprise applications.',
    'Evaluated AI workflows involving productivity, CRM, ITSM and collaboration tools.',
    'Improved understanding of enterprise software integrations and AI-assisted workflows.',
  ],
  platforms: [
    'Google Workspace',
    'Microsoft 365',
    'Jira',
    'ServiceNow',
    'Snowflake',
    'Salesforce',
    'Zendesk',
    'Shopify',
    'Ramp',
    'Sentry',
  ],
};

export const INTERNSHIP_DATA: InternshipExperience[] = [
  {
    id: 'internship-1',
    title: 'Sentiment & Thematic Analysis of Google Maps Reviews',
    company: 'Rashmivat Edutech',
    type: '(Internship)',
    period: 'Nov 2025 - Feb 2026',
    overview:
      'Built an end-to-end AI-powered analytics pipeline that transforms Google Maps reviews into actionable business insights.',
    responsibilities: [
      {
        category: 'Data Pipeline',
        detail:
          'Automated review collection using n8n and Apify. Stored data in Google Sheets.',
      },
      {
        category: 'AI Processing',
        detail:
          'Performed sentiment analysis using RoBERTa. Generated thematic insights using Gemini. Classified reviewer gender using a custom fine-tuned LLaMA 3 model.',
      },
      {
        category: 'Analytics',
        detail:
          'Designed a Star Schema data model. Built an executive Power BI dashboard with KPI cards, demographic analysis and sentiment trends.',
      },
    ],
    techStack: [
      'Power BI',
      'n8n',
      'Apify',
      'Google Sheets',
      'Python',
      'RoBERTa',
      'Gemini',
      'LLaMA 3',
    ],
    githubUrl:
      'https://github.com/SHIVASHANKAR-V07/Sentiment-and-Thematic-Analysis-of-Google-Maps-Reviews',
  },
  {
    id: 'internship-2',
    title: 'E-Commerce Website',
    company: 'Acculer Media Technology',
    type: '(Internship)',
    period: 'May 2025 - Jun 2025',
    overview:
      'Developed a responsive e-commerce website for the fictional clothing brand LOOKER using a full-stack Python architecture.',
    responsibilities: [
      {
        detail:
          'Designed responsive user interfaces with HTML, CSS and JavaScript.',
      },
      {
        detail:
          'Developed backend functionalities using Flask and user data with SQLite.',
      },
      {
        detail:
          'Maintained source control with Git & GitHub and deployed the application using Render.',
      },
    ],
    techStack: [
      'HTML',
      'CSS',
      'JavaScript',
      'Python',
      'Flask',
      'SQLite',
      'Git',
      'GitHub',
      'VS Code',
      'Render',
    ],
    githubUrl: 'https://github.com/SHIVASHANKAR-V07/Looker',
    liveUrl: 'https://looker-tv1a.onrender.com/',
  },
];

export const PROJECT_DATA: ProjectExperience[] = [
  {
    id: 'project-1',
    title: 'LLaMA 3 Fine-Tuned Gender Classifier',
    type: '(Personal Project)',
    brief:
      "Fine-tuned Meta's LLaMA 3 (8B) model to classify Indian names by gender and published both the model and dataset on Hugging Face.",
    highlights: [
      'Fine-tuned using Unsloth and Transformers.',
      'Prepared dataset from Kaggle with Gemini.',
      'Optimized training on Google Colab Free GPU.',
      'Published model and dataset on Hugging Face.',
    ],
    techStack: [
      'Python',
      'LLaMA 3',
      'Unsloth',
      'Transformers',
      'Google Colab',
      'Kaggle',
      'Gemini',
      'Hugging Face',
    ],
    githubUrl:
      'https://github.com/SHIVASHANKAR-V07/Llama_3_Indian_Gender_Classifier',
    huggingFaceUrl:
      'https://huggingface.co/shisha-07/Llama-3-Indian-Gender-Classifier',
  },
  {
    id: 'project-2',
    title: 'NSE Option Chain Scraper',
    type: '(Personal Project)',
    brief:
      'Designed an automated workflow to scrape NSE Option Chain data every 15 minutes and maintain historical profit/loss records.',
    highlights: [
      'Automated scheduled data collection.',
      'Integrated Google Sheets as a lightweight database.',
      'Implemented Cron Jobs and GitHub Actions.',
      'Used GCP Service Account authentication.',
    ],
    techStack: [
      'Python',
      'Google Sheets',
      'Cron Jobs',
      'GitHub Actions',
      'GCP',
      'Git',
    ],
    githubUrl: 'https://github.com/SHIVASHANKAR-V07/NSE-Option_Chain',
  },
  {
    id: 'project-3',
    title: 'SQL for Data Job Analysis',
    type: '(Self-Learning)',
    brief:
      'Performed an end-to-end SQL analysis on the 2023 Data Analyst job market dataset to uncover salary trends and in-demand skills.',
    highlights: [
      'Wrote advanced SQL queries using PostgreSQL.',
      'Identified top-paying jobs and required skills.',
      'Analyzed demand, salary trends and optimal skill combinations.',
    ],
    techStack: [
      'SQL',
      'PostgreSQL',
      'pgAdmin 4',
      'Git',
      'GitHub',
      'VS Code',
    ],
    githubUrl:
      'https://github.com/SHIVASHANKAR-V07/SQL_Project_Data_Job_Analysis',
  },
];

export const CERTIFICATION_DATA: CertificationItem[] = [
  {
    id: 'cert-1',
    name: 'Google Data Analytics Professional Certificate [Coursera]',
    url: 'https://coursera.org/share/1621afdd70a2ec9c29183e552908450a',
  },
  {
    id: 'cert-2',
    name: 'Microsoft Foundations of Coding Front-End [Coursera]',
    url: 'https://coursera.org/share/3385161fe06c585b18e0efb7b6dfa0c9',
  },
  {
    id: 'cert-3',
    name: 'Data Analysis [CEC - Swayam]',
  },
  {
    id: 'cert-4',
    name: 'Snowflake Data Engineering Professional Certificate [Coursera]',
    url: 'https://www.linkedin.com/posts/shivashankarv7_intro-to-snowflake-coursera-activity-7426632552733507584-I4vD?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFHmM84BSppZ8YqgbXPphI8XcWuJASLEHB8',
  },
  {
    id: 'cert-5',
    name: 'Artificial Intelligence [IBM × ICT]',
    url: 'https://www.linkedin.com/posts/shivashankarv7_ai-ictacademy-ibmskillsbuild-activity-7450905999366053889-VLgw?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFHmM84BSppZ8YqgbXPphI8XcWuJASLEHB8',
  },
  {
    id: 'cert-6',
    name: 'IQM Quantum Academy',
    url: 'https://www.linkedin.com/posts/shivashankarv7_iqm-academy-activity-7428470400738631680-26np?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFHmM84BSppZ8YqgbXPphI8XcWuJASLEHB8',
  },
  {
    id: 'cert-7',
    name: 'Google for Startups',
    url: 'https://drive.google.com/file/d/1NVhB7-v-fyMHfeyfH8yIF0vj-Jm2sE--/view?usp=sharing',
  },
  {
    id: 'cert-8',
    name: 'SQL (Intermediate) [HackerRank]',
    url: 'https://www.hackerrank.com/certificates/57b66c866eb0',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    handle: 'linkedin.com/in/shivashankarv7',
    url: 'https://linkedin.com/in/shivashankarv7',
  },
  {
    label: 'GitHub',
    handle: 'github.com/SHIVASHANKAR-V07',
    url: 'https://github.com/SHIVASHANKAR-V07',
  },
  {
    label: 'Hugging Face',
    handle: 'huggingface.co/Shi-07',
    url: 'https://huggingface.co/shisha-07',
  },
];
