"use client";
import { Input, Button, Textarea, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import * as actions from "@/actions";
import { useFormState } from "react-dom";
import Form_button from "../common/form_button";

export default function Topic_Create_Form() {
  const [formState, action] = useFormState(actions.create_topic, { errors: {} });
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg   ">Create a Topic</h3>
            <Input name="name" label="Name" labelPlacement="outside" placeholder="Name" isInvalid={!!formState.errors.name} errorMessage={formState.errors.name?.join(", ")} />
            <Textarea name="description" label="Description" labelPlacement="outside" placeholder="Describe your topic" isInvalid={!!formState.errors.description} errorMessage={formState.errors.description?.join(", ")} />
            {formState.errors._form && <div className="  text-customPink  text-center  ">{formState.errors._form?.join(", ")}</div>}
            {/* <Button type="submit">Submit</Button> */}
            <Form_button>Submit</Form_button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
