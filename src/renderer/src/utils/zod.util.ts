import { z } from "zod"
import { Constant } from "../constant/common.constant"

export const ZodNameString = z
    .string()
    .trim()
    .min(2)
    .regex(new RegExp(Constant.STRING_NUM_SPACE_PATTERN), "Only character, number and space are allowed")

export const ZodNumericString = z
    .string()
    .trim()
    .regex(new RegExp(Constant.STRING_NUM_PATTERN), "Only number is allowed")

export const ZodNumericNonNegString = z
    .string()
    .trim()
    .regex(new RegExp(Constant.STRING_NUM_PATTERN_NON_NEG), "Only positive number is allowed")

export const ZodSimpleString = z.string().trim().nonempty()
export const ZodSimpleStringOptional = z.string().trim().optional()

export const ZodEmailString = z.string().toLowerCase().trim().max(255).email("Invalid email address")

export const ZodPasswordString = z
    .string()
    .trim()
    .min(6, "minium 6 character long")
    .max(150, "max 150 character long")

export const ZodOnlyDateString = z
    .string()
    .trim()
    .datetime()
    .transform((value) => {
        return value.split("T")[0]
    })

const MAX_FILE_SIZE = 5 * 1000000 // 5MB
const MAX_PDF_FILE_SIZE = 15 * 1000000 // 15MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"]

export const ZodImageFile = z
    .instanceof(File)
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), "Only jpeg, jpg, png and webp files are allowed")
    .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is ${MAX_FILE_SIZE} bytes`)

export const ZodPdfFile = z
    .instanceof(File)
    .refine((file) => file.type === "application/pdf", "Only pdf files are allowed")
    .refine((file) => file.size <= MAX_PDF_FILE_SIZE, `Max file size is ${MAX_FILE_SIZE} bytes`)

export const ZodAudioFile = z
    .instanceof(File)
    .refine((file) => file.type === "audio/mpeg", "Only mp3 files are allowed")
    .refine((file) => file.size <= MAX_PDF_FILE_SIZE, `Max file size is ${MAX_PDF_FILE_SIZE} bytes`)
