/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://quartiergenereux.fr',
    generateRobotsTxt: true,
    outDir: 'out'
}