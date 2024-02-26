"use client";
import { Input, Button, Textarea, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import * as actions from "@/actions";
import { useFormState } from "react-dom";
import Form_button from "../common/form_button";

interface PostCreateFormProps {
  slug: string;
}

export default function Post_create_form({ slug }: PostCreateFormProps) {
  const [formState, action] = useFormState(actions.create_post.bind(null, slug), { errors: {} });
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg   ">Create a Post</h3>
            {/* <input type="text" name="topic" value={slug} className="hidden" /> */}
            <Input name="title" label="Title" labelPlacement="outside" placeholder="Title" isInvalid={!!formState.errors.title} errorMessage={formState.errors.title?.join(", ")} />
            <Textarea name="content" label="Content" labelPlacement="outside" placeholder="Write post content here." isInvalid={!!formState.errors.content} errorMessage={formState.errors.content?.join(", ")} />
            {formState.errors._form && <div className="  text-customPink  text-center  ">{formState.errors._form?.join(", ")}</div>}
            {/* <Button type="submit">Submit</Button> */}
            <Form_button>Submit</Form_button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
