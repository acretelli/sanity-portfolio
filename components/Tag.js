const Tag = ({ title }) => {
  const getColor = () => {
    let color
    switch (title) {
      case "Travel":
        color = "rgb(250, 138, 138)"
        break
      case "Food": 
        color = "rgb(145, 210, 138)"
        break
      case "Family":
        color = "rgb(138, 138, 138)"
        break
      default:
        color = "rgb(129, 138, 228)"
    }

    return color
  }

  return (
    <div style={{ backgroundColor: getColor() }} className="tag">
      {title}
    </div>
  )
}

export default Tag