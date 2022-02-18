import React, { forwardRef, useImperativeHandle, useState } from 'react'

const Button = forwardRef(( props, ref) => {
    const [toggle, setToggle] = useState()

    useImperativeHandle(ref, () => ({
        alterToggle() {
            setToggle(!toggle)
        }
    }))


  return (

    <div>
        <button>Button from child</button>
        {toggle && <h1>Toggled</h1>}
    </div>
  )
});

export default Button