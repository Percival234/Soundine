import Logo from '@Components/Logo/Logo';
import Text from '@UI/Text/Text';
import LinkOutline from '@UI/Links/LinkOutline';

export default function SignInContent() {
  return (
    <div className="animate-bounceIn opacity-0 translate-y-full p-10 hidden md:flex flex-col justify-center text-center text-white">
      <Logo />
      <Text className="font-medium mt-3 mb-5">Start Your musical journey now!</Text>
      <LinkOutline to="/user/sign-up">Sign up</LinkOutline>
    </div>
  );
}
