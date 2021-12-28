// Dependencies
import colorNames from 'colornames';

const Input = ({ 
    colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText 
}) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label>Add Color Name:</label>
            <input   // CONTROLLED INPUT
                type="text" 
                autoFocus
                placeholder="Add Color Name"
                required
                value={colorValue} // get the value from colorValue state
                onChange ={(e) => {  // setting two values
                    setColorValue(e.target.value);  // set the colorValue state
                    setHexValue(colorNames(e.target.value));  // set the HEX value - use 'colornames' dependency library
                }}  
            />
            <button
                type="button"
                onClick={() => setIsDarkText(!isDarkText)}  // toggle the 'isDarkText' value by clicking the button 
            >
                Toggle Text Color
            </button>
        </form>
    )
}

export default Input
