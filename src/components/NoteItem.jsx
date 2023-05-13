import { FiPlus, FiX } from 'react-icons/fi'

export function NoteItem({ isNew, value, onClick, ...rest }) {
  return (
    <div
      className={`flex items-center ${
        isNew
          ? 'bg-transparent border-[2px] border-dashed border-gray-300'
          : 'bg-background-750 border-0'
      } text-gray-300 mb-3 rounded-xl pr-4`}
    >
      <input
        className="h-14 w-full p-3 text-white-800 bg-transparent border-0 placeholder:text-gray-500 focus:outline-none"
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button className="border-0 bg-none" type="button" onClick={onClick}>
        {isNew ? (
          <FiPlus className="text-emerald-900 w-6 h-6" />
        ) : (
          <FiX className="text-red-700 w-6 h-6" />
        )}
      </button>
    </div>
  )
}
