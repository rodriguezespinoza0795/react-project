import React from 'react'

function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = React.useState(false)

        window.addEventListener('storage', (e) => {
            if (e.key === 'TODOS_V1') {
                console.log('hubo cambios')
                setStorageChange(true)
            }
        })

        const toggleShow = () => {
            props.sincronize()
            setStorageChange(false)
        }

        return (
            <WrappedComponent
                show={storageChange}
                toggleShow={toggleShow}
            />
        )
    }

}

export { withStorageListener }