import AccountBenefit from "@/components/auth/AccountBenefit.component";
import SocialConnect from "@/components/auth/SocialConnect.component";
import Navbar from "@/components/blocks/Navbar.block";
import Logo from "@/components/branding/Logo.component";
import Button from "@/components/core/Button.component";
import Card from "@/components/core/Card.component";
import Input from "@/components/core/Input.component";
import Section from "@/components/core/Section.component";
import Text from "@/components/core/Text.component";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Section className="h-[88vh] flex items-center">
        <div className="w-8/12 mx-auto grid grid-cols-12 gap-x-12 -mt-24">
          <div className="col-span-6">
            <div className="mb-12">
              <Text as="h1" variant="h2" className="!text-neutral-900">
                WeCare Health
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </div>

            <div className="flex flex-col gap-y-8 lg:!max-w-sm 2xl:!max-w-md">
              <AccountBenefit title="Programare online in 5 minute">
                Nu te mai astepta la coada telefonica. Inscrie-te acum si
                programeaza-te in cateva minute
              </AccountBenefit>

              <AccountBenefit title="Documentele tale sunt in siguranta">
                Poti sa accesezi toate documentele oferite de medic de oriunde
                din lume.
              </AccountBenefit>

              <AccountBenefit title="Suport chat">
                Nu ai o problema serioasa? Intreaba-ti medicul cum ai putea
                remedia situatia prin chat-ul nostru online.
              </AccountBenefit>
            </div>
          </div>

          <div className="col-span-6">
            <Card contentClass="flex flex-col gap-6">
              <Text as="h3" className="text-neutral-900">
                Bine ai revenit!
              </Text>

              <div className="grid grid-cols-2 gap-x-2">
                <SocialConnect className="w-full" social="Google" />
                <SocialConnect className="w-full" social="GitHub" />
              </div>

              <div className="flex items-center gap-x-2">
                <hr className="w-full border-[1px] rounded-full" />

                <Text as="span" className="!text-gray-500">
                  SAU
                </Text>

                <hr className="w-full border-[1px] rounded-full" />
              </div>

              <div className="flex flex-col gap-y-4">
                <Input
                  name="authEmail"
                  type="email"
                  label={"Email"}
                  placeholder="Enter your email"
                  className="w-full"
                />

                <Input
                  name="authPassword"
                  type="password"
                  label={"Password"}
                  placeholder="Enter your password"
                  className="w-full"
                />

                <div>
                  <Button className="!w-full mt-6">Autentifica-te acum</Button>

                  <Text as="span" className="mt-3 block">
                    Nu ai un cont?{" "}
                    <Link href="/client/sign-up">
                      <span className="text-primary-600">
                        Inregistreaza-te acum!
                      </span>
                    </Link>
                  </Text>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}
