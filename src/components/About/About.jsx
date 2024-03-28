const About = () => {
  return (
    <div className="text-center flex flex-col gap-10">
      <div
        className="hero md:h-[600px] rounded-3xl"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1597167100957-1dfa110c1c14?q=80&w=1616&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello Book Worms</h1>
            <p className="mb-5">Take a look at our most selling books!</p>
          </div>
        </div>
      </div>

      <h1 className="text-5xl font-bold"> BEST SELLERS</h1>
      <div className="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        <div className="carousel-item">
          <img
            c
            src="https://kinsta.com/wp-content/uploads/2021/10/zero-to-one-book.jpg"
            className="rounded-box h-[400px]"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1688011813i/27362503.jpg"
            className="rounded-box h-[400px]"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.gollancz.co.uk/wp-content/uploads/2020/12/hbg-title-9781473233959-97.jpg?w=445"
            className="rounded-box h-[400px]"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1693240059-81KKq7hh9-L.jpg?crop=1xw:1xh;center,top&resize=980:*"
            className="rounded-box h-[400px]"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/104eab71-ac32-4ce3-9952-e8264ac56636/d5e6oxt-955c2587-4b68-419d-b81f-2d12971c69bf.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEwNGVhYjcxLWFjMzItNGNlMy05OTUyLWU4MjY0YWM1NjYzNlwvZDVlNm94dC05NTVjMjU4Ny00YjY4LTQxOWQtYjgxZi0yZDEyOTcxYzY5YmYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7ydMtYaqtlILmxTfndehfijDd50WEwmFB-GmSV9QNyk"
            className="rounded-box h-[400px]"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://covers.shakespeareandcompany.com/97805713/9780571334650.jpg"
            className="rounded-box h-[400px]"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.creatopy.com/blog/wp-content/uploads/2020/08/The-Godfather-Book-Cover-399x600.jpg"
            className="rounded-box h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
