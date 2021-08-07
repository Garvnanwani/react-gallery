import { useState } from 'react'

export default function useDebounce() {
    const [typingTimeout, SettypingTimeout] = useState('')
    function debounce(func, wait = 1000) {
        clearTimeout(typingTimeout)
        const timeout = setTimeout(() => {
            func(), wait
        })
        SettypingTimeout(timeout)
    }
    return debounce
}
