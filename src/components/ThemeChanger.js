import { useThemeContext } from "./ThemeContext"

const ThemeChanger = () => {

    const { themeCouleur, themePolice } = useThemeContext()

    return (
        
        <div>
            <form>
                <select>
                    <option>Thème 1: </option>
                    <option>Thème 2: </option>
                    <option>Thème 3: </option>
                    <option>Thème 4: </option>
                </select>
            </form>
        </div>
    )
}

export default ThemeChanger