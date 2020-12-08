import React, { useState } from 'react'
import Dropzone from 'react-dropzone';
import Axios from 'axios';
import { useSelector } from 'react-redux';
function FileUpload(props) {

    const [image, setimage] = useState([])
    const signin = useSelector((state) => state.signIn);
    const { userInfo } = signin;

    const onDrop = (files) => {
        let formData = new FormData();
        
        const config = {
            headers: { 'content-type': 'multipart/form-data' , Authorization: "Bearer " + userInfo.token }
        }
        formData.append("file", files[0])
        //save the Image we chose inside the Node Server 
        Axios.post('/api/shop/uploadImage', formData, config)
            .then(response => {
                if (response.data.success) {

                    setimage([...image, response.data.image])
                    props.refreshFunction([...image, response.data.image])

                } else {
                    alert('Failed to save the Image in Server')
                }
            })
    }


    const onDelete = (image) => {
        const currentIndex = image.indexOf(image);

        let newimage = [...image]
        newimage.splice(currentIndex, 1)

        setimage(newimage)
        props.refreshFunction(newimage)
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Dropzone
                onDrop={onDrop}
                multiple={false}
                maxSize={800000000}
            >
                {({ getRootProps, getInputProps }) => (
                    <div style={{
                        width: '300px', height: '240px', border: '1px solid lightgray',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                        <div type="plus" style={{ fontSize: '3rem' }} />

                    </div>
                )}
            </Dropzone>

            <div style={{ display: 'flex', width: '350px', height: '240px', overflowX: 'scroll' }}>

                {image.map((image, index) => (
                    <div onClick={() => onDelete(image)}>
                        <img style={{ minWidth: '300px', width: '300px', height: '240px' }} src={`http://localhost:5000/${image}`} alt={`productImg-${index}`} />
                    </div>
                ))}


            </div>

        </div>
    )
}

export default FileUpload
