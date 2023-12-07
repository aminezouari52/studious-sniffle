/** @type {import('@builder.io/mitosis').MitosisConfig} */
module.exports = {
  files: 'src/**',
  targets: ['react', 'angular'],
  options: {
    react: {
      typescript: true,
    },
    angular: {
      typescript: true,
    },
  },
  getTargetPath: ({ target }) => {
    // Check if the target is "react"
    if (target === 'react') {
      return '../../react-result/';
    }
    if (target === 'angular') {
      return '../../angular-result';
    }
  },
};
