const { body, validationResult } = require("express-validator");

const createfood = () => {
  return [
    body("name")
        .not().isEmpty()
        .withMessage("Category name"),
    body("price")
        .not().isEmpty()
        .withMessage("Price Empty!"),
    body("discount")
        .isNumeric()
        .isLength({min: 0, max: 100})
        .withMessage("0-100% sale possible;"),
    body("portion")
        .isNumeric()
        .withMessage("portion"),
    body("stock")
        .isNumeric()
        .isLength({min: 0})
        .withMessage("Can't be less than 0"),
    body("ingredients")
        .not().isEmpty()
        .withMessage("Ingredients of a product must be inserted"),
    body("status")
        .not().isEmpty()
        .withMessage("Status can't be empty"),
    body("sales")
        .isBoolean()
        .withMessage("Must be boolean"),
    body("image")
        .not().isEmpty()
        .withMessage("Image can't be empty!"),
    body("category.name")
        .not().isEmpty()
        .isString(),
    body("category.color")
        .not().isEmpty()
        .isString()
  ];
};

// const createcategory = () => {
//   return [

//   ]
// }

exports.createfood = createfood;
// exports.createcategory = createcategory;