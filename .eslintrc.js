module.exports = {
  extends: ['airbnb'],
  plugins: ['react'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    jest: true
  },
  rules: {
    'max-depth': ['warn', 4],
    'id-length': ['warn', { exceptions: ['i', 'j'], min: 2 }],
    'no-lonely-if': ['error'],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'react/state-in-constructor': ['off'],
    'jsx-a11y/href-no-hash': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    curly: 'error',
    'comma-dangle': ['error', 'only-multiline']
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  }
};
