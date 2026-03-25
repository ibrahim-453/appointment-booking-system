import { useState } from 'react'
export default function useConfirmPasswordToggle () {
    const [showPassword, setShowPassword] = useState(false);

    const toggleConfirmPassword = () => {
        setShowPassword(!showPassword);
    }
    return {showPassword, toggleConfirmPassword}
}