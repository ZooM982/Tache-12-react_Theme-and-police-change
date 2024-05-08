import { useThemeContext } from "./ThemeContext"

const Header = () => {

    const { themeCouleur, themePolice } = useThemeContext()

    return (
        <div>
            <h2>Thème: [{themeCouleur}]</h2>
            <h2>Police: [{themePolice}] </h2>
        </div>
    )
}

export default Header
