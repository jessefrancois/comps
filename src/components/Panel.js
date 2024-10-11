import classNames from "classnames";
import { twMerge } from "tailwind-merge";

function Panel({children,className, ...rest}) {
  const classes = twMerge(
    classNames(className,'border rounded p-3 shadow bg-white w-full'
  )
)
return(
  <div {...rest} className={classes}>
    {children}
  </div>
)
}

export default Panel