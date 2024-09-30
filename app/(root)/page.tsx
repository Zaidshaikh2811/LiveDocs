

import ActiveCollaborator from "@/components/ActiveCollaborator";
import AddDocumentBtn from "@/components/AddDocumentBtn";
import Header from "@/components/header";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {

  const clerkUser = await currentUser();
  if (!clerkUser) redirect("/sign-in")

  const documents = []

  return (

    <main className="home-container">
      <Header className='sticky left-0 top-0'>
        <div className="flex items-center gap-2 lg:gap-4">

          <SignedIn>
            <UserButton></UserButton>
          </SignedIn>
        </div>
      </Header>
      <div>
        {documents.length > 0 ? (
          null

        ) : (
          <div className="document-list-empty">
            <Image
              src="/assets/icons/doc.svg"
              width={64}
              height={64}
              alt="document icon"
              className="mx-auto"
            />
            <AddDocumentBtn
              userId={clerkUser.id}
              email={clerkUser.emailAddresses[0].emailAddress}
            />
          </div>

        )}
      </div>
    </main>
  );
}
