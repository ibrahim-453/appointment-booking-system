import { useState } from 'react'
export default function usePasswordToggle () {
    const [isVisible, setIsVisible] = useState(false);

    const togglePassword = () => {
        setIsVisible(!isVisible);
    }
    return {isVisible, togglePassword}
}
