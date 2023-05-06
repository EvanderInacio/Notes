export function Button({ title, color, loading = false }) {
  return (
    <button 
      disabled={loading}
      type="button"
      className={`lg:w-full ${color ? 'bg-red-900' : 'bg-orange-800'} text-background-800 h-14 py-0 px-4 mt-4 rounded-xl font-medium disabled:opacity-50`}
    >
      { loading ? "Loading..." : title }
    </button>
  )
}
