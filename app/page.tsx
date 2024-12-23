import Nav from "@/components/Nav";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { getUsersList } from "./utils/api";
import UsersDashboard from "@/components/UsersDashboard";



export default async function Home() {
    const queryClient = new QueryClient();

     await queryClient.prefetchQuery({
        queryKey: ['users'],
        queryFn: getUsersList,

    });


    return (
        <section className="max-w-screen-xl mx-auto px-4">
            <Nav />
            <HydrationBoundary state={dehydrate(queryClient)} >
                <UsersDashboard />
            </HydrationBoundary>
        </section>
    )
}
