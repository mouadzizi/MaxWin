import {db} from '../../API/firebase'

export const fitler = async(name)=>{
    const data = db.collection('posts').where('category.item','==',name).get()

    return await Promise.all((await data).docs.map(d=>{
        return {
            ...d.data(),
            key:d.id
        }
    }))
}
