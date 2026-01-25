function ColorField({colorValue,hexValue}){
return (
  <div className="colorField" style={{backgroundColor:colorValue}}>
    <p>{colorValue?colorValue:"Color Appears After typing in TextBox"}</p>
    <p>{hexValue ? hexValue : null}</p>
  </div>
);

}

ColorField.defaultProps = {
  colorValue : "Empty Value",
  hexValue : " "
};

export default ColorField;