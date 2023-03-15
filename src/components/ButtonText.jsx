
export function ButtonText({ title, ...rest }) {
  return (
    <button
      type="button"
      {...rest} 
      className="bg-transparent text-orange-800 border-0 w-fit text-base"
    >
      {title}
    </button>
  )
}