import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Button = ({ children = "button", type = "button", disabled, onClick, className }) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={`${className} bg-blue-500 text-white leading-none p-2 rounded hover:opacity-70 disabled:opacity-70`}
  >
    {children}
  </button>
);
Button.propTypes;

export const Prev = () => (
  <Link to={-1}>
    <div className={`hover:text-blue-500`}>
      <FaArrowLeft />
    </div>
  </Link>
);
Prev.propTypes;

export const H2 = ({ children }) => <h2 className={`capitalize font-semibold text-xl`}>{children}</h2>;
H2.propTypes;

export const H3 = ({ children }) => <h3 className={`capitalize font-medium`}>{children}</h3>;
H3.propTypes;

export const Label = ({ children = "label", id }) => (
  <label htmlFor={id} className={`capitalize font-medium leading-relaxed`}>
    {children}
  </label>
);
Label.propTypes;

export const Input = ({ type = "text", id, value, onChange }) => (
  <input
    type={type}
    id={id}
    name={id}
    value={value}
    onChange={onChange}
    className={`border rounded p-2 w-full focus:outline-slate-400`}
  />
);
Input.propTypes;

export const Textarea = ({ id, value, onChange }) => (
  <textarea
    id={id}
    name={id}
    value={value}
    onChange={onChange}
    className={`rounded p-2 border w-full focus:outline-slate-400`}
  />
);
Textarea.propTypes;

export const Select = ({ children, value, onChange }) => (
  <select className={`border rounded w-full p-2`} value={value} onChange={onChange}>
    <option value="">--Select user--</option>
    {children}
  </select>
);
Select.propTypes;
