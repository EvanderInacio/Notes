import { Tag } from './Tag'

export function Note({ data, ...rest }) {
  return (
    <button
      className="w-full bg-background-700 border-none rounded-xl p-[22px] mb-4"
      {...rest}
    >
      <h1 className="flex-1 text-left font-bold text-2xl text-white-800 ">
        {data.title}
      </h1>

      {data.tags && (
        <footer className="flex gap-1 mt-6 w-full">
          {data.tags.map(tag => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </button>
  )
}
