const Title = ({heading, subheading}) => {

  const titleStyles ={
    borderBottom: "3px solid black",
    borderTop: "3px solid black",
    width: "30%",
    margin: "auto",
    padding: "20px",
    marginBottom: "10px"
  }

  return (
    <div className="text-center my-4 lg:mb-10 md:mb-6 md:py-4">
        <h3 style={titleStyles} className="lg:text-3xl md:text-xl text-md mb-3">{heading}</h3>
        <p  className="text-md">{subheading}</p>
    </div>
  )
}

export default Title