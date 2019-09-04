module.exports = {
    testMatch: [
        "<rootDir>/**/*Spec.{js,jsx}"
    ],
    transform: {
        "^.+\\.[t|j]sx?$": "babel-jest"
    }
}