import className from 'classnames';
import { twMerge } from 'tailwind-merge';

function Button({children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {

    const classes = twMerge(
      className(rest.className, 'flex items-center px-3 py-1.5 border', {
      'border-blue-500 bg-blue-500 text-white': primary,
      'border-gray-900 bg-gray-900 text-white': secondary,
      'border-green-500 bg-green-500 text-white': success,
      'border-yellow-400 bg-yellow-400 text-black': warning,
      'border-red-500 bg-red-500  hover:bg-red-700 text-white': danger && !outline,
      'border-blue-500 bg-blue-500 hover:bg-blue-700 text-white': primary && !outline,
      'border-gray-900 bg-gray-900 hover:bg-gray-500 text-white': secondary && !outline,
      'border-green-500 bg-green-500 hover:bg-green-700 text-white': success && !outline,
      'border-yellow-400 bg-yellow-400 hover:bg-yellow-600 text-black': warning && !outline,
      'border-red-500 bg-red-500 hover:bg-red-700 text-white': danger && !outline,
      'rounded-full': rounded,
      'bg-white': outline,
      'text-blue-500 hover:text-blue-700 hover:border-blue-700': outline && primary,
      'text-gray-900 hover:text-gray-700 hover:border-gray-700': outline && secondary,
      'text-green-500 hover:text-green-700 hover:border-green-700': outline && success,
      'text-yellow-400 hover:text-yellow-600 hover:border-yellow-600': outline && warning,
      'text-red-500 hover:text-red-700 hover:border-red-700': outline && danger
    })
  )
  return (
    <button {...rest} className={classes} >{children}</button>
  )
}

Button.propTypes = {
  checkVariationValue: ({primary, secondary, success, warning, danger}) => {
    const count = Number(!!primary)
    + Number(!!secondary)
    + Number(!!warning)
    + Number(!!success)
    + Number(!!danger)
    
    if (count > 1) {
      return Error('Only one of primary, seconday, success, warning, danger can be be true.')
    }
  }
}

export default Button;