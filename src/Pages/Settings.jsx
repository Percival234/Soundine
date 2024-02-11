import TitleMain from '@UI/Titles/TitleMain';
import SettingsForm from '@Components/Settings/SettingsForm';
import ContainerRounded from '@UI/Containers/ContainerRounded';

export default function Settings() {
  return (
    <ContainerRounded className="items-center bg-white dark:bg-zinc-900">
      <TitleMain>Customize Your Musical Space</TitleMain>
      <SettingsForm />
    </ContainerRounded>
  );
}
