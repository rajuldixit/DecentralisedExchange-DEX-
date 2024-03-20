import "./style.css";

const ToggleTheme = ({ handleChange, isChecked }: any) => {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check">Dark Mode</label>
    </div>
  );
};

export default ToggleTheme;
