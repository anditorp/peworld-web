import imageUser1 from "../assets/img/profile-img/Ellipse 327.png";
import imageUser2 from "../assets/img/profile-img/Ellipse 328.png";
import imageUser3 from "../assets/img/profile-img/Ellipse 329.png";

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const imageLogo = [
  {
    name: [`Tokopedia`],
    image: `https://assets.tokopedia.net/assets-tokopedia-lite/v2/arael/kratos/672c8b0f.png`,
  },
];

export const user_reviews = [
  {
    name: `Harry Styles`,
    img: imageUser1,
    jobdesk: `Front End Developer`,
    review: `Peworld provides an excellent platform for IT professionals like me to find promising career opportunities effortlessly..`,
  },
  {
    name: `Niall Horan`,
    img: imageUser2,
    jobdesk: `Back End Developer`,
    review: `I am very pleased with Peworld's user-friendly interface and their excellent customer support.`,
  },
  {
    name: `Louis Tomlinson`,
    img: imageUser3,
    jobdesk: `Full Stack Developer`,
    review: `Peworld's dedication to fostering diversity and inclusivity in the IT sector makes it a welcoming and enriching experience for everyone.`,
  },
];

export const allowedDomains = ["gmail.com", "yahoo.com"];

export const notAllowedDomains = ["example.com"];

export const errorRegisterMessages = {
  name: {
    require: "Name is required",
    textOnly: "Name must contain only letters and spaces",
  },
  email: {
    require: "Email is required",
    invalidFormat: "Email format is invalid",
    domain: "Email domain is invalid",
  },
  phone: {
    require: "Phone number is required",
    numberOnly: "Phone must contain only numbers",
  },
  company: {
    require: "Company is required",
  },
  position: {
    require: "Position is required",
    textOnly: "Position must contain only letters and spaces",
  },
  password: {
    require: "Password is required",
    noSpace: "Password cannot contain spaces",
    minLength: "Password must have more than 8 characters",
    digit: "Password must contain at least one digit",
    upperCase: "Password must contain at least one uppercase letter",
    specialCase: "Password must contain at least one special character",
  },
  confirmPassword: {
    require: "Confirm Password is required",
    mismatch: "Confirm Password must be same with Password",
  },
};
