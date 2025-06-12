export type Flashcard = {
  id: string;
  term: string;
  translation: string;
  exampleEn: string;
  exampleVi: string;
};

export const flashcards: Flashcard[] = [
  {
    id: '1',
    term: 'Scope',
    translation: 'Phạm vi',
    exampleEn: 'The project scope defines what is included and excluded from the project.',
    exampleVi: 'Phạm vi dự án xác định những gì được bao gồm và loại trừ khỏi dự án.',
  },
  {
    id: '2',
    term: 'Milestone',
    translation: 'Cột mốc',
    exampleEn: 'A milestone marks a significant point or event in a project.',
    exampleVi: 'Cột mốc đánh dấu một điểm hoặc sự kiện quan trọng trong dự án.',
  },
  {
    id: '3',
    term: 'Stakeholder',
    translation: 'Các bên liên quan',
    exampleEn: 'Stakeholder engagement is crucial for project success.',
    exampleVi: 'Sự tham gia của các bên liên quan là rất quan trọng cho thành công của dự án.',
  },
  {
    id: '4',
    term: 'Deliverable',
    translation: 'Sản phẩm bàn giao',
    exampleEn: 'A deliverable is any unique and verifiable product, result, or capability.',
    exampleVi: 'Sản phẩm bàn giao là bất kỳ sản phẩm, kết quả hoặc khả năng nào độc đáo và có thể xác minh.',
  },
  {
    id: '5',
    term: 'Risk',
    translation: 'Rủi ro',
    exampleEn: 'Risk management helps identify and mitigate potential problems.',
    exampleVi: 'Quản lý rủi ro giúp xác định và giảm thiểu các vấn đề tiềm ẩn.',
  },
]; 