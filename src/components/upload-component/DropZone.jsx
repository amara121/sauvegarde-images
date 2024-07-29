"use client"
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const DropZone = ({ onDrop, onError }) => {
  const onDropAccepted = useCallback((acceptedFiles) => {
    onDrop(acceptedFiles[0]); // On ne prend que le premier fichier
  }, [onDrop]);

  const onDropRejected = useCallback((fileRejections) => {
    const errorMessages = fileRejections.map(rejection => {
      const { file, errors } = rejection;
      return errors.map(e => `${file.name}: ${e.message}`).join('\n');
    }).join('\n');
    onError(errorMessages);
  }, [onError]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropAccepted,
    onDropRejected: onDropRejected,
    accept: 'image/jpeg, image/png, image/jpg',
    maxSize: 5 * 1024 * 1024, // 5 Mo
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-md p-4 flex justify-center items-center ${isDragActive ? 'border-blue-500' : 'border-gray-300'}`}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-blue-500">Drop the file here ...</p>
      ) : (
        <p className="text-gray-500">Drag 'n' drop an image here, or click to select an image (JPG, JPEG, PNG, max 5MB)</p>
      )}
    </div>
  );
};

export default DropZone;
