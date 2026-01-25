    import colorNames from "colornames";

    function SearchBox({colorValue,setColorValue,setHexValue}){
        return(
            <form onSubmit={(e)=>e.preventDefault()}>
            <input className="SearchBox"
                autoFocus
                type = "text"
                placeholder="Add Color Here"
                required
                value = {colorValue}
                onChange={(e)=>{setColorValue(e.target.value)
                            setHexValue(colorNames(e.target.value))}
                }
            
                />
                </form>
        );
    }

    export default SearchBox;