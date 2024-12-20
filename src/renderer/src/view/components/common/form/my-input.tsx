import { Control, FieldValues, Path } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form"
import { Input } from "../../ui/input"

type TypeInputAndTextArea = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

interface IMyInputWithRHF<T extends FieldValues> extends TypeInputAndTextArea {
    name: Path<T>
    control: Control<T>
    label: string
    placeholder?: string
}

export function MyInputWithRHF<T extends FieldValues>({
    name,
    control,
    label,
    placeholder,
    ...others
}: IMyInputWithRHF<T>) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input placeholder={placeholder || label} {...field} {...others} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
