import { notFound } from "next/navigation"

type ReviewProps = {
    params : {
        productId:string
        reviewId:string
    }
}
export default function ReviewDetail({params}:ReviewProps) {
  if (parseInt(params.reviewId) > 1000){
    notFound()
  }
  return (
    <h1>Review {params.reviewId} for product {params.productId} </h1>
  )
}
