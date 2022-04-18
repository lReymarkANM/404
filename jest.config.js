const rootDir = '/home/ajboyian/Personal/authors-text-editor';
const src = `${rootDir}/resources/js`;

module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  testMatch: [
    "**/resources/js/**/*test.[jt]s?(x)"
  ],
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    '\\.(css|scss)$': `${src}/__mocks__/styleMock.js`,
    '\\.(jpeg|jpg|png|gif)$': `${src}/__mocks__/imageMock.js`,
    '^@images(.*)$': `${rootDir}/public/images$1`,
    '^@reducers(.*)$': `${src}/reducers$1`,
    '^@common(.*)$': `${src}/common$1`,
    '^@pages(.*)$': `${src}/pages$1`,
    '^@sub-pages(.*)$': `${src}/sub-pages$1`,
    '^@animations(.*)$': `${src}/animations$1`,
    '^@layouts(.*)$': `${src}/layouts$1`,
  }
}