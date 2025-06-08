import { Video } from 'lucide-react'
import React from 'react'

function CreateOptions() {
  return (
    <div className='grid grid-cols-2 gap-5'>
        <div className='bg-white border border-gray-200 rounded-lg p-5'>
            <Video className='p-3 text-primary bg-purple-100 rounded-lg h-10 w-10'/>
        </div>
        <div></div>
    </div>
  )
}

export default CreateOptions