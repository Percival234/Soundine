import Text from '@UI/Text/Text';
import Logo from '@Components/Logo/Logo';
import LinkOutline from '@UI/Links/LinkOutline';

export default function SignUpContent() {
  return (
    <div className="animate-bounceIn -translate-y-full opacity-0 p-10 hidden md:flex flex-col justify-center text-center text-white">
      <Logo />
      <Text className="font-medium mt-3 mb-5">
        Continue your musical journey by logging into your account!
      </Text>
      <LinkOutline to="/user/sign-in">Sign in</LinkOutline>
    </div>
  );
}
