import Image from 'next/image';
import { Mail, Phone, MapPin, Globe, Briefcase, GraduationCap, Code, Star, Heart } from 'lucide-react';

const cvData = {
  name: "LÊ DUY THẮNG",
  title: "KỸ SƯ CÔNG NGHỆ VẬT LÝ ĐIỆN TỬ VÀ TIN HỌC",
  contactHeader: [
    { icon: Mail, text: "leduythang2010@gmail.com", link: "mailto:leduythang2010@gmail.com" },
    { icon: Phone, text: "(+84) 344 702 605", link: "tel:+84344702605" },
    { icon: MapPin, text: "Dĩ An, Bình Dương" },
  ],
  sidebar: {
    photo: "/Web.png",
    education: [
      {
        degree: "Công nghệ Vật lý Điện tử và Tin học",
        school: "Trường Đại học Khoa học Tự nhiên, ĐHQG TP.HCM",
        period: "2022 - 2026",
        gpa: "GPA: 6.57"
      }
    ],
    skills: [
      { type: "Ngôn ngữ lập trình", items: ["C++, Python, JavaScript"] },
      { type: "Cơ sở dữ liệu", items: ["MySQL, PostgreSQL, MongoDB"] },
      { type: "Frameworks/Thư viện", items: ["Node.js, Express, React, Spring Boot"] },
      { type: "Công cụ & Khác", items: ["Git, Docker (Cơ bản), AWS (Cơ bản)"] }
    ],
    hobbies: [
      "Tìm hiểu công nghệ mới, vi mạch điện tử",
      "Chơi thể thao: bóng rổ, bóng đá, cầu lông"
    ]
  },
  mainContent: [
    {
      title: "MỤC TIÊU NGHỀ NGHIỆP",
      icon: Briefcase,
      type: "objective",
      content: "Tôi mong muốn được tiếp cận môi trường làm việc chuyên nghiệp để hiểu rõ hơn cách vận hành thực tế của các hệ thống kỹ thuật và công nghệ. Thông qua kỳ thực tập, tôi hy vọng sẽ tích lũy thêm kinh nghiệm, rèn luyện kỹ năng chuyên môn cũng như kỹ năng mềm, từ đó định hướng rõ hơn con đường phát triển nghề nghiệp trong lĩnh vực điện tử – tin học. Về lâu dài, tôi hướng đến việc trở thành một kỹ sư có khả năng ứng dụng công nghệ vào giải quyết các vấn đề thực tiễn."
    },
    {
      title: "DỰ ÁN",
      icon: Code,
      type: "projects",
      projects: [
        {
          name: "Hệ thống quản trị nội dung (CMS)",
          description: "Phát triển Hệ thống CMS bằng C++ theo nguyên tắc (OOP). Triển khai các tính năng cho việc đăng ký khóa học, quản lý sinh viên và xác thực người dùng.",
          tech: ["C++", "OOP"],
          link: "https://github.com/DuyThang221/CMS-OOP-Group-4"
        },
        {
          name: "Hệ thống nhận diện ngôn ngữ ký hiệu tay",
          description: "Phát triển hệ thống nhận diện cử chỉ tay bằng Python, sử dụng mô hình CNN và VGG16. Áp dụng TensorFlow, Keras, Mediapipe, để xử lý hình ảnh và tách nền.",
          tech: ["Python", "TensorFlow", "Keras", "Mediapipe"],
          link: ""
        },
        {
          name: "Hệ thống Đèn đường Bật Tắt Tự Động Trong 12 Giờ",
          description: "Thiết kế mạch điều khiển đèn đường tự động bằng IC 555, 7490, 74LS74, 4511. Tạo xung thời gian, đếm giờ, hiển thị trạng thái trên LED 7 đoạn.",
          tech: ["IC 555", "Mạch Điện tử"],
          link: ""
        }
      ]
    },
    {
      title: "KINH NGHIỆM LÀM VIỆC & HOẠT ĐỘNG",
      icon: Star,
      type: "experience",
      experiences: [
        {
          period: "8/2022 - 6/2023",
          company: "Gia sư dạy Online",
          position: "Giảng dạy môn Vật lý và môn Toán cấp Cơ sở, cấp Phổ thông."
        },
        {
          period: "Từ 2022 đến nay (6 đợt)",
          company: "Cộng tác viên - Ngày hội Sinh viên và Doanh nghiệp",
          position: "Hỗ trợ doanh nghiệp và các bạn sinh viên, góp phần tạo cầu nối giữa doanh nghiệp và sinh viên trong trường, hỗ trợ lan tỏa thông tin tuyển dụng và định hướng nghề nghiệp.",
          description: "" 
}
      ]
    },
    {
      title: "LIÊN HỆ",
      icon: Mail,
      type: "contact",
      contactItems: [
        { icon: Mail, text: "leduythang2010@gmail.com", link: "mailto:leduythang2010@gmail.com" }, 
        { icon: Phone, text: "(+84) 344 702 605", link: "tel:+84344702605" }, 
        { icon: MapPin, text: "Dĩ An, Bình Dương", link: "#" }, 
      ]
    }
  ]
};

// Component Tag
const TechTag = ({ children }: { children: any }) => (
  <span className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-0.5 rounded-full mr-1 mb-1">
    {children}
  </span>
);

export default function CVPage() {
  const { name, contactHeader, sidebar, mainContent } = cvData;

  return (
    <div className="min-h-screen bg-neutral-100 font-sans">
      {/* Header */}
      <header className="bg-blue-900 text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-10 shadow-md">
        <h1 className="text-2xl font-bold">{name}</h1>
        <div className="flex space-x-4">
          {contactHeader.map((item, index) => (
            <a key={index} href={item.link || '#'} className="flex items-center text-sm hover:underline">
              {item.icon && <item.icon className="w-4 h-4 mr-1" />}
              <span>{item.text}</span>
            </a>
          ))}
        </div>
      </header>

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto pt-20"> {/* pt-20 để bù cho fixed header */}
        {/* Left Sidebar */}
        <aside className="lg:w-1/3 bg-blue-800 text-white p-6 shadow-lg rounded-bl-lg rounded-br-lg lg:rounded-br-none lg:rounded-tr-lg mb-6 lg:mb-0">
          <div className="text-center mb-6">
            {sidebar.photo && (
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-md">
                <Image src={sidebar.photo} alt="Avatar" layout="fill" objectFit="cover" />
              </div>
            )}
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-blue-100 text-sm">{cvData.title}</p>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h3 className="text-lg font-bold border-b border-blue-600 pb-2 mb-3 flex items-center"><GraduationCap className="w-5 h-5 mr-2" /> Học Vấn</h3>
            {sidebar.education.map((edu, index) => (
              <div key={index} className="mb-3">
                <p className="font-semibold text-blue-200">{edu.degree}</p>
                <p className="text-sm">{edu.school}</p>
                <p className="text-xs text-blue-300">{edu.period}</p>
                {edu.gpa && <p className="text-xs text-blue-300">{edu.gpa}</p>}
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h3 className="text-lg font-bold border-b border-blue-600 pb-2 mb-3 flex items-center"><Briefcase className="w-5 h-5 mr-2" /> Kỹ Năng</h3>
            {sidebar.skills.map((skillGroup, index) => (
              <div key={index} className="mb-3">
                <p className="font-semibold text-blue-200">{skillGroup.type}:</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="bg-blue-700 text-blue-100 text-xs px-2 py-0.5 rounded-full">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Hobbies */}
          <div>
            <h3 className="text-lg font-bold border-b border-blue-600 pb-2 mb-3 flex items-center"><Heart className="w-5 h-5 mr-2" /> Sở Thích</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              {sidebar.hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Right Main Content */}
        <main className="lg:w-2/3 bg-white p-8 shadow-lg rounded-tr-lg rounded-br-lg lg:rounded-tl-none">
          {mainContent.map((section, index) => (
            <section key={index} className="mb-8">
              <h2 className="text-xl font-bold text-blue-900 border-b-2 border-blue-200 pb-2 mb-4 flex items-center">
                {section.icon && <section.icon className="w-5 h-5 mr-2 text-blue-700" />}
                {section.title}
              </h2>

              {section.type === "objective" && (
                <p className="text-gray-700 leading-relaxed text-base">{section.content}</p>
              )}

              {section.type === "projects" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.projects && section.projects.map((project, pIdx) => (
                    <div key={pIdx} className="border border-blue-100 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-lg font-semibold text-blue-800">{project.name}</h3>
                      <p className="text-gray-600 text-sm mt-1 mb-2">{project.description}</p>
                      <div className="flex flex-wrap">
                        {project.tech.map((tech, tIdx) => (
                          <TechTag key={tIdx}>{tech}</TechTag>
                        ))}
                      </div>
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm mt-2 block">
                          Xem dự án (GitHub)
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {section.type === "experience" && (
                <div className="space-y-6">
                  {section.experiences && section.experiences.map((exp, expIdx) => (
                    <div key={expIdx} className="relative pl-6 border-l-2 border-blue-200">
                      <span className="absolute -left-3 top-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold"></span>
                      <p className="text-sm text-gray-500">{exp.period}</p>
                      <h3 className="text-md font-bold text-gray-900 mt-1">{exp.company}</h3>
                      <p className="text-gray-700 italic">{exp.position}</p>
                      {exp.description && <p className="text-gray-600 text-sm mt-1">{exp.description}</p>}
                    </div>
                  ))}
                </div>
              )}

              {section.type === "contact" && (
                <div className="space-y-3">
                  {section.contactItems && section.contactItems.map((item, cIdx) => (
                    <div key={cIdx} className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5 text-blue-700" />
                      <a href={item.link || '#'} className="text-gray-700 hover:underline">{item.text}</a>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}