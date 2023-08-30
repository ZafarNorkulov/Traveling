import { Button } from 'antd'
import React from 'react'

const ComponentsHead = ({title,desc,btnText}: {title:string,desc:string,btnText:string}) => {
  return (
    <div className="component myContainer flex sm:flex-row flex-col justify-between items-start sm:items-center">
          <div className="sm:text-start sm:mx-0 text-center mx-auto">
            <h2 className="component-title">{title}</h2>
            <p className="component-desc mt-4 mb-6">
              {desc}
            </p>
          </div>
          <Button  size={"large"} className="see-btn">{btnText}</Button>
        </div>
  )
}

export default ComponentsHead
