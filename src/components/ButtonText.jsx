
export function ButtonText({ title, isActive = false, ...rest }) {
  return (
    <button
      type="button"
      {...rest} 
      className={`bg-transparent border-0 text-base ${isActive ? 'text-orange-800' : 'text-gray-400'} `}
    >
      {title}
    </button>
  )
}