import {
  faAtom,
  faBookOpen,
  faFileSignature,
  faLaptopCode,
  faMicroscope,
  faPhotoFilm,
  faReceipt,
  faRobot,
  faSatellite,
  faSwatchbook,
} from "@fortawesome/free-solid-svg-icons";
import school1 from "../assest/school_1.svg";
import { MenuProps } from "antd";

const ROUTE_PATH = {
  GALLERY: "gallery",
  FEESTRUCTURE: "fee-structure",
  FORMS: "forms",
  BOOKLIST: "book-list",
  SYLLABUS: "syllabus",
};
const NAVIGATION_ROUTE_PATH = {
  HOME: "/",
  ABOUTUS: "/about-us",
  ADMISSION: "/admission",
  CONTACTUS: "/contact-us",
};
const hero_banner_list = [school1, school1];
const schoolMessage =
  "Takshila Educational Society, formed in 1997, set-up its Delhi Public School Coimbatore, established, is a name to reckon with, a landmark in every sense of the word and an epitome of good education and discipline. Delhi Public School Coimbatore is run under the aegis of Takshila Educational Society and Delhi Public Schools Society. The latter is one of the largest chains of K-12 schools in the world with over 150 schools in India and foreign shores. The four K-12 schools of TES have a combined student strength of over 11000 and a faculty of nearly 400. The overwhelming response to its institutions from the citizens and students has encouraged TES to reach for greater heights. TES completed a full circle, with schools in India East, West, North and South. DPS Coimbatore offers schooling from Nursery to Class XII. It has been granted affiliation from the Central Board of Secondary Education, New Delhi.";
const ourPromise =
  "At [Your School Name], we are committed to nurturing the minds and hearts of our students. Our promise is to provide a safe, inclusive, and stimulating environment where every student can thrive academically, socially, and emotionally. We believe in fostering a love for learning, encouraging curiosity, and supporting each child's unique journey. Together, we strive to build a community of lifelong learners who are prepared to make a positive impact on the world.";

const mockNotification = [
  {
    title: "Class 10th Scheme",
    details: "Exam scheme has been published on 29 Oct, 2024.",
    dateTime: "29 Oct, 2024",
  },
  {
    title: "Class 10th Scheme",
    details: "Exam scheme has been published on 29 Oct, 2024.",
    dateTime: "29 Oct, 2024",
  },
  {
    title: "Class 10th Scheme",
    details: "Exam scheme has been published on 29 Oct, 2024.",
    dateTime: "29 Oct, 2024",
  },
  {
    title: "Class 10th Scheme",
    details: "Exam scheme has been published on 29 Oct, 2024.",
    dateTime: "29 Oct, 2024",
  },
  {
    title: "Class 10th Scheme",
    details: "Exam scheme has been published on 29 Oct, 2024.",
    dateTime: "29 Oct, 2024",
  },
  {
    title: "Class 10th Scheme",
    details: "Exam scheme has been published on 29 Oct, 2024.",
    dateTime: "29 Oct, 2024",
  },
  {
    title: "Class 10th Scheme",
    details: "Exam scheme has been published on 29 Oct, 2024.",
    dateTime: "29 Oct, 2024",
  },
  {
    title: "Class 10th Scheme",
    details: "Exam scheme has been published on 29 Oct, 2024.",
    dateTime: "29 Oct, 2024",
  },
  {
    title: "Class 10th Scheme",
    details: "Exam scheme has been published on 29 Oct, 2024.",
    dateTime: "29 Oct, 2024",
  },
  {
    title: "Class 10th Scheme",
    details: "Exam scheme has been published on 29 Oct, 2024.",
    dateTime: "29 Oct, 2024",
  },
  {
    title: "Class 10th Scheme",
    details: "Exam scheme has been published on 29 Oct, 2024.",
    dateTime: "29 Oct, 2024",
  },
  {
    title: "Class 10th Scheme",
    details: "Exam scheme has been published on 29 Oct, 2024.",
    dateTime: "29 Oct, 2024",
  },
  {
    title: "Class 10th Scheme",
    details: "Exam scheme has been published on 29 Oct, 2024.",
    dateTime: "29 Oct, 2024",
  },
  {
    title: "Class 10th Scheme",
    details: "Exam scheme has been published on 29 Oct, 2024.",
    dateTime: "29 Oct, 2024",
  },
  {
    title: "Class 10th Scheme",
    details: "Exam scheme has been published on 29 Oct, 2024.",
    dateTime: "29 Oct, 2024",
  },
  {
    title: "Class 10th Scheme",
    details: "Exam scheme has been published on 29 Oct, 2024.",
    dateTime: "29 Oct, 2024",
  },
];
const actionHighlight = [
  {
    id: "syllabus",
    icon: faSwatchbook,
    title: "Syllabus",
    link: ROUTE_PATH.SYLLABUS,
  },
  {
    id: "fee",
    icon: faReceipt,
    title: "Fee Structure",
    link: ROUTE_PATH.FEESTRUCTURE,
  },
  {
    id: "booklist",
    icon: faBookOpen,
    title: "Book List",
    link: ROUTE_PATH.BOOKLIST,
  },
  {
    id: "forms",
    icon: faFileSignature,
    title: "Forms",
    link: ROUTE_PATH.FORMS,
  },
  {
    id: "Gallery",
    icon: faPhotoFilm,
    title: "Gallery",
    link: ROUTE_PATH.GALLERY,
  },
];
const faultyList = [
  { id: "1", name: "James", imgUrl: "", details: "B.Sc in maths" },
  { id: "1", name: "James", imgUrl: "", details: "B.Sc in maths" },
  { id: "1", name: "James", imgUrl: "", details: "B.Sc in maths" },
  { id: "1", name: "James", imgUrl: "", details: "B.Sc in maths" },
  { id: "1", name: "James", imgUrl: "", details: "B.Sc in maths" },
  { id: "1", name: "James", imgUrl: "", details: "B.Sc in maths" },
  { id: "1", name: "James", imgUrl: "", details: "B.Sc in maths" },
];
const labList = [
  { id: "1", name: "Chemistry Lab", icon: faAtom, details: "experiment" },
  { id: "1", name: "Physics Lab", icon: faSatellite, details: "experiment" },
  { id: "1", name: "Biology Lab", icon: faMicroscope, details: "experiment" },
  { id: "1", name: "Computer Lab", icon: faLaptopCode, details: "experiment" },
  { id: "1", name: "Robotics Lab", icon: faRobot, details: "experiment" },
];
const navigationControlList: Required<MenuProps>["items"][number][] = [
  {
    label: "Home",
    key: NAVIGATION_ROUTE_PATH.HOME,
    disabled: false,
  },
  {
    label: "About us",
    key: NAVIGATION_ROUTE_PATH.ABOUTUS,
  },
  {
    label: "Admission",
    key: NAVIGATION_ROUTE_PATH.ADMISSION,
    disabled: false,
    children: [
      { key: "11", label: "Option 1" },
      { key: "12", label: "Option 2" },
      { key: "13", label: "Option 3" },
      { key: "14", label: "Option 4" },
    ],
  },

  {
    label: "Contact us",
    key: NAVIGATION_ROUTE_PATH.CONTACTUS,
  },
];
const message_primary =
  "we are dedicated to providing a nurturing environment where every student can thrive. Our mission is to foster a love for learning, encourage curiosity, and support each child's unique journey. Together, we strive for excellence and aim to make a positive impact on the world.";
const message_secondary =
  " we believe in the power of education to transform lives. Our mission is to provide a nurturing environment where every student can thrive. We are committed to fostering a love for learning and supporting each child's unique journey.";
export {
  hero_banner_list,
  faultyList,
  labList,
  message_primary,
  schoolMessage,
  message_secondary,
  NAVIGATION_ROUTE_PATH,
  navigationControlList,
  ourPromise,
  mockNotification,
  ROUTE_PATH,
  actionHighlight,
};
