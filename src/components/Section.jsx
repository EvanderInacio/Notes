

export function Section({ title, children }) {
  return (
    <div className="bg-background-750 rounded-md p-7 grid items-center justify-center">
      <h2 className="pb-2 mb-6 text-gray-100 font-normal text-xl border-b-2 border-emerald-900">{title}</h2>
      <div className="flex gap-2">{children}</div>
    </div>
  )
}
