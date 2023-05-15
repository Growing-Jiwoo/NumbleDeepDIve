import { useRef, useImperativeHandle, forwardRef } from "react";
import AWS from "aws-sdk";

interface S3ImgInputProps {
  onImageUploadSuccess: (imageUrl: string) => void;
}

export interface S3ImgInputRef {
  uploadS3: () => Promise<void>;
}

const S3ImgInput = forwardRef<S3ImgInputRef, S3ImgInputProps>(
  ({ onImageUploadSuccess }, ref) => {
    const childFunctionRef = useRef<any>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const uploadS3 = () => {
      return new Promise<void>((resolve, reject) => {
        const file = inputRef.current?.files?.[0];

        if (file) {
          const REGION = "";
          const ACCESS_KEY_ID = "";
          const SECRET_ACCESS_KEY = "";
          const BUCKET_NAME = "";
          const KEY_PREFIX = "image/";
          const fileName = `${KEY_PREFIX}${file?.name}`;

          AWS.config.update({
            region: REGION,
            accessKeyId: ACCESS_KEY_ID,
            secretAccessKey: SECRET_ACCESS_KEY,
          });

          const s3 = new AWS.S3({ apiVersion: "2006-03-01" });
          const params = {
            ACL: "public-read",
            Bucket: BUCKET_NAME,
            Key: fileName,
            Body: file,
          };

          s3.upload(
            params,
            (err: Error, data: AWS.S3.ManagedUpload.SendData) => {
              if (err) {
                reject(err);
              } else {
                onImageUploadSuccess(data.Location);
                resolve();
              }
            }
          );
        } else {
          onImageUploadSuccess("");
          resolve();
        }
      });
    };

    childFunctionRef.current = uploadS3;

    useImperativeHandle(ref, () => ({
      uploadS3: childFunctionRef.current,
    }));

    return (
      <>
        <input accept="image/*" type="file" ref={inputRef} />
      </>
    );
  }
);

export default S3ImgInput;
