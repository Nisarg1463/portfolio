import React from "react";

function Home() {
    return (
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img class="object-cover object-center rounded" alt="hero" src="home.png"></img>
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">Welcome to my
                        <br class="hidden lg:inline-block"></br>Portfolio Website
                    </h1>
                    <p class="mb-8 leading-relaxed text-2xl text-gray-100">This Website is the collection of information regarding who am I and what I have done.</p>
                </div>
            </div>
        </section>
    );
}

export default Home;