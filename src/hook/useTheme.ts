import { useEffect, useState } from 'react';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>

type Theme = 'dark' | 'light'

type useThemeReturn = [Theme, (e: ChangeEvent) => void];


export const useTheme = (initialTheme:Theme): useThemeReturn => {

    const [theme, setTheme] = useState<Theme>(initialTheme)

    const handleChange = (e: ChangeEvent) => {
        const newTheme = e.target.checked ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.setAttribute('data-theme', newTheme);
      };

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme])

    return [theme, handleChange]
}
