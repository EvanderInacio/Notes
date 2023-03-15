export function Button({ title, loading = false }) {
  return (
    <button 
      disabled={loading}
      type="button"
      className="w-full bg-orange-800 text-background-800 h-14 py-0 px-4 mt-4 rounded-xl font-medium disabled:opacity-50"
    >
      { loading ? "Loading..." : title }
    </button>
  )
}
