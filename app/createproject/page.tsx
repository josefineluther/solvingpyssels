import {
    Field,
    FieldDescription,
    FieldLabel,
    FieldLegend,
    FieldSet,
} from '@/components/ui/field'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function CreateProject() {
    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-center">
            <FieldSet>
                <FieldLegend>Create Project</FieldLegend>
                <FieldDescription>
                    Fill in the details to create a new project
                </FieldDescription>
                <Field>
                    <FieldLabel htmlFor="name">Project Name</FieldLabel>
                    <Input
                        id="name"
                        autoComplete="off"
                        placeholder="Knitted Sweater"
                    />
                </Field>
                <Field>
                    <FieldLabel htmlFor="description">Description</FieldLabel>
                    <Textarea id="description" />
                </Field>
                <Field>
                    <FieldLabel htmlFor="image">Upload Image</FieldLabel>
                    <Input id="image" type="file" />
                </Field>
                <Field>
                    <FieldLabel htmlFor="category">Category</FieldLabel>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Choose a category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="crocheting">
                                Crocheting
                            </SelectItem>
                            <SelectItem value="knitting">Knitting</SelectItem>
                            <SelectItem value="sewing">Sewing</SelectItem>
                            <SelectItem value="art">Art</SelectItem>
                            <SelectItem value="craft">Craft</SelectItem>
                            <SelectItem value="jewelry">Jewelry</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                </Field>
                <Button type="submit">Create Project</Button>
            </FieldSet>
        </main>
    )
}
