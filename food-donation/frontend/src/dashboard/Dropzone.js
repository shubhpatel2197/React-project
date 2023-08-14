import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'


function MyDropzone() {
  const onDrop = useCallback(files => {
   
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        
          <h4>Drop the photo here</h4>
         
      }
    </div>
  )
}
export default MyDropzone;


