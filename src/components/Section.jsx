

export function Section({ title, children }) {
  return (
    <div className="my-14 mx-0 mb-7">
      <h2 
        className="border-b-2 border-background-700 pb-4 mb-6 text-gray-100 font-normal text-xl"
      > 
       {title}
      </h2>
      {children}
    </div>
  )
}