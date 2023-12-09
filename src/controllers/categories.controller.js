import CategoryModel from "../models/Category.model.js";


let colors = {
  blue: {
    bgColor: "rgba(52, 152, 219, .6)",
    textColor: "rgba(52, 152, 219, 1.0)"
  },
  green: {
    bgColor: "rgba(46, 204, 113, .6)",
    textColor: "rgba(46, 204, 113, 1.0)"
  },
  red: {
    bgColor: "rgba(231, 76, 60, .6)",
    textColor: "rgba(231, 76, 60, 1.0)"
  },
  purple: {
    bgColor: "rgba(155, 89, 182, .6)",
    textColor: "rgba(155, 89, 182, 1.0)"
  },
  yellow: {
    bgColor: "rgba(241, 196, 15, .6)",
    textColor: "rgba(241, 196, 15, 1.0)"
  },
  teal: {
    bgColor: "rgba(26, 188, 156, .6)",
    textColor: "rgba(26, 188, 156, 1.0)"
  },
  pink: {
    bgColor: "rgba(255, 89, 89, .6)",
    textColor: "rgba(255, 89, 89, 1.0)"
  },
  orange: {
    bgColor: "rgba(245, 176, 65, .6)",
    textColor: "rgba(245, 176, 65, 1.0)"
  },

}


export const createCategory = async (req, res) => {
  const { name, themeColor } = req.body;

  try {
    const categoryFound = await CategoryModel.findOne({ name });
    if (categoryFound) return res.status(400).json({ message: 'Category already exist' });

    const newCategory = new CategoryModel({
      name, themeColor,
      user_id: req.user.id,
      bgColor: colors[themeColor].bgColor,
      textColor: colors[themeColor].textColor,
    });
    const categorySaved = await newCategory.save();
    return res.json(categorySaved);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
}

export const getCategories = async (req, res) => {
  try {
    const categoriesList = await CategoryModel.find({ user_id: req.user.id });
    res.json(categoriesList);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
}