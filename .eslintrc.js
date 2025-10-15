module.exports = {
  root: true,
  extends: [
    "next/core-web-vitals",
    "plugin:prettier/recommended", // Make sure this is always the last item.
  ],
  rules: {
    // Disable unescaped entities rule as these are often false positives for content text
    "react/no-unescaped-entities": "off",
    "@next/next/no-html-link-for-pages": "off",
  },
};
