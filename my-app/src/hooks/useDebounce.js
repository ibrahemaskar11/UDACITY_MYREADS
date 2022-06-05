/*
-useDebounce is a custom hook used to implement debounce search
*/
import { useEffect, useState } from "react"
const useDebounce = (value, delay) =>{
    const [debouncedValue, setDebouncedValue] = useState('')
    //useEffect is called whenever the value or the delay is changed
    useEffect(()=>{
        //a timer variable is initialized with the delay passed to the hook
        //if the value is changed before the timer finishes the timer is to be cleared and set up again using the useEffect clean up function  
        const timer = setTimeout(()=>{
            setDebouncedValue(value);
        },delay)
        return ()=>{
            clearTimeout(timer)
        }
    },[value,delay])
    return debouncedValue;
}
export default useDebounce