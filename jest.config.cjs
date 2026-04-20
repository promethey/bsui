module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx"],
  moduleNameMapper: {
    "^utils/(.*)$": "<rootDir>/src/utils/$1",
    "^helpers/(.*)$": "<rootDir>/src/helpers/$1",
    "^components/(.*)$": "<rootDir>/src/components/$1",
  },
};
