import { useRouter } from "next/router"
import Service from "@/component/singleService";

const ServiceType  = () =>{
    const {query} = useRouter()
    if (query && query?.serviceType){
        return (
            <Service  data={{companyName:"Neosyn", pageTitle:query?.serviceType, restData:"dataObkectHere"}}/>
        )
    }

}

export default ServiceType