import { useEffect, useState } from "react"

type Theme = 'dark' | 'light'
type ChangeEvent = React.ChangeEvent<HTMLInputElement>

export const Switch = () => {
    const [theme, setTheme] = useState<Theme>('light')

    const handleChange = (e: ChangeEvent) => setTheme(e.target.checked ? 'dark' : 'light');

    useEffect(() => {

        document.body.setAttribute('data-theme', theme);

    }, [theme]);
    
    return (
        <div className="container-switch">
            <span>Mude o Tema</span>
            <label className="switch">
                <input type="checkbox" onChange={handleChange} checked={theme === 'dark'} />
                <span className="slider"></span>
            </label>
        </div>
    )
}
