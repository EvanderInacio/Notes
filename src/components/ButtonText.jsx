export function ButtonText({ title, isActive = false, icon, ...rest }) {
  return (
    <button
      type="button"
      {...rest}
      className={`bg-transparent border-0 text-lg 
       ${isActive ? 'text-emerald-900' : 'text-gray-400'}  `}
    >
      {title}
    </button>
  )
}
