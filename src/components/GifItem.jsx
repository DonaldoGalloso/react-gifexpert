
export const GifItem = ({url,title,id}) => {
  return (
    <div className="card">
        <img src={url.url} alt={title}/>
    </div>
  )
}
