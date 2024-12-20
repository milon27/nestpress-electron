export interface IGetPresignedUploadUrlResponse {
    presignedUrl: string // "https://your-space-name.nyc3.digitaloceanspaces.com/xxxx?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00BB9ZUWAM3LDBD3CE%2F20241130%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241130T072429Z&X-Amz-Expires=1800&X-Amz-Signature=a93459acf38a78e2ecc2fff0f58899c5ee1aa04d1bd9fdc307228bbc2df4b8b7&X-Amz-SignedHeaders=host&x-amz-acl=public-read&x-id=PutObject"
    fileUrl: string // `https://${EnvConfig.DO_SPACES_NAME}.${EnvConfig.DO_SPACES_REGION}.cdn.digitaloceanspaces.com/${filename}`
}
