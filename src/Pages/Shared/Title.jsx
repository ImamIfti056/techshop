const Title = ({heading, subheading}) => {
  return (
    <div className="text-center my-6">
        <h3 className="text-3xl mb-3">{heading}</h3>
        <p  className="text-md">{subheading}</p>
    </div>
  )
}

export default Title