export function Input({ icon: Icon, ...rest }) {
  return (
    <div className="w-full flex items-center bg-background-900 text-gray-300 mb-2 rounded-xl focus:hidden max-sm:mt-6">
      {Icon && <Icon className="ml-4" size={20} />}
      <input 
        className="h-14 w-full p-3 text-white-800 bg-transparent border-0 placeholder:text-gray-300 focus:outline-none" 
        {...rest} 
      />
    </div>
  )
}