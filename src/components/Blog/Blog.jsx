import React from 'react'

export default function Blog() {
    const data = [
        {
            q: "How will you improve the performance of a React Application?",
            a: "React by default design such a way that give you faster speed without specifically do anything about performance optimization.However yet if I am  facing any problem with the speed of my app I can follow these steps.First of all,I always use the minified build version for production.Make sure  deploy the right build folder in my production server.Secondly,if my application required to load hundreds,thousands or millions of data i can use 'windowing' technique to reduce the loading time.I use react-virtualized library for this purpose."
        },
        {
            q: "What are the different ways to manage a state in a React application?",
            a: "There are mostly three way we use to manage a state in a React application at functional component.These are useState hook,useReducer hook and Context Api.For manage state in local capacity we use useState hook.it is very handy.for more complex state management we use useReducer instead of useState.However when it requires to manage state in global capacity we can use Context API."
        },
        {
            q: "How does prototypical inheritance work?",
            a: "We use prototypical inheritance ,when we need to inherit properties and functions from a different object.We can get a default property in object called '__proto__'.We can use that in a child object to get the access to it parent's properties and functions.example:__proto__:parentObjectName."
        },
        {
            q: "You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?",
            a: "Well,first i will get the value from the search input box.Then I will check if it is a valid input string or not.If yes,then I will filter out all the product of this array  which name includes the search result.I will be using filter() and includes() method for this purpose.After that i will create a new array to show the result."
        },
        {
            q: "What is a unit test? Why should write unit tests?",
            a: "A unit test is a process to test a piece of code that can be isolated logically in a system.The result of the test let you know how your code performing.It is very important part of a development pase.When  users interact with your application,there  create thousands of use cases.If those use cases do not handle properly beforehand,then application will crash.So,as a developer it impossible to remember all the use case and write  the perfect codes that will handle every use case.Thats why many people prefer TDD or Test Driven Development to avoid unnecessary errors and crashes."
        },
    ]


    return (
        <section>
            <div className="max-w-screen-xl px-4 py-8 mx-auto">
                <div className="relative max-w-3xl mx-auto text-center">
                    <span className="absolute inset-x-0 h-px -translate-y-1/2 bg-black/10 top-1/2"></span>

                    <h2 className="relative inline-block px-4 text-2xl font-bold text-center bg-white capitalize">
                        Our Blog
                    </h2>
                </div>
                <section class="text-gray-600 body-font overflow-hidden">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-wrap -m-12">
                            {
                                data?.map((blog, index) => (
                                    <div class="px-12 md:w-1/2 flex flex-col items-start" key={index}>
                                        <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{blog.q}</h2>
                                        <p class="leading-relaxed mb-8">{blog.a}</p>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}
