import { Constant } from "@renderer/constant/common.constant"
import axios, { AxiosProgressEvent } from "axios"
import { IResponse } from "../_common/common.dto"
import { ApiService } from "../api.service"
import { IGetPresignedUploadUrlResponse } from "./upload.dto"

export const UploadService = {
    getPresignedUrl: async (fileFolderNameWithExt: string, filetype = Constant.MIMETYPE) => {
        const { data } = await ApiService.get<IResponse<IGetPresignedUploadUrlResponse>>(
            `/v1/s3/get-upload-url?filename=${fileFolderNameWithExt}&filetype=${filetype}`
        )
        return data.response
    },
    convertFileToBlob: (file: File) => {
        return new Blob([file], { type: file.type })
    },
    getExtensionFromFileName: (fileName: string) => {
        return fileName.split(".").pop()
    },
    upload: async (presignedUrl: string, videoBlob: Blob) => {
        await axios.put(presignedUrl, videoBlob, {
            // headers: {
            //     "Content-Type": "video/mp4",
            // },
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onUploadProgress: (_progressEvent: AxiosProgressEvent) => {
                // const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total!)
                // setUploadProgress(progress) // Update progress // todo: use zustand here to track all upload
            }
        })
    }
}
