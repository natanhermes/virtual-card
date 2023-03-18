import { useGetCollaboratorInfoByNameQuery } from '@/graphql/generated';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../button';
import { Text } from '../text';

export function InfoCard() {
  const { name } = useParams();
  const nameFormated = name?.charAt(0).toUpperCase()! + name?.slice(1);

  const { data, loading } = useGetCollaboratorInfoByNameQuery({
    variables: {
      name: nameFormated,
    },
  });

  const infoCard = data?.collaborators[0]!;

  return (
    <div className="py-4 px-8">
      <Text text={`Hello, my name is ${nameFormated}`} />

      {loading ? (
        <div>
          <Text text={`Loading data...`} />
        </div>
      ) : (
        <>
          <div className="mt-8 flex flex-col">
            <Text className="text-5xl font-bold" text="My history" />
            <Text className="font-medium mt-8" text={infoCard?.description!} />
          </div>

          <div className="mt-4 sm:w-1/4 xs:w-3/4 flex flex-row gap-4">
            <Link className="w-full" to={infoCard?.githubUrl!}>
              <Button label="Github" />
            </Link>
            <Link className="w-full" to={infoCard?.linkedinUrl!}>
              <Button label="Linkedin" />
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
