import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { FormProps } from './form.props';
import { ChangeEvent, useRef, useState } from 'react';
import { Textarea } from '../textarea/textarea';
import { VirtualCard } from '../virtual-card';
import { generateImage } from '@/utils/generateImage';
import { useCreateCollaboratorMutation } from '@/graphql/generated';
import { generateFormSchema } from './schemas/generate-card-schema';

type GenerateFormData = z.infer<typeof generateFormSchema>;

export const Form = (props: FormProps) => {
  const virtualCardRef = useRef<HTMLDivElement>(null);
  const [username, setUsername] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GenerateFormData>({
    resolver: zodResolver(generateFormSchema),
  });

  const [createCardInfo, { loading }] = useCreateCollaboratorMutation();

  async function handleSubmitForm({
    githubUrl,
    linkedinUrl,
    name,
    description,
  }: GenerateFormData) {
    await createCardInfo({
      variables: {
        name,
        description,
        linkedinUrl,
        githubUrl,
      },
    });

    generateImage(name, virtualCardRef);
  }

  return (
    <>
      <div className="bg-white h-full">
        <h1 className="text-xl font-bold ml-16">QR Code Image Generator</h1>
        <form
          className="px-4 flex flex-col gap-4 mt-2"
          onSubmit={handleSubmit(handleSubmitForm)}
          {...props}
        >
          <div>
            <Input
              id="name"
              label="Name"
              placeholder="Your name"
              validationErrorMessage={errors.name?.message}
              {...register('name')}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setUsername(e.currentTarget.value)
              }
            />
          </div>
          <Input
            id="linkedinUrl"
            label="Linkedin URL"
            defaultValue="https://www.linkedin.com/"
            placeholder="https://www.linkedin.com/company/buzzvel/"
            validationErrorMessage={errors.linkedinUrl?.message}
            {...register('linkedinUrl')}
          />
          <Input
            id="githubUrl"
            label="Github URL"
            defaultValue="https://www.github.com/"
            placeholder="https://www.github.com/buzzvel"
            validationErrorMessage={errors.githubUrl?.message}
            {...register('githubUrl')}
          />
          <Textarea
            label="Description"
            placeholder="Write your brief description here"
            validationErrorMessage={errors.description?.message}
            {...register('description')}
          />
          <div className="w-2/4">
            <Button disabled={loading} type="submit" label="Generate Image" />
          </div>
        </form>
      </div>
      <VirtualCard ref={virtualCardRef} user={{ name: username }} />
    </>
  );
};
