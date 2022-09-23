const About = () => {
  const age = () => {
    const d = new Date()
    let year = d.getFullYear()
    return year - 2003
  }
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          class="object-cover object-center rounded"
          width={400}
          alt="Photo"
          src="Photo.jpg"
        ></img>
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
            Hello, I'm
            <br class="hidden lg:inline-block"></br>Nisarg Parimal Patel
          </h1>
          <p class="mb-8 leading-relaxed text-gray-100 text-2xl">
            I'm a {age()} years old individual who is currently studying in
            R.N.G.Patel Institute of Technology in Computer Science And
            Engineering Department. I am self Learner and I am have high
            curiosity level towards gaining knowledge. <br></br> I'm Aspiring to
            enter the field of Game development. <br></br> My work is my hobby
            i.e programming. With programming I love puzzles and Cubes as my
            hobby.{' '}
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
