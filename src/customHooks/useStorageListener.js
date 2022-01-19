import React from 'react'

function useStorageListener(sincronize) {
    const [storageChange, setStorageChange] = React.useState(false)

    window.addEventListener('storage', (e) => {
        if (e.key === 'TODOS_V1') {
            console.log('hubo cambios')
            setStorageChange(true)
        }
    })

    const toggleShow = () => {
        sincronize()
        setStorageChange(false)
    }

    return {
        show: storageChange,
        toggleShow: toggleShow
    }

}

export { useStorageListener }