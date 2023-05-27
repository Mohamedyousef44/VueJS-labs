import {ref} from 'vue';
// import axios from 'axios'

export function useService(){

    let data = ref(null)
    let error = ref(null)

    const fetchData = async ()=>{
        try{
            const res = await fetch('http://localhost:3000/movies')
            if(!res.ok){
                error.value = "could not fetch data"
            }else{
                
                data.value = await res.json()
                console.log(data.value)
            }

        }catch(err){
            error.value = err
        } 
    }

    return { data, error , fetchData}
}