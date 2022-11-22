import { useContext } from 'react';
import { ThemeContext } from '../App';


const lightMode = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
}

const darkMode = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
}

function ThemeButton() {
    const [theme, setTheme] = useContext(ThemeContext);

    return (
        <label className="flex p-1 items-center" onClick={ () => {
            if (theme === 'light') {
                darkMode()
                setTheme('dark')
            } else {
                lightMode();
                setTheme('light');
            }
        }}>
            {theme === 'light' ? 
                <div>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-10 w-10 md:h-10 md:w-10 fill-current stroke-current p-1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    >
                        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 
                        6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 
                        0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 
                        11-8 0 4 4 0 018 0z"/>
                    </svg>  
                </div> :
                <div>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-9 w-9 md:h-9 md:w-9 fill-current stroke-current p-1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    >
                        <path d="M20.354 15.354A9 
                        9 0 018.646 3.646 9.003 
                        9.003 0 0012 21a9.003 
                        9.003 0 008.354-5.646z"/>
                    </svg> 
                </div> 
            }
        </label>
    )
}

export default ThemeButton;