
export function Tag({ title, ...rest }) {
  return (
    <div {...rest} className="text-sm px-4 py-[14px] rounded-md mr-[6px] text-background-800 font-medium bg-emerald-900">
      {title}
    </div>
  )
}
