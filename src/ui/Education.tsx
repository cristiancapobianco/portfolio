const courses = [
  { logo: "https://assets.soyhenry.com/henry-landing/assets/Henry/logo-white.png", name: "Henry", specification: "Developer Full Stack", date: "2023-2024" },
  { logo: "https://play-lh.googleusercontent.com/dsCkmJE2Fa8IjyXERAcwc5YeQ8_NvbZ4_OI8LgqyjILpXUfS5YhEcnAMajKPrZI-og", name: "Udemy", specification: "Developer JavaScript", date: "2022-2023" },
  { logo: "https://play-lh.googleusercontent.com/dsCkmJE2Fa8IjyXERAcwc5YeQ8_NvbZ4_OI8LgqyjILpXUfS5YhEcnAMajKPrZI-og", name: "Udemy", specification: "Developer C#", date: "2021-2022" },
];

export default function Education() {
  return (
    <div className="space-y-6 p-6">
      {courses.map((course, index) => (
        <div
          key={index}
          className="relative flex items-center space-x-4 h-24 bg-gray-800 p-4 rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform group hover:scale-105 hover:border-2 hover:border-white box-border"
        >
          <img
            src={course.logo}
            alt={`${course.name} logo`}
            width={50}
            height={50}
            className="rounded"
          />
          <div className="ml-4 flex-1">
            <h1 className="text-xl font-bold">{course.specification}</h1>
            <h2 className="text-lg">{course.name}</h2>
            <p className="text-gray-400">{course.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
