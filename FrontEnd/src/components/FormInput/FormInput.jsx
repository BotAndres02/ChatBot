export const FormInput = ({text, ...props}) => {

  return (
    <>
      <label>{text}</label>
      <input
      type="text"
      className="border-2 w-full rounded-md px-2 bg-white"
      required 
      {...props}/>
    </>
  )
}