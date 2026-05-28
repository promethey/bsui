module.exports = {
  testEnvironment: "jsdom",

  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },

  moduleFileExtensions: ["js", "jsx"],

  moduleNameMapper: {
    "^utils$": "<rootDir>/src/utils/index.js",
    "^utils/(.*)$": "<rootDir>/src/utils/$1",

    "^helpers$": "<rootDir>/src/helpers/index.js",
    "^helpers/(.*)$": "<rootDir>/src/helpers/$1",

    "^components$": "<rootDir>/src/components/index.jsx",
    "^components/(.*)$": "<rootDir>/src/components/$1",

    "^hooks$": "<rootDir>/src/hooks/index.js",
  },

  //testPathIgnorePatterns: ["<rootDir>/src/tests/"],
};
