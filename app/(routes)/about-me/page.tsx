import { Avatar } from "@/components/Avatar";
import { Container } from "@/components/Container";
import { TransitionPage } from "@/components/TransitionPage";

export default function PageAboutMe() {
  return (
    <>
      <TransitionPage />
      <Container>
        <Avatar />
        <h1>
          Toda mi
          <span> trayectoria profesional</span>
        </h1>
      </Container>
    </>
  );
}
