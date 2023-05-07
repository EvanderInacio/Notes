
export function Tag({ title, ...rest }) {
  return (
    <div {...rest} className="text-xs px-4 py-[14px] rounded-md mr-[6px] text-background-900 bg-orange-800">
      {title}
    </div>
  )
}
