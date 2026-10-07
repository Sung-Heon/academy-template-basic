ALTER TABLE "Student" ADD COLUMN IF NOT EXISTS "createdAt" TEXT;
CREATE INDEX "Student_created_at" ON "Student" ("createdAt", "id");
ALTER TABLE "Class" ADD COLUMN IF NOT EXISTS "createdAt" TEXT;
CREATE INDEX "Class_created_at" ON "Class" ("createdAt", "id");
ALTER TABLE "Attendance" ADD COLUMN IF NOT EXISTS "createdAt" TEXT;
CREATE INDEX "Attendance_created_at" ON "Attendance" ("createdAt", "id");
ALTER TABLE "Consultation" ADD COLUMN IF NOT EXISTS "createdAt" TEXT;
CREATE INDEX "Consultation_created_at" ON "Consultation" ("createdAt", "id");
