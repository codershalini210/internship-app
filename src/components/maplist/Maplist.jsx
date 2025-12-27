
export default function Maplist() {
    let fruits = ["Apple","banana","Orange","Kiwi","Orange"]
    let fruitsUI = fruits.map((f,index)=><li key={index}>{f}</li>)
  return (
    <div>Fruits List : 
        <ul>
            {fruitsUI}
        </ul>
    </div>
  )
}
