import { Metadata } from "next"
type ParamsProps = {
  params:{
  productId:string
}}
export const generateMetadata = ({params}:ParamsProps):Metadata =>{
  return {
    title:`Product ${params.productId}`,
  }
};
export default function ProductDetails({params}:ParamsProps) {
  return (
    <h1>Product {params.productId} Details</h1>
  )
}
