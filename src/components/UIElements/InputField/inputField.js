import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./inputstyles.scss";

const InputField = ({ type, name, label, value, onChange, setDoB }) => {
  const isRadio = type === "radio";
  const isDate = type === "date";

  return (
    <div className="inputfield-cnt">
      {isRadio ? (
        <div className="radio-cnt">
          <input
            type={type}
            name={name}
            onChange={onChange}
            value="male"
            required
            checked={value === "male"}
            className="radio-input-cnt"
          />
          <label className="text-sm mt-3">Male</label>

          <input
            type={type}
            name={name}
            onChange={onChange}
            value="female"
            required
            checked={value === "female"}
            className="radio-input-cnt"
          />
          <label className="text-sm mt-3">Female</label>
        </div>
      ) : isDate ? (
        <DatePicker
          onChange={(date) => setDoB(date)}
          type={type}
          dateFormat="dd/MM/yyyy"
          name={name}
          value={value}
          selected={value}
          isClearable
          maxDate={new Date(new Date())}
          showPopperArrow={false}
          placeholderText="01/01/2000"
          required
            popperPlacement="top-end"
            popperModifiers={[
              {
                name: "myModifier",
                fn(state) {
                  return state;
                },
              },
            ]}
          className="peer w-full border border-gray-500 focus:outline-none focus:border-2 focus:border-primary p-2 rounded-md"
        />
      ) : (
        <input
          type={type}
          name={name}
          onChange={onChange}
          value={value}
          required
          className="peer w-full border border-gray-500 focus:outline-none focus:border-2 focus:border-primary p-2 rounded-md"
        />
      )}
      {label === "Date of Birth" ? (
        <label className={`absolute left-2 -top-2 text-xs bg-white px-2`}>
          {label}
        </label>
      ) : label === "Gender" ? (
        <label className={`absolute -left-2 -top-2 text-sm bg-white px-2`}>
          {label}
        </label>
      ) : (
        <label
          className={`before:content[' '] after:content[' '] absolute left-2 ${
            value ? "-top-2 text-xs" : "top-2"
          } peer-focus:text-primary peer-focus:text-xs peer-focus:-top-2 bg-white pointer-events-none transition-all px-2`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default InputField;
