type ParamsProps = {
  params:{
  productId:string
}}
export default function ProductDetails({params}:ParamsProps) {
  return (
    <h1>Product {params.productId} Details</h1>
  )
}
