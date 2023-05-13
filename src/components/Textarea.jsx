export function Textarea({ value, ...rest }) {
  return (
    <textarea
      className="w-full h-40 bg-background-800 text-white-800 border-0 resize-none mb-2 rounded-xl p-4 placeholder:text-gray-500 focus:outline-none"
      {...rest}
    >
      {value}
    </textarea>
  )
}
