import { navigation } from "@/config/navigation";
import KommyLink from "./a";
import Container from "./container";
import Logo from "./logo";

const nav = navigation.footerNav;
export default function Footer() {
  return (
    <Container fullSize as="footer">
      <hr className="mt-12 border-dark" />
      <Container
        as="div"
        className="flex flex-col py-12 sm:px-6 md:flex-row md:items-center md:justify-between"
      >
        {nav.length && (
          <div className="flex justify-center space-x-6 md:order-2">
            {nav.map((item) => (
              <KommyLink
                key={item.title}
                href={item.href}
                animatedUnderline
                className="font-medium text-dark"
              >
                {item.title}
              </KommyLink>
            ))}
          </div>
        )}
        <div className="mt-8 flex flex-row flex-nowrap items-center justify-center font-medium md:order-1 md:mt-0 md:justify-start">
          <Logo textSize="text-base font-medium" />
          <p className="ml-2">&copy; 2023</p>
        </div>
      </Container>
    </Container>
  );
}
