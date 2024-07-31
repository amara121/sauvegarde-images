import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import Cropper from "react-easy-crop";

const CropDialog = ({
  isOpen,
  onClose,
  onCropComplete,
  imageSrc,
  crop,
  setCrop,
  zoom,
  setZoom,
  onCropAreaChange,
}) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogTrigger>
        {/* Trigger can be a hidden button if not directly visible */}
      </AlertDialogTrigger>
      <AlertDialogContent className="flex items-center justify-center p-4 bg-white rounded-lg">
        <div className="relative bg-white rounded-lg p-6 w-full max-w-md">
          <AlertDialogTitle>Crop Image</AlertDialogTitle>
          <AlertDialogDescription>
          </AlertDialogDescription>
            {imageSrc && (
              <div className="relative">
                <Cropper
                  image={imageSrc}
                  crop={crop}
                  zoom={zoom}
                  aspect={1}
                  cropShape="round"
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropAreaChange}
                />
              </div>
            )}
          <div className="flex justify-end mt-4">
            <AlertDialogAction
              onClick={onCropComplete}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Crop Image
            </AlertDialogAction>
            <AlertDialogCancel
              onClick={onClose}
              className="ml-2 px-4 py-2 bg-gray-500 text-white rounded"
            >
              Cancel
            </AlertDialogCancel>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CropDialog;
