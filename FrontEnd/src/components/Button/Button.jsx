export const Button = ({text,...props}) => {
  return (
  <button 
  className="p-1.5 text-base rounded-md cursor-pointer bg-gray-800 hover:bg-gray-600 text-white"
  {...props}>
    {text}
  </button>
  )
}