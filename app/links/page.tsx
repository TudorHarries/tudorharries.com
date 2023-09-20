import Link from "next/link";

export default function Links() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="flex-col mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Tudor Harries.</h2>
                    <p className="mt-4 text-md leading-8 text-gray-600">
                       Links to things.
                    </p>
                </div>

                <div className="flex-col mt-16">
                    <div>
                        <Link className="hover:text-orange-700" href="https://blogs.surrey.ac.uk/professional-training-placement-experience/2021/01/29/help-ive-broken-it-again-and-other-stories-from-my-year-in-industry-so-far-part-1/">‘Help I’ve broken it again’ and other stories from my Year In Industry so far (part 1)</Link>
                    </div>
                    <div>
                        <Link className="hover:text-orange-700" href="https://blogs.surrey.ac.uk/professional-training-placement-experience/2021/01/29/help-ive-broken-it-again-and-other-stories-from-my-year-in-industry-so-far-part-2/">‘Help I’ve broken it again’ and other stories from my Year In Industry so far (part 2)</Link>
                    </div>
                    <div>
                        <Link className="hover:text-orange-700" href="https://blogs.surrey.ac.uk/professional-training-placement-experience/2021/05/30/oh-wait-i-think-ive-fixed-it-and-other-stories-from-the-second-half-of-my-year-in-industry/">“Oh wait, I think I’ve fixed it” and other stories from the second half of my Year in Industry</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
