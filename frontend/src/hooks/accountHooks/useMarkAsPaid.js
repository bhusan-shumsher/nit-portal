import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { markAsPaid } from "../../services/apiAccount";

export function useMarkAsPaid(){
    const {mutate: asPaid, isLoading} = useMutation({
        mutationFn: ({rollNumber, paidStatus})=>markAsPaid({rollNumber,paidStatus}),
        onSuccess: ()=>{
            toast.success('Successfully marked as paid!!')
        },
        onError: err=>{
            console.log('Error',err);
            // add toast
            toast.error('Cant change status now');
        }
    })
    return {asPaid,isLoading}
}