const CustomButton = ({className, categoryName}) => {
  return (
    <div>
       <div>
            <button className={className}>{categoryName}</button>
        </div>
    </div>
  )
}

export default CustomButton
