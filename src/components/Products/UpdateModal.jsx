import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Loader from '../../utilities/Loader'
import UpdateProducts from './UpdateProducts'
export default function UpdateModal() {
    const {updateItem, setUpdateItem} = useContext(GlobalContext)
    if(!updateItem._id){
        return <></>
    }

    return (
        <>
            <input type="checkbox" id="productUpdateModal" class="modal-toggle" />
            <label for="productUpdateModal" class="modal cursor-pointer">
                
                <label class="modal-box relative max-w-full" for="">
                <label for="productUpdateModal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <UpdateProducts/>
                </label>
            </label>
        </>

    )
}
