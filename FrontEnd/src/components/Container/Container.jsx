export const Container = ({children}) => {

  return (
    <div 
    className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center rounded-lg bg-gray-200/45 p-8'>
      {children}
    </div>
  )
};

export default Container;