import { useNavigate } from "react-router-dom"
import Button from "../../components/ui/Button";


export default function NotFoundPage() {
     const navigation = useNavigate();
     return (
          <>
               <div class=" px-6  h-screen flex bg-primary dark:bg-secondary   items-center justify-center">
                    <div class="text-center  flex justify-center items-center flex-col">
                         <h1 class="text-9xl dark:text-primary text-secondary  font-bold  ">404</h1>
                         <p class="text-2xl font-light text-secondary  dark:text-primary/70  mt-4">Oops! Page not found</p>
                         <p class=" dark:text-primary/60 text-secondary/50  mt-4 mb-8">The page you are looking for might have been removed or is temporarily unavailable.</p>

                         <Button onClick={() => navigation('/')}>Go Back To Homepage</Button>
                    </div>
               </div>
          </>
     )
}
