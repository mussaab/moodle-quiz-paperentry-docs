import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://mussaab.github.io',
  base: '/moodle-quiz-paperentry-docs',
  integrations: [
    starlight({
      title: 'Paper Entry',
      description: 'Paper-based quiz grading workflow for Moodle 5.0+',
      logo: {
        light: './src/assets/logo-light.svg',
        dark:  './src/assets/logo-dark.svg',
        replacesTitle: false,
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/mussaab/moodle-quiz-paperentry' },
      ],
      editLink: {
        baseUrl: 'https://github.com/mussaab/moodle-quiz-paperentry-docs/edit/main/',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction',  link: 'getting-started/introduction/' },
            { label: 'Installation',  link: 'getting-started/installation/' },
            { label: 'Quick Start',   link: 'getting-started/quick-start/'  },
          ],
        },
        {
          label: 'User Guide',
          items: [
            { label: 'Manager Workflow', link: 'user-guide/manager/'      },
            { label: 'Grader Workflow',  link: 'user-guide/grader/'       },
            { label: 'CSV Format',       link: 'user-guide/csv-format/'   },
            { label: 'Edit Answer',      link: 'user-guide/edit-answer/'  },
          ],
        },
        {
          label: 'Configuration',
          items: [
            { label: 'Capabilities & Roles',  link: 'configuration/capabilities/'        },
            { label: 'Export Settings',       link: 'configuration/export-settings/'     },
            { label: 'Value Substitutions',   link: 'configuration/value-substitutions/' },
          ],
        },
        {
          label: 'Technical',
          items: [
            { label: 'Architecture',     link: 'technical/architecture/'   },
            { label: 'Database Schema',  link: 'technical/database/'       },
            { label: 'Privacy & GDPR',   link: 'technical/privacy/'        },
            { label: 'Backup & Restore', link: 'technical/backup-restore/' },
            { label: 'Testing',          link: 'technical/testing/'        },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Changelog',    link: 'reference/changelog/'    },
            { label: 'Contributing', link: 'reference/contributing/' },
            { label: 'License',      link: 'reference/license/'      },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
