//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {};

// module.exports = composePlugins(...plugins)(nextConfig);
module.exports = withNx(nextConfig);
