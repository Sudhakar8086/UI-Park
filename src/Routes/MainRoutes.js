import React from "react";
import { Route, Routes } from "react-router-dom";
import Dialog from "../Pages/DialogInfo/index.jsx";
import AlertInfo from "../Pages/AlertInfo/index.jsx";
// import Switches from "../Pages/Switches";
import Rating from "../Pages/Rating";
import Cards from "../Pages/cards/index";
import UserList from "../Pages/UserList";
import Buttons from "../Pages/buttons/index";

import Checkboxes from "../Pages/checkboxes";
import Paginations from "../Pages/paginations";
import LandingPage from "../Pages/landingPage";
import Progress from "../Pages/progress/index";
import Analytics from "../Pages/analytics";
import Accordions from "../Pages/accordion";
import Snackbars from "../Pages/snackbars";

import TextFields from "../Pages/form/formElement/textFields";
import Select from "../Pages/form/formElement/select";
import CheckBox from "../Pages/form/formElement/checkBox";
import RadioGroup from "../Pages/form/formElement/radioGroup";
import Pickers from "../Pages/form/formElement/picker/index.js";
import Switches from "../Pages/form/formElement/switch/index.js";
import Slider from "../Pages/form/formElement/slider/index.js";
import InputMask from "../Pages/form/formElement/input-mask/index.js";
import CustomInputs from "../Pages/form/formElement/custominputs/index.js";
import TextArea from "../Pages/form/formElement/textArea/index.js";


import FileUploaders from "../Pages/form/formElement/fileUploader/index.js";

import ApexChart from "../../src/Pages/Charts/index";
import Clipboard from "../Pages/clipboard/index.jsx";
function MainRoutes() {
  return (
    <Routes>
      <Route path="/components/dialog-info" element={<Dialog />} />
      <Route path="/components/alert" element={<AlertInfo />} />
      {/* <Route path="/components/switches" element={<Switches />} /> */}
      <Route path="/components/ratings" element={<Rating />} />
      <Route path="/components/tables" element={<UserList />} />
      <Route path="/components/pagination" element={<Paginations />} />
      <Route path="/components/buttons" element={<Buttons />} />
      <Route path="/components/progress" element={<Progress />} />
      <Route path="/components/snackbar" element={<Snackbars />} />
      <Route path="/surfaces/cards" element={<Cards />} />
      <Route path="/surfaces/accordions" element={<Accordions />} />
      <Route path="/landingPage" element={<LandingPage />} />
      <Route path="/components/charts" element={<ApexChart />} />
      <Route path="/components/clipboard" element={<Clipboard />} />

      {/* Forms */}
      <Route path="/form-elements/textfield" element={<TextFields />} />
      <Route path="/form-elements/select" element={<Select />} />
      <Route path="/form-elements/checkbox" element={<CheckBox />} />
      <Route path="/form-elements/radio" element={<RadioGroup />} />
      <Route path="/form-elements/datePicker" element={<Pickers />} />
      <Route path="/form-elements/switch" element={<Switches />} />
      <Route path="/form-elements/slider" element={<Slider />} />
    </Routes>
  );
}

export default MainRoutes;
