import Text from '@UI/Text/Text';
import Logo from '@Components/Logo/Logo';
import LinkOutline from '@UI/Links/LinkOutline';

import { SOUNDINE_MAIN_PLAYLIST_ID } from '@Constants/Constants';

export default function Advertising() {
  return (
    <div className="w-72 p-6 flex flex-col gap-6">
      <Logo />
      <div className="rounded-lg bg-gradient-to-tr from-purple-800 to-main p-5 grid gap-5 text-white">
        <Text>Start your musical journey with our selection!</Text>
        <LinkOutline to={`/music/playlists/${SOUNDINE_MAIN_PLAYLIST_ID}`}>Start now</LinkOutline>
      </div>
    </div>
  );
}
