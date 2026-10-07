import type { AcademyConfig } from './model.ts';
export const config: AcademyConfig = {
  "id": "basic-academy",
  "name": "Basic Academy",
  "primary": "Student",
  "tagline": "학생의 하루를, 더 가까이 살피는 학원.",
  "description": "학생 · 수업 · 출결 · 상담을 한곳에서",
  "eyebrow": "LEARN TODAY, GROW TOMORROW",
  "accent": "#17694f",
  "tint": "#eaf4ec",
  "entities": {
    "Student": {
      "label": "학생 관리",
      "description": "학생과 보호자의 연락처를 관리해요.",
      "icon": "♙",
      "layout": "table",
      "fields": [
        {
          "name": "name",
          "label": "이름",
          "type": "text",
          "required": true
        },
        {
          "name": "phone",
          "label": "전화번호",
          "type": "text",
          "required": false
        },
        {
          "name": "guardianName",
          "label": "보호자 이름",
          "type": "text",
          "required": false
        },
        {
          "name": "guardianPhone",
          "label": "보호자 전화번호",
          "type": "text",
          "required": false
        }
      ]
    },
    "Class": {
      "label": "수업 관리",
      "description": "수업과 담당 선생님을 기록해요.",
      "icon": "▤",
      "layout": "cards",
      "fields": [
        {
          "name": "name",
          "label": "수업명",
          "type": "text",
          "required": true
        },
        {
          "name": "teacher",
          "label": "담당 선생님",
          "type": "text",
          "required": false
        }
      ]
    },
    "Attendance": {
      "label": "출결 관리",
      "description": "학생별 출석과 결석을 기록해요.",
      "icon": "✓",
      "layout": "table",
      "fields": [
        {
          "name": "studentId",
          "label": "학생",
          "type": "text",
          "required": true,
          "relation": "Student"
        },
        {
          "name": "date",
          "label": "날짜",
          "type": "date"
        },
        {
          "name": "status",
          "label": "출결",
          "type": "select",
          "required": true,
          "options": [
            {
              "value": "present",
              "label": "출석"
            },
            {
              "value": "absent",
              "label": "결석"
            },
            {
              "value": "late",
              "label": "지각"
            }
          ]
        }
      ]
    },
    "Consultation": {
      "label": "상담 기록",
      "description": "학생의 성장과 보호자 상담을 기록해요.",
      "icon": "↔",
      "layout": "cards",
      "fields": [
        {
          "name": "studentId",
          "label": "학생",
          "type": "text",
          "required": true,
          "relation": "Student"
        },
        {
          "name": "date",
          "label": "날짜",
          "type": "date"
        },
        {
          "name": "memo",
          "label": "상담 내용",
          "type": "textarea"
        }
      ]
    }
  },
  "metrics": [
    {
      "entity": "Student",
      "label": "학생 관리"
    },
    {
      "entity": "Class",
      "label": "수업 관리"
    },
    {
      "entity": "Attendance",
      "label": "출결 관리"
    },
    {
      "entity": "Consultation",
      "label": "상담 기록"
    }
  ],
  "timestamps": true
};
