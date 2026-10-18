import type { Area, Slide } from "./types";
export const verifiedOn = "2026-10-18";
export const sources = [
  {
    title: "NUS CS Focus Areas",
    url: "https://www.comp.nus.edu.sg/programmes/ug/focus/",
  },
  {
    title: "NUS Computer Science curriculum",
    url: "https://www.comp.nus.edu.sg/programmes/ug/cs/curr/",
  },
  {
    title: "NUS Computer Engineering",
    url: "https://www.comp.nus.edu.sg/programmes/ug/ceg/",
  },
];
export const areas: Area[] = [
  {
    id: "algorithms",
    en: "Algorithms & Theory",
    vi: "Thuật toán và lý thuyết",
    question: "Làm thế nào để tìm tuyến giao hàng ngắn nhất?",
    explanation:
      "Nghiên cứu phương pháp giải quyết bài toán và phân tích tính đúng đắn, hiệu quả của phương pháp đó.",
    application: "Tối ưu tuyến giao hàng, lịch học và phân bổ nguồn lực.",
    interest:
      "Phù hợp để khám phá nếu các em thích toán, giải đố và tìm cách giải bài toán hiệu quả hơn.",
    careers: [
      {
        title: "Algorithms engineer",
        work: "Thiết kế và cải tiến thuật toán để giải quyết các bài toán phức tạp.",
      },
      {
        title: "Optimisation engineer",
        work: "Tối ưu lịch trình, lộ trình và nguồn lực.",
      },
    ],
    color: "#11695d",
    symbol: "↗",
  },
  {
    id: "ai",
    en: "Artificial Intelligence",
    vi: "Trí tuệ nhân tạo",
    question: "Máy tính học từ các ví dụ như thế nào?",
    explanation:
      "Xây dựng hệ thống có khả năng học từ dữ liệu, suy luận và hỗ trợ ra quyết định.",
    application:
      "Nhận diện hình ảnh, gợi ý nội dung và xây dựng trợ lý trò chuyện.",
    interest:
      "Phù hợp để khám phá nếu các em muốn biết máy tính học từ dữ liệu và đưa ra dự đoán như thế nào.",
    careers: [
      { title: "ML engineer", work: "Xây dựng và triển khai mô hình học máy." },
      {
        title: "Applied AI engineer",
        work: "Đưa AI vào sản phẩm giải quyết nhu cầu thực tế.",
      },
    ],
    color: "#7250a2",
    symbol: "✳",
  },
  {
    id: "graphics",
    en: "Computer Graphics and Games",
    vi: "Đồ hoạ máy tính và trò chơi",
    question: "Làm thế nào để tạo ra hình ảnh và thế giới trong trò chơi?",
    explanation:
      "Sử dụng hình học, ánh sáng và mô phỏng chuyển động để tạo hình ảnh và môi trường tương tác.",
    application: "Trò chơi, phim hoạt hình và mô phỏng huấn luyện.",
    interest:
      "Phù hợp để khám phá nếu các em thích mỹ thuật, hình học và muốn tạo ra trò chơi hoặc thế giới ảo.",
    careers: [
      {
        title: "Graphics engineer",
        work: "Phát triển hệ thống tạo hình ảnh và hiệu ứng đồ hoạ.",
      },
      {
        title: "Game developer",
        work: "Lập trình cách trò chơi hoạt động và cách người chơi tương tác.",
      },
    ],
    color: "#9a541e",
    symbol: "◈",
  },
  {
    id: "security",
    en: "Computer Security",
    vi: "An toàn máy tính",
    question: "Ai có thể đọc tin nhắn của các em?",
    explanation:
      "Phân tích các mối đe doạ và xây dựng cơ chế bảo vệ hệ thống, dữ liệu và người sử dụng.",
    application: "Bảo vệ tài khoản, ứng dụng và thông tin liên lạc.",
    interest:
      "Phù hợp để khám phá nếu các em muốn tìm ra điểm yếu của hệ thống và bảo vệ người dùng trước các cuộc tấn công.",
    careers: [
      {
        title: "Security engineer",
        work: "Thiết kế các biện pháp bảo vệ và khắc phục điểm yếu của hệ thống.",
      },
      {
        title: "Security analyst",
        work: "Phân tích tấn công và ứng phó sự cố.",
      },
    ],
    color: "#a23d60",
    symbol: "◇",
  },
  {
    id: "databases",
    en: "Database Systems",
    vi: "Hệ cơ sở dữ liệu",
    question: "Làm thế nào để tìm một sản phẩm trong hàng triệu mặt hàng?",
    explanation:
      "Tổ chức, truy vấn và giữ dữ liệu nhất quán khi nhiều người cùng sử dụng.",
    application:
      "Quản lý sản phẩm trên sàn mua sắm, lưu trữ hồ sơ và xử lý đặt vé.",
    interest:
      "Phù hợp để khám phá nếu các em thích sắp xếp thông tin và tìm cách tra cứu nhanh, chính xác.",
    careers: [
      {
        title: "Database engineer",
        work: "Thiết kế hệ thống lưu trữ và truy vấn.",
      },
      {
        title: "Data engineer",
        work: "Xây dựng hệ thống thu thập, xử lý và cung cấp dữ liệu cho ứng dụng và hoạt động phân tích.",
      },
    ],
    color: "#205e99",
    symbol: "▤",
  },
  {
    id: "hci",
    en: "Human-Computer Interaction",
    vi: "Tương tác người – máy",
    question: "Điều gì khiến một ứng dụng dễ sử dụng?",
    explanation:
      "Tìm hiểu nhu cầu và cách người dùng thao tác để thiết kế công nghệ dễ sử dụng, kể cả với người cần hỗ trợ đặc biệt.",
    application: "Ứng dụng học tập, công cụ trợ năng và giao diện hằng ngày.",
    interest:
      "Phù hợp để khám phá nếu các em quan tâm đến tâm lý, thiết kế và trải nghiệm của người sử dụng.",
    careers: [
      {
        title: "UX engineer",
        work: "Kết hợp trải nghiệm người dùng và kỹ thuật giao diện.",
      },
      {
        title: "UX researcher",
        work: "Nghiên cứu nhu cầu và cách người dùng tương tác.",
      },
    ],
    color: "#805d16",
    symbol: "◎",
  },
  {
    id: "retrieval",
    en: "Multimedia Information Retrieval",
    vi: "Truy hồi thông tin đa phương tiện",
    question: "Làm thế nào để tìm kiếm bằng hình ảnh thay vì gõ từ khoá?",
    explanation:
      "Xây dựng cách lưu trữ, so sánh và tìm kiếm hình ảnh, âm thanh, video phù hợp với yêu cầu của người dùng.",
    application: "Tìm ảnh tương tự và tìm nội dung trong kho video.",
    interest:
      "Phù hợp để khám phá nếu các em muốn tìm hiểu cách máy tính tìm kiếm hình ảnh, âm thanh và video.",
    careers: [
      {
        title: "Search engineer",
        work: "Phát triển hệ thống tìm kiếm và sắp xếp kết quả theo mức độ phù hợp.",
      },
      {
        title: "Multimedia retrieval engineer",
        work: "Tìm nội dung phù hợp trong dữ liệu đa phương tiện.",
      },
    ],
    color: "#14677a",
    symbol: "⌕",
  },
  {
    id: "networks",
    en: "Networking and Distributed Systems",
    vi: "Mạng máy tính và hệ phân tán",
    question:
      "Làm sao để dịch vụ tiếp tục hoạt động khi một máy chủ gặp sự cố?",
    explanation:
      "Tổ chức việc trao đổi dữ liệu và phối hợp xử lý giữa nhiều máy tính, kể cả khi kết nối chậm hoặc có máy gặp sự cố.",
    application: "Nhắn tin, đám mây và dịch vụ nhiều người dùng.",
    interest:
      "Phù hợp để khám phá nếu các em muốn biết tin nhắn được chuyển đi như thế nào và dịch vụ trực tuyến vận hành ra sao.",
    careers: [
      {
        title: "Distributed systems engineer",
        work: "Phát triển dịch vụ có thể phân chia và phối hợp công việc trên nhiều máy tính.",
      },
      {
        title: "Network engineer",
        work: "Thiết kế và vận hành kết nối dữ liệu.",
      },
    ],
    color: "#416923",
    symbol: "⤨",
  },
  {
    id: "parallel",
    en: "Parallel Computing",
    vi: "Tính toán song song",
    question:
      "Dùng nhiều bộ xử lý có giúp hoàn thành công việc nhanh hơn không?",
    explanation: "Chia công việc để nhiều bộ xử lý thực hiện đồng thời.",
    application: "Xử lý ảnh, mô phỏng khoa học và huấn luyện mô hình.",
    interest:
      "Phù hợp để khám phá nếu các em muốn tìm cách chia nhỏ công việc để máy tính xử lý nhanh hơn.",
    careers: [
      {
        title: "Parallel computing engineer",
        work: "Thiết kế chương trình tận dụng nhiều bộ xử lý.",
      },
      {
        title: "GPU software engineer",
        work: "Tối ưu phần mềm cho bộ xử lý đồ hoạ.",
      },
    ],
    color: "#934a84",
    symbol: "≋",
  },
  {
    id: "languages",
    en: "Programming Languages",
    vi: "Ngôn ngữ lập trình",
    question: "Máy tính xử lý một dòng lệnh như thế nào?",
    explanation:
      "Nghiên cứu cách thiết kế ngôn ngữ lập trình và xây dựng công cụ phân tích, kiểm tra, thực thi chương trình.",
    application:
      "Trình biên dịch, công cụ kiểm tra chương trình và môi trường phát triển phần mềm.",
    interest:
      "Phù hợp để khám phá nếu các em thích tìm hiểu quy tắc của ngôn ngữ và xây dựng công cụ hỗ trợ lập trình.",
    careers: [
      {
        title: "Compiler engineer",
        work: "Phát triển công cụ chuyển đổi chương trình thành dạng có thể thực thi.",
      },
      {
        title: "Developer tools engineer",
        work: "Phát triển công cụ giúp lập trình viên viết, kiểm tra và sửa mã thuận tiện hơn.",
      },
    ],
    color: "#5656a1",
    symbol: "λ",
  },
  {
    id: "software",
    en: "Software Engineering",
    vi: "Kỹ nghệ phần mềm",
    question:
      "Làm sao để thêm tính năng mà các chức năng cũ vẫn hoạt động đúng?",
    explanation: "Thiết kế, xây dựng, kiểm thử và bảo trì phần mềm lâu dài.",
    application:
      "Phát triển và duy trì ứng dụng học tập, dịch vụ trực tuyến hoặc phần mềm có nhiều người cùng xây dựng.",
    interest:
      "Phù hợp để khám phá nếu các em thích làm việc nhóm và xây dựng sản phẩm từ ý tưởng ban đầu.",
    careers: [
      {
        title: "Software engineer",
        work: "Thiết kế, lập trình và bảo trì các tính năng của sản phẩm.",
      },
      {
        title: "Test automation engineer",
        work: "Xây dựng hệ thống kiểm thử tự động nhằm phát hiện lỗi và bảo đảm chất lượng phần mềm.",
      },
    ],
    color: "#236b4d",
    symbol: "⌘",
  },
];
export const slides: Slide[] = [
  {
    id: "opening",
    eyebrow: "MỘT CÂU HỎI ĐỂ BẮT ĐẦU",
    title: "Các em muốn giải quyết vấn đề gì bằng công nghệ?",
    body: "Ứng dụng học tập, trò chơi hay robot tự hành đều giúp giải quyết những nhu cầu cụ thể. Để tạo ra các sản phẩm ấy, người làm công nghệ cần những kiến thức và kỹ năng gì?",
  },
  {
    id: "speaker",
    eyebrow: "GIỚI THIỆU NGƯỜI CHIA SẺ",
    title: "Nhâm Quốc Hùng",
    body: "Kỹ sư dữ liệu và phần mềm · Tư vấn học tập và định hướng ngành học",
  },
  {
    id: "cs-overview",
    eyebrow: "HIỂU NỀN TẢNG / COMPUTER SCIENCE",
    title: "Khoa học máy tính là gì?",
    body: "Khoa học máy tính (Computer Science — CS) nghiên cứu cách biểu diễn, xử lý thông tin và giải quyết vấn đề bằng tính toán: từ các nguyên lý, thuật toán đến việc xây dựng hệ thống phần mềm.",
  },
  {
    id: "comparison",
    eyebrow: "01 / HIỂU NGÀNH",
    title: "Khoa học máy tính và Kỹ thuật máy tính",
    body: "Hai ngành có nhiều kiến thức nền tảng chung, nhưng khác nhau về trọng tâm đào tạo. Cùng xem mỗi ngành đóng góp như thế nào vào một robot giao hàng.",
  },
  {
    id: "map",
    eyebrow: "02 / CÁC HƯỚNG CHUYÊN SÂU",
    title: "Các hướng chuyên sâu trong Khoa học máy tính",
    body: "Chương trình CS của NUS tổ chức các nhóm học phần thành 11 Focus Areas. Qua những nhóm này, các em có thể hình dung ngành nghiên cứu điều gì, được ứng dụng ở đâu và liên quan đến những công việc nào.",
  },
  {
    id: "algorithms",
    eyebrow: "03 / THỬ NGHIỆM",
    title: "Thuật toán: tìm lời giải hiệu quả",
    body: "Bài toán chọn tuyến giao hàng giúp các em hiểu cách thuật toán so sánh các phương án và tìm lời giải tối ưu.",
    areaId: "algorithms",
  },
  {
    id: "ai",
    eyebrow: "04 / THỬ NGHIỆM",
    title: "Trí tuệ nhân tạo: máy tính học từ dữ liệu như thế nào?",
    body: "Hãy thay đổi dữ liệu đầu vào và quan sát cách một mô hình đơn giản dự đoán dựa trên những ví dụ đã được gán nhãn.",
    areaId: "ai",
  },
  {
    id: "graphics",
    eyebrow: "05 / THỬ NGHIỆM",
    title: "Đồ hoạ máy tính: mô phỏng hình ảnh và ánh sáng",
    body: "Điều chỉnh hướng chiếu sáng để quan sát cách tính toán hình học tạo nên cảm giác về hình khối và chiều sâu.",
    areaId: "graphics",
  },
  {
    id: "networks",
    eyebrow: "06 / THỬ NGHIỆM",
    title: "Mạng máy tính: tin nhắn đến nơi bằng cách nào?",
    body: "Gửi dữ liệu từ máy A đến máy D, rồi cho máy B gặp sự cố và gửi lại. Quan sát cách đường truyền thay đổi và điều gì xảy ra khi máy nhận mất kết nối.",
    areaId: "networks",
  },
  {
    id: "security",
    eyebrow: "07 / THỬ NGHIỆM",
    title: "An toàn máy tính: bảo vệ nội dung tin nhắn",
    body: "Thử gửi tin nhắn khi bật và tắt mã hoá để quan sát thông tin xuất hiện trên đường truyền. Ví dụ này giúp các em hình dung vai trò của mã hoá trong việc bảo vệ dữ liệu.",
    areaId: "security",
  },
  {
    id: "careers",
    eyebrow: "08 / TÌM HIỂU NGHỀ NGHIỆP",
    title: "Từ sở thích đến lựa chọn nghề nghiệp",
    body: "Các em có thể bắt đầu từ một vấn đề mình quan tâm, sau đó tìm hiểu kiến thức, kỹ năng và công việc liên quan. Một nghề nghiệp thường kết hợp nhiều lĩnh vực chuyên môn.",
  },
  {
    id: "closing",
    eyebrow: "BƯỚC TIẾP THEO",
    title: "Bắt đầu từ một vấn đề các em muốn giải quyết",
    body: "Các em chưa cần chọn nghề ngay hôm nay. Hãy chọn một việc muốn cải thiện ở trường hoặc trong cuộc sống, rồi thử làm một dự án nhỏ. Qua mỗi lần tìm hiểu và thử sức, các em sẽ hiểu rõ hơn mình thích gì và muốn học thêm điều gì.",
  },
];

export const speakerHighlights = [
  {
    label: "TRẢI NGHIỆM QUỐC TẾ",
    title: "12 năm tại Singapore",
    description:
      "12 năm sinh sống và học tập tại Singapore, trải nghiệm môi trường giáo dục và văn hoá quốc tế.",
  },
  {
    label: "HỌC BỔNG ASEAN",
    title: "Từ phổ thông đến đại học",
    description:
      "4 năm học bổng ASEAN bậc phổ thông và 4 năm học bổng ASEAN bậc đại học.",
  },
  {
    label: "CHUYÊN MÔN CS",
    title: "NUS Computer Science",
    description:
      "Tốt nghiệp ngành Khoa học máy tính với bằng danh dự loại Distinction; hướng chuyên sâu Hệ cơ sở dữ liệu.",
  },
  {
    label: "KINH NGHIỆM KỸ THUẬT",
    title: "Kinh nghiệm tại các công ty quốc tế",
    description:
      "Kinh nghiệm làm việc tại PSA International, Sea Group, Rakuten Group và Torilab.",
  },
  {
    label: "TIẾP TỤC HỌC HỎI",
    title: "University of Texas at Austin",
    description:
      "Đang theo học thạc sĩ Khoa học máy tính (2024–2026), tập trung vào học máy, tối ưu hoá và các mô hình học sâu.",
  },
  {
    label: "TƯ VẤN GIÁO DỤC",
    title: "Tư vấn học tập và định hướng ngành học",
    description:
      "Tư vấn lựa chọn ngành học, xây dựng lộ trình học tập và chuẩn bị hồ sơ học bổng; hướng dẫn học sinh kết nối năng lực, sở thích với mục tiêu dài hạn.",
  },
];
