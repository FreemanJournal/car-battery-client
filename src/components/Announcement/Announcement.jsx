import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'
import { FiCopy } from 'react-icons/fi';
export default function Announcement() {
    
    return (
        <div>
            <div className="px-4 py-3 text-white bg-slate-600">
                <p className="text-sm font-medium text-center">
                    <CopyToClipboard text="shakil@admin.com"
                        onCopy={() => toast.info('shakil@admin.com is copied!')}>
                        <span className='flex justify-center'> For testing purpose : email & password : <span className='font-bold bg-white text-slate-600 font-mono py-1 px-2 mx-2 rounded-md cursor-pointer flex gap-1 justify-center '> <FiCopy/> <span> shakil@admin.com</span></span> ( Admin Dashboard )</span>
                    </CopyToClipboard>
                   
                </p>
            </div>
        </div>
    )
}
