module.exports = {
    title: 'Grovado API 🎉',
    description: `APIs for Grovado Health Apps`,
    base: process.env.DEPLOY_ENV === 'gh-pages' ? '/grovado-api/' : '/',
    themeConfig: {
        sidebar: [
            ['/', 'Introduction'],
            '/docs/development',
            '/docs/architecture',
            // '/docs/tech',
            // '/docs/routing',
            // '/docs/state',
            // '/docs/linting',
            // '/docs/editors',
            // '/docs/production',
            // '/docs/troubleshooting',
        ],
    },
};
