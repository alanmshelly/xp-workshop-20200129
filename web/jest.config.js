module.exports = {
    setupFiles: [
        "react-app-polyfill/jsdom"
    ],
    testEnvironment: "jest-environment-jsdom",
    testMatch: [
        "<rootDir>/**/*Spec.{js,jsx}"
    ],
    transform: {
        "^.+\\.[t|j]sx?$": "babel-jest"
    }
}