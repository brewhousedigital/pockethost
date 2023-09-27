// This file contains the site configuration for the theme.

// Metadata, SEO, and Social
export const SITE_TITLE = 'PocketHost'
export const SITE_DESCRIPTION = 'Deploy PocketBase in 30 seconds.'
export const SITE_URL = 'https://pockethost.io'
export const SITE_DEFAULT_OG_IMAGE = '/assets/og-image.png'

// Docs Sidebar
// Define the left sidebar items here.
// The path should match the folder name in src/content/docs/
export const SIDEBAR_ITEMS = {
  'Getting Started': [
    '/docs/introduction',
    '/docs/overview/help',
    '/docs/overview/faq',
    '/docs/overview/roadmap',
  ],
  'Daily Usage': [
    '/docs/usage/create',
    '/docs/uusage/accessing-instance',
    '/docs/usage/instances/index',
    '/docs/usage/rename-instance',
    '/docs/usage/maintenance',
    '/docs/usage/ftp',
    '/docs/usage/backup-and-restore',
    '/docs/usage/hooks',
    '/docs/usage/upgrading',
  ],
  'Self-hosting': ['hosting/overview'],
  Contributing: [
    '/docs/development/overview',
    '/docs/development/frontend',
    '/docs/development/full-stack/index',
    '/docs/development/rpc',
    '/docs/development/production',
  ],
  'Release History': ['docs/releases'],
}
