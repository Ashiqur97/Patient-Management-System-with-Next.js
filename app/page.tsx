import PatientForm from "@/components/forms/PatientForm";
import RegisterForm from "@/components/forms/RegisterForm";
import { Button } from "@/components/ui/button";
import { getUser } from "@/lib/actions/patient.action";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  const Register = async ({params:{userId}}: SearchParamProps) => {
    const user = await getUser(userId);
  }

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
          <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
              <Image 
                src="/assets/icons/logo-full.svg"
                height={1000}
                width={1000}
                alt="patient"
                className="mb-12 h-10 w-fit"
              />
          
          <RegisterForm user={user} />

      
            <p className="copyright py-12">
            © 2024 CarePlus
            </p> 
          </div>
      </section>
      <Image 
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w--[50%]"
      />
    </div>
  );
}


