/** @type {import('@builder.io/mitosis').MitosisConfig} */
module.exports = {
  files: 'src/**',
  targets: ['react'],
  options: {
    react: {
      typescript: true,
    },
  },
  getTargetPath: ({ target }) => {
    // Check if the target is "react"
    if (target === 'react') {
      return '../../react-result/';
    }
  },
};
