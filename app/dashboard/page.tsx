import { buttonVariants } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { prisma } from "../utils/db";
import { BlogPostCard } from "@/components/general/BlogpostCard";

async function getData(userId: string) {
  const data = await prisma.blogPost.findMany({
    where: {
      authorId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },    
  });

  return data;  
}

export default async function DashboardRoute() {
  const {getUser} = getKindeServerSession();
  const user = await getUser();

  // const data = await getData(user.id);
  const data = await getData(user?.id as string);
   
  return (
    <div>
        <div className="flex items-center justify-between mb-4 mt-6">
          <h2 className="text-xl font-medium ">Your Blog Articles</h2>

          <Link className={buttonVariants() } href="/dashboard/create">
           Create A Post          
          </Link>        
        </div>   
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-9">
        {data.map((item) => (
          <BlogPostCard data={item} key={item.id}/>
        ))}
      </div>  
    </div>
  );
}