

export function Section({ title, children }) {
  return (
    <div className="border-2 border-background-700 rounded-md p-7 max-w-fit grid items-end justify-end">
      <h2 className=" pb-4 mb-6 text-gray-100 font-normal text-xl">{title}</h2>
      <div className="flex gap-2">{children}</div>
    </div>
  )
}
