const { check } = require("express-validator");
const handleValidationErrors = require('./handleValidationErrors');

const validateCommentInput = [
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('Comment cannot be empty'),
    handleValidationErrors
];

module.exports = validateCommentInput